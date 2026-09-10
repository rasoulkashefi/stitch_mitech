import { groq } from 'next-sanity';

export const postsQuery = groq`
  *[_type == "post" && defined(slug.current) && (!defined(status) || status == "published")] | order(publishedAt desc) {
    _id,
    title,
    slug,
    author,
    mainImage,
    categories,
    tags,
    publishedAt,
    excerpt,
    status,
    featured
  }
`;

export const postPathsQuery = groq`
  *[_type == "post" && defined(slug.current) && (!defined(status) || status == "published") && (!defined(seo.noIndex) || seo.noIndex == false)][]{
    "slug": slug.current
  }
`;

export const sitemapPostsQuery = groq`
  *[_type == "post" && defined(slug.current) && (!defined(status) || status == "published") && (!defined(seo.noIndex) || seo.noIndex == false)] | order(_updatedAt desc) {
    "slug": slug.current,
    _updatedAt,
    publishedAt
  }
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    _updatedAt,
    title,
    slug,
    author,
    mainImage,
    categories,
    tags,
    publishedAt,
    excerpt,
    body,
    seo,
    aiMetadata,
    status,
    featured
  }
`;

export const relatedPostsQuery = groq`
  *[_type == "post" && slug.current != $slug && (!defined(status) || status == "published")] | order(publishedAt desc)[0...2] {
    _id,
    _updatedAt,
    title,
    slug,
    author,
    mainImage,
    categories,
    tags,
    publishedAt,
    excerpt,
    status,
    featured
  }
`;
