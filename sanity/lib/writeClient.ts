import 'server-only';
import { createClient } from 'next-sanity';

const token = process.env.SANITY_WRITE_TOKEN || process.env.SANITY_TOKEN;

/**
 * Sanity client with write permissions for server-side mutations.
 * Guarded with 'server-only' to ensure it NEVER leaks into client bundles.
 */
export const writeClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'no9hbs5d',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  token,
  useCdn: false,
});
