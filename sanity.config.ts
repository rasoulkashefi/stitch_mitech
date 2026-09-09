import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schema } from './sanity/schemaTypes';

export default defineConfig({
    name: 'default',
    title: 'Mitech Studio',
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'no9hbs5d',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    basePath: '/studio',
    plugins: [structureTool()],
    schema,
});