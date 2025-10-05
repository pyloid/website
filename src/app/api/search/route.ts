import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';

// For static export with search support
export const revalidate = false; // Disable revalidation for static
export const { staticGET: GET } = createFromSource(source, {
  language: 'english',
});
