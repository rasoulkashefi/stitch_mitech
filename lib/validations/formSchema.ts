import { z } from 'zod';

/**
 * Normalizes phone numbers by stripping whitespace, dashes, and parentheses.
 */
export const sanitizePhoneNumber = (val: string) => {
  return val.replace(/[\s\-\(\)]/g, '');
};

// Regex for valid phone numbers:
// Accepts Iranian mobile (09XXXXXXXXX, +989XXXXXXXXX), landlines (021XXXXXXXX, +9821XXXXXXXX),
// or general international phone numbers between 7 and 15 digits.
const phoneRegex = /^(?:(?:\+|00)98|0)?[1-9]\d{7,13}$/;

export const formSubmissionSchema = z.object({
  name: z
    .string({ message: 'نام و نام خانوادگی الزامی است.' })
    .trim()
    .min(2, { message: 'نام و نام خانوادگی باید حداقل ۲ کاراکتر باشد.' })
    .max(80, { message: 'نام و نام خانوادگی نمی‌تواند بیش از ۸۰ کاراکتر باشد.' }),

  phone: z
    .string({ message: 'شماره تماس الزامی است.' })
    .trim()
    .min(1, { message: 'شماره تماس الزامی است.' })
    .transform(sanitizePhoneNumber)
    .refine((val) => phoneRegex.test(val), {
      message: 'لطفاً یک شماره تماس معتبر (موبایل یا تلفن ثابت) وارد نمایید.',
    }),

  email: z
    .string()
    .trim()
    .optional()
    .refine((val) => !val || z.string().email().safeParse(val).success, {
      message: 'فرمت پست الکترونیک (ایمیل) وارد شده نامعتبر است.',
    }),

  organization: z
    .string()
    .trim()
    .max(120, { message: 'نام شرکت/سازمان نمی‌تواند بیش از ۱۲۰ کاراکتر باشد.' })
    .optional(),

  formType: z
    .enum(['demo', 'sales', 'contact', 'fleet_pilot', 'general'])
    .default('general'),

  subject: z
    .string()
    .trim()
    .max(150, { message: 'موضوع نمی‌تواند بیش از ۱۵۰ کاراکتر باشد.' })
    .optional(),

  message: z
    .string()
    .trim()
    .max(3000, { message: 'متن پیام نمی‌تواند بیش از ۳۰۰۰ کاراکتر باشد.' })
    .optional(),

  // Honeypot field - must always be empty when submitted by genuine humans
  website_hp: z.string().optional(),
});

export type FormSubmissionInput = z.input<typeof formSubmissionSchema>;
export type FormSubmissionOutput = z.output<typeof formSubmissionSchema>;
