'use client';

import React, { useCallback } from 'react';
import { StringInputProps, set, unset } from 'sanity';
import { Stack, TextArea, Flex, Text, Badge, Box } from '@sanity/ui';

interface CharCountTextAreaCustomOptions {
  minRecommended?: number;
  maxRecommended?: number;
  absoluteMax?: number;
  rows?: number;
  recommendationNote?: string;
}

export function CharCountTextArea(props: StringInputProps) {
  const { elementProps, onChange, value = '', schemaType } = props;
  const customOptions = (schemaType.options || {}) as CharCountTextAreaCustomOptions;

  const min = customOptions.minRecommended ?? 120;
  const max = customOptions.maxRecommended ?? 160;
  const absMax = customOptions.absoluteMax ?? 180;
  const rows = customOptions.rows ?? 3;
  const note =
    customOptions.recommendationNote ??
    'طول بهینه برای توضیحات متا در گوگل: بین ۱۲۰ تا ۱۶۰ کاراکتر (بیشتر از این مقدار در نتایج جستجو بریده می‌شود)';

  const length = value ? value.length : 0;

  // Determine status & color tone
  let tone: 'default' | 'positive' | 'caution' | 'critical' = 'default';
  let badgeText = 'هنوز وارد نشده';

  if (length === 0) {
    tone = 'default';
    badgeText = 'خالی';
  } else if (length < min) {
    tone = 'caution';
    badgeText = `کوتاه (${length}/${min})`;
  } else if (length <= max) {
    tone = 'positive';
    badgeText = `ایده‌آل (${length}/${max})`;
  } else if (length <= absMax) {
    tone = 'caution';
    badgeText = `نزدیک به برش گوگل (${length}/${absMax})`;
  } else {
    tone = 'critical';
    badgeText = `بیش از حد مجاز (${length}/${absMax})`;
  }

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      const nextValue = event.currentTarget.value;
      onChange(nextValue ? set(nextValue) : unset());
    },
    [onChange]
  );

  const percentage = Math.min(100, Math.round((length / absMax) * 100));
  const progressColor =
    tone === 'positive' ? '#10b981' : tone === 'caution' ? '#f59e0b' : tone === 'critical' ? '#ef4444' : '#94a3b8';

  return (
    <Stack gap={2}>
      <TextArea
        {...elementProps}
        value={value}
        rows={rows}
        onChange={handleChange}
        style={{ direction: 'rtl', textAlign: 'right' }}
      />

      <Flex align="center" justify="space-between" gap={2} paddingY={1}>
        <Text size={1} muted style={{ fontSize: '11px' }}>
          {note}
        </Text>
        <Flex align="center" gap={2}>
          <Badge tone={tone} fontSize={1} padding={2}>
            {badgeText}
          </Badge>
          <Text size={1} weight="semibold" style={{ minWidth: '55px', textAlign: 'left', direction: 'ltr' }}>
            {length} / {absMax}
          </Text>
        </Flex>
      </Flex>

      {/* Visual meter bar */}
      <Box style={{ width: '100%', height: '4px', backgroundColor: '#e2e8f0', borderRadius: '2px', overflow: 'hidden' }}>
        <div
          style={{
            height: '100%',
            width: `${percentage}%`,
            backgroundColor: progressColor,
            transition: 'width 0.2s ease, background-color 0.2s ease',
          }}
        />
      </Box>
    </Stack>
  );
}
