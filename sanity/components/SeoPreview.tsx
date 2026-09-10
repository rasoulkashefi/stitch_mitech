'use client';

import React, { useState } from 'react';
import { useFormValue } from 'sanity';
import { Card, Stack, Text, Flex, Button, Box, Badge } from '@sanity/ui';

export function SeoPreview() {
  const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop');

  // Read current form values
  const title = (useFormValue(['title']) as string) || '';
  const slug = (useFormValue(['slug', 'current']) as string) || '';
  const excerpt = (useFormValue(['excerpt']) as string) || '';
  const metaTitle = (useFormValue(['seo', 'metaTitle']) as string) || '';
  const metaDescription = (useFormValue(['seo', 'metaDescription']) as string) || '';

  const displayTitle = metaTitle || title || 'عنوان مقاله در گوگل ظاهر خواهد شد';
  const displayDescription =
    metaDescription ||
    excerpt ||
    'توضیحات متای سئو در این قسمت قرار می‌گیرد تا مخاطبان با مشاهده آن در نتایج جستجو به کلیک روی مقاله ترغیب شوند.';
  const displaySlug = slug || 'عنوان-مقاله';
  const displayUrl = `https://mitech.ir/blog/${displaySlug}`;

  return (
    <Card padding={4} radius={3} tone="transparent" border style={{ backgroundColor: '#f8fafc' }}>
      <Stack gap={4}>
        {/* Header with Switcher */}
        <Flex align="center" justify="space-between">
          <Flex align="center" gap={2}>
            <Badge tone="primary" fontSize={1} padding={2}>
              پیش‌نمایش زنده در گوگل (SERP Simulator)
            </Badge>
          </Flex>

          <Flex align="center" gap={1}>
            <Button
              padding={2}
              mode={device === 'desktop' ? 'default' : 'bleed'}
              tone={device === 'desktop' ? 'primary' : 'default'}
              text="دسکتاپ (Desktop)"
              onClick={() => setDevice('desktop')}
            />
            <Button
              padding={2}
              mode={device === 'mobile' ? 'default' : 'bleed'}
              tone={device === 'mobile' ? 'primary' : 'default'}
              text="موبایل (Mobile)"
              onClick={() => setDevice('mobile')}
            />
          </Flex>
        </Flex>

        {/* Google Result Preview Box */}
        <Box
          padding={4}
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.08), 0 1px 2px -1px rgba(0, 0, 0, 0.08)',
            maxWidth: device === 'desktop' ? '650px' : '420px',
            direction: 'rtl',
            textAlign: 'right',
            fontFamily: "'Vazirmatn', system-ui, -apple-system, sans-serif",
            transition: 'max-width 0.25s ease',
          }}
        >
          {/* Site URL & Favicon */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
            <div
              style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                backgroundColor: '#10b981',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '11px',
                fontWeight: 'bold',
              }}
            >
              M
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
              <span style={{ fontSize: '13px', color: '#202124', fontWeight: '500' }}>
                شرکت فناوری هوشمند میکائیل
              </span>
              <span style={{ fontSize: '11px', color: '#5f6368', direction: 'ltr', textAlign: 'right' }}>
                {displayUrl}
              </span>
            </div>
          </div>

          {/* Clickable Title (Google Blue) */}
          <h3
            style={{
              margin: '4px 0 6px 0',
              fontSize: device === 'desktop' ? '19px' : '17px',
              lineHeight: 1.3,
              fontWeight: 500,
              color: '#1a0dab',
              cursor: 'pointer',
              textDecoration: 'none',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {displayTitle}
          </h3>

          {/* Snippet Description */}
          <p
            style={{
              margin: 0,
              fontSize: '13px',
              lineHeight: 1.55,
              color: '#4d5156',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {displayDescription}
          </p>
        </Box>

        <Text size={1} muted style={{ fontSize: '11px' }}>
          💡 نکته: این پیش‌نمایش بر اساس فیلدهای «عنوان سئو»، «توضیحات متا» و «نامک (Slug)» به صورت زنده به‌روزرسانی می‌شود.
        </Text>
      </Stack>
    </Card>
  );
}
