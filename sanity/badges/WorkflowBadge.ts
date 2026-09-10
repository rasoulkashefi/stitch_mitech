import type { DocumentBadgeComponent } from 'sanity';

export const WorkflowStatusBadge: DocumentBadgeComponent = (props) => {
  const { published, draft } = props;
  const doc = draft || published;

  if (!doc || doc._type !== 'post') {
    return null;
  }

  const status = (doc.status as string) || 'draft';

  const badgeConfig: Record<
    string,
    { label: string; tone: 'default' | 'primary' | 'positive' | 'caution' | 'critical' }
  > = {
    draft: { label: '📝 پیش‌نویس', tone: 'caution' },
    in_review: { label: '🔍 در حال بازبینی', tone: 'primary' },
    scheduled: { label: '⏰ زمان‌بندی شده', tone: 'default' },
    published: { label: '🟢 منتشر شده', tone: 'positive' },
    archived: { label: '📦 بایگانی شده', tone: 'critical' },
  };

  const badge = badgeConfig[status] || badgeConfig.draft;

  return {
    label: badge.label,
    title: `وضعیت نگارش و انتشار: ${badge.label}`,
    tone: badge.tone,
  };
};
