import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const title = searchParams.get('title') || 'شرکت دانش‌بنیان فناوری هوشمند میکائیل';
    const category = searchParams.get('category') || 'فناوری و رباتیک خودران';
    const author = searchParams.get('author') || 'تیم پژوهش و مهندسی میکائیل';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            backgroundColor: '#0A101D',
            padding: '60px 70px',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            direction: 'rtl',
            position: 'relative',
          }}
        >
          {/* Subtle Ambient Glow */}
          <div
            style={{
              position: 'absolute',
              top: '-100px',
              right: '-100px',
              width: '450px',
              height: '450px',
              borderRadius: '50%',
              backgroundColor: 'rgba(16, 185, 129, 0.15)',
              filter: 'blur(90px)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '-80px',
              left: '-80px',
              width: '350px',
              height: '350px',
              borderRadius: '50%',
              backgroundColor: 'rgba(56, 189, 248, 0.1)',
              filter: 'blur(80px)',
            }}
          />

          {/* Top Bar: Brand & Category */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            {/* Brand Logo & Name */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '14px',
                  backgroundColor: '#10B981',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  fontSize: '24px',
                  fontWeight: 800,
                  boxShadow: '0 8px 16px -4px rgba(16, 185, 129, 0.5)',
                }}
              >
                M
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '20px', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.5px' }}>
                  میکائیل | Mitech
                </span>
                <span style={{ fontSize: '12px', color: '#94A3B8' }}>
                  فناوری ناوبری خودران و رباتیک سازمانی
                </span>
              </div>
            </div>

            {/* Category Badge */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'rgba(16, 185, 129, 0.15)',
                border: '1px solid rgba(16, 185, 129, 0.35)',
                color: '#34D399',
                padding: '8px 20px',
                borderRadius: '9999px',
                fontSize: '15px',
                fontWeight: 700,
              }}
            >
              {category}
            </div>
          </div>

          {/* Middle: Article Title */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              margin: '30px 0',
            }}
          >
            <h1
              style={{
                fontSize: title.length > 55 ? '44px' : '54px',
                lineHeight: 1.35,
                fontWeight: 800,
                color: '#F8FAFC',
                margin: 0,
                letterSpacing: '-1px',
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {title}
            </h1>
          </div>

          {/* Bottom Bar: Author & Domain */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: '25px',
              borderTop: '1px solid rgba(148, 163, 184, 0.15)',
              width: '100%',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '15px', color: '#94A3B8', fontWeight: 500 }}>
                نویسنده و تحلیل:
              </span>
              <span style={{ fontSize: '16px', color: '#E2E8F0', fontWeight: 700 }}>
                {author}
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', direction: 'ltr' }}>
              <span style={{ fontSize: '16px', color: '#10B981', fontWeight: 800 }}>
                mitech.ir
              </span>
              <span style={{ fontSize: '14px', color: '#64748B' }}>/blog</span>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (error) {
    console.error('Error generating dynamic OG image:', error);
    return new Response('Failed to generate image', { status: 500 });
  }
}
