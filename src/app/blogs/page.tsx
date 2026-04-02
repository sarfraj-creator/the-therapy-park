import { sanityClient } from '@/lib/sanity'
import { allBlogsQuery } from '@/lib/queries'
import BlogsClient from './BlogsClient'
import type { BlogPost } from '@/types'

export const revalidate = 60

export default async function BlogsPage() {
  const posts: BlogPost[] = await sanityClient.fetch(allBlogsQuery)

  return <BlogsClient initialPosts={posts} />
}