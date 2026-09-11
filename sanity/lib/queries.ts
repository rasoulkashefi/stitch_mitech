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

export const latestPostsQuery = groq`
  *[_type == "post" && defined(slug.current) && (!defined(status) || status == "published")] | order(coalesce(featured, false) desc, publishedAt desc)[0...3] {
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

export const postsByCategoryQuery = groq`
  *[_type == "post" && defined(slug.current) && (!defined(status) || status == "published") && count((categories)[@ in $categories]) > 0] | order(publishedAt desc) {
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

export const electricWheelchairPostsQuery = groq`
  *[_type == "post" && defined(slug.current) && (!defined(status) || status == "published") && (
    count((categories)[@ in ["ویلچر برقی", "دانشنامه و مقالات ویلچر برقی"]]) > 0 ||
    count((tags)[@ match "*ویلچر*"]) > 0 ||
    title match "*ویلچر*"
  )] | order(publishedAt desc) {
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

export const roboticsPostsQuery = groq`
  *[_type == "post" && defined(slug.current) && (!defined(status) || status == "published") && (
    slug.current match "robotics/*" ||
    count((categories)[@ in ["فناوری رباتیک", "رباتیک", "فناوری و ناوبری خودران"]]) > 0 ||
    count((tags)[@ match "*ربات*"]) > 0 ||
    title match "*ربات*" ||
    title match "*ناوبری*"
  )] | order(publishedAt desc) {
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


