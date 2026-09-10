import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { table } from '@sanity/table';
import { schema } from './sanity/schemaTypes';
import { structure } from './sanity/structure';
import { WorkflowStatusBadge } from './sanity/badges/WorkflowBadge';

export default defineConfig({
  name: 'default',
  title: 'استودیو تحریریه هوشمند میکائیل (Mitech Studio)',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'no9hbs5d',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  basePath: '/studio',
  plugins: [
    structureTool({
      structure,
    }),
    table(),
  ],
  document: {
    badges: (prev, context) => {
      if (context.schemaType === 'post') {
        return [WorkflowStatusBadge, ...prev];
      }
      return prev;
    },
  },
  schema,
});