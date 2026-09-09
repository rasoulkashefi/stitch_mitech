import { groq } from 'next-sanity';

export const postsQuery = groq`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    slug,
    author,
    mainImage,
    categories,
    tags,
    publishedAt,
    excerpt
  }
`;

export const postPathsQuery = groq`
  *[_type == "post" && defined(slug.current)][]{
    "slug": slug.current
  }
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    author,
    mainImage,
    categories,
    tags,
    publishedAt,
    excerpt,
    body
  }
`;

export const relatedPostsQuery = groq`
  *[_type == "post" && slug.current != $slug] | order(publishedAt desc)[0...2] {
    _id,
    title,
    slug,
    author,
    mainImage,
    categories,
    tags,
    publishedAt,
    excerpt
  }
`;
