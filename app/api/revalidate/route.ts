import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';

const EXPECTED_SECRET =
  process.env.SANITY_REVALIDATE_SECRET ||
  process.env.SANITY_WEBHOOK_SECRET ||
  'mitech_revalidation_secret_2026';

function verifySecret(req: NextRequest): boolean {
  const { searchParams } = new URL(req.url);
  const querySecret = searchParams.get('secret');
  if (querySecret && querySecret === EXPECTED_SECRET) {
    return true;
  }

  const customHeaderSecret = req.headers.get('x-sanity-webhook-secret');
  if (customHeaderSecret && customHeaderSecret === EXPECTED_SECRET) {
    return true;
  }

  const authHeader = req.headers.get('authorization');
  if (authHeader) {
    const parts = authHeader.split(' ');
    if (parts.length === 2 && parts[0].toLowerCase() === 'bearer' && parts[1] === EXPECTED_SECRET) {
      return true;
    }
  }

  return false;
}

export async function POST(request: NextRequest) {
  try {
    if (!verifySecret(request)) {
      return NextResponse.json(
        { error: 'Unauthorized: Invalid or missing revalidation secret token' },
        { status: 401 }
      );
    }

    let body: any = {};
    try {
      body = await request.json();
    } catch {
      // Empty or non-JSON body is acceptable if query/headers provided
      body = {};
    }

    const { searchParams } = new URL(request.url);

    // Support both direct string slug or Sanity slug object { current: '...' }
    let slug: string | null =
      searchParams.get('slug') ||
      (typeof body?.slug === 'string' ? body.slug : body?.slug?.current) ||
      (typeof body?.slugCurrent === 'string' ? body.slugCurrent : null);

    const docType: string = body?._type || searchParams.get('type') || 'post';

    const revalidatedPaths: string[] = [];

    // 1. Revalidate main blog catalog
    revalidatePath('/blog');
    revalidatedPaths.push('/blog');

    // 2. Revalidate dynamic XML sitemap so search engines see the new lastmod immediately
    revalidatePath('/sitemap.xml');
    revalidatedPaths.push('/sitemap.xml');

    // 3. Revalidate homepage in case featured/latest posts are displayed
    revalidatePath('/');
    revalidatedPaths.push('/');

    // 4. Revalidate specific post page if slug is available
    if (slug) {
      // Normalize slug by removing leading/trailing slashes
      slug = slug.replace(/^\/+|\/+$/g, '');
      const postPath = `/blog/${slug}`;
      revalidatePath(postPath);
      revalidatePath('/blog/[...slug]', 'page');
      revalidatedPaths.push(postPath);

      try {
        revalidateTag(`post-${slug}`, { expire: 0 });
      } catch {
        // Tag revalidation safety fallback
      }
    }

    // 5. Revalidate general posts cache tag
    try {
      revalidateTag('posts', { expire: 0 });
    } catch {
      // Tag revalidation safety fallback
    }

    return NextResponse.json({
      revalidated: true,
      documentType: docType,
      slug: slug || null,
      revalidatedPaths,
      timestamp: new Date().toISOString(),
      message: 'On-demand cache revalidation executed successfully.',
    });
  } catch (error: any) {
    console.error('Error in Sanity revalidation endpoint:', error);
    return NextResponse.json(
      { error: 'Failed to revalidate cache', details: error?.message },
      { status: 500 }
    );
  }
}

// Support GET requests for easy manual verification or browser test triggers
export async function GET(request: NextRequest) {
  return POST(request);
}
