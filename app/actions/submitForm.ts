'use server';

import { writeClient } from '@/sanity/lib/writeClient';
import { formSubmissionSchema, type FormSubmissionInput } from '@/lib/validations/formSchema';
import { getClientIp, checkRateLimit } from '@/lib/rateLimit';

export interface FormSubmissionPayload {
  name: string;
  phone: string;
  email?: string;
  organization?: string;
  formType?: 'demo' | 'sales' | 'contact' | 'fleet_pilot' | 'general' | string;
  subject?: string;
  message?: string;
  // Honeypot field - must always be empty when submitted by genuine humans
  website_hp?: string;
}

export interface FormSubmissionResponse {
  success: boolean;
  id?: string;
  error?: string;
  fieldErrors?: Record<string, string>;
}

/**
 * Server action to securely validate and store form submissions directly into Sanity.
 * Implements a 3-layer security defense:
 * 1. Honeypot Bot Trap: Silently drops requests from bots filling out hidden inputs.
 * 2. Sliding Window IP Rate Limiting: Blocks automated spam and brute force (max 5/15m).
 * 3. Strict Zod Schema Validation: Enforces data integrity before triggering mutations.
 */
export async function submitForm(
  data: FormSubmissionPayload
): Promise<FormSubmissionResponse> {
  try {
    // ── Layer 1: Honeypot Bot Trap ──
    if (data.website_hp && data.website_hp.trim() !== '') {
      // Bot trapped! Silently return fake success so the bot terminates without retrying
      console.warn('[submitForm] Honeypot triggered. Silently aborting bot submission.');
      return {
        success: true,
        id: 'hp-drop',
      };
    }

    // ── Layer 2: IP-Based Sliding Window Rate Limiting ──
    const clientIp = await getClientIp();
    const rateLimit = checkRateLimit(clientIp, 5, 15 * 60 * 1000);
    if (!rateLimit.allowed) {
      console.warn(`[submitForm] Rate limit exceeded for IP: ${clientIp}`);
      return {
        success: false,
        error: `تعداد تلاش‌های شما بیش از حد مجاز است. لطفاً پس از ${Math.ceil(
          rateLimit.resetSeconds / 60
        )} دقیقه مجدداً تلاش نمایید.`,
      };
    }

    // ── Layer 3: Strict Zod Schema Validation ──
    const validationResult = formSubmissionSchema.safeParse(data);
    if (!validationResult.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of validationResult.error.issues) {
        const fieldName = issue.path[0] as string;
        if (fieldName && !fieldErrors[fieldName]) {
          fieldErrors[fieldName] = issue.message;
        }
      }

      const primaryErrorMessage =
        validationResult.error.issues[0]?.message || 'اطلاعات وارد شده نامعتبر است.';

      return {
        success: false,
        error: primaryErrorMessage,
        fieldErrors,
      };
    }

    const validData = validationResult.data;

    // ── Layer 4: Server Token Verification & Sanity Mutation ──
    const token = process.env.SANITY_WRITE_TOKEN || process.env.SANITY_TOKEN;
    if (!token) {
      console.error('[submitForm] Missing SANITY_WRITE_TOKEN or SANITY_TOKEN on server.');
      return {
        success: false,
        error: 'خطای پیکربندی سرور: توکن دسترسی سنتی معتبر نیست.',
      };
    }

    const newDoc = await writeClient.create({
      _type: 'formSubmission',
      name: validData.name,
      phone: validData.phone,
      email: validData.email || undefined,
      organization: validData.organization || undefined,
      formType: validData.formType,
      subject: validData.subject || undefined,
      message: validData.message || undefined,
      status: 'unread',
      submittedAt: new Date().toISOString(),
    });

    return {
      success: true,
      id: newDoc._id,
    };
  } catch (error: any) {
    console.error('[submitForm] Secure mutation error:', error?.message);
    return {
      success: false,
      error: 'خطا در ثبت اطلاعات در سامانه. لطفاً مجدداً تلاش کنید.',
    };
  }
}
