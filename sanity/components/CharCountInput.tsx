'use client';

import React, { useCallback } from 'react';
import { StringInputProps, set, unset } from 'sanity';
import { Stack, TextInput, Flex, Text, Badge, Box } from '@sanity/ui';

interface CharCountInputCustomOptions {
  minRecommended?: number;
  maxRecommended?: number;
  absoluteMax?: number;
  recommendationNote?: string;
}

export function CharCountInput(props: StringInputProps) {
  const { elementProps, onChange, value = '', schemaType } = props;
  const customOptions = (schemaType.options || {}) as CharCountInputCustomOptions;

  const min = customOptions.minRecommended ?? 40;
  const max = customOptions.maxRecommended ?? 60;
  const absMax = customOptions.absoluteMax ?? 70;
  const note = customOptions.recommendationNote ?? 'طول پیشنهادی گوگل برای عنوان سئو: بین ۴۰ تا ۶۰ کاراکتر';

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
    badgeText = `نزدیک به حد مجاز (${length}/${absMax})`;
  } else {
    tone = 'critical';
    badgeText = `بیش از حد مجاز (${length}/${absMax})`;
  }

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const nextValue = event.currentTarget.value;
      onChange(nextValue ? set(nextValue) : unset());
    },
    [onChange]
  );

  // Percentage for progress bar (capped at 100%)
  const percentage = Math.min(100, Math.round((length / absMax) * 100));
  const progressColor =
    tone === 'positive' ? '#10b981' : tone === 'caution' ? '#f59e0b' : tone === 'critical' ? '#ef4444' : '#94a3b8';

  return (
    <Stack gap={2}>
      <TextInput
        {...elementProps}
        value={value}
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
          <Text size={1} weight="semibold" style={{ minWidth: '45px', textAlign: 'left', direction: 'ltr' }}>
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
