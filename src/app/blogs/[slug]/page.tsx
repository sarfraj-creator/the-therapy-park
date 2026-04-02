import { sanityClient } from '@/lib/sanity'
import { blogBySlugQuery, relatedBlogsQuery, allBlogsQuery } from '@/lib/queries'
import { urlFor } from '@/lib/sanity'
import Image from 'next/image'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import type { BlogPost } from '@/types'
import type { Metadata } from 'next'

export const revalidate = 60

export async function generateStaticParams() {
  const posts: BlogPost[] = await sanityClient.fetch(allBlogsQuery)
  return posts.map((p) => ({ slug: p.slug.current }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post: BlogPost = await sanityClient.fetch(blogBySlugQuery, { slug: params.slug })
  return {
    title: `${post?.title} — The Therapy Park`,
    description: post?.excerpt,
  }
}

export default async function SingleBlogPage({ params }: { params: { slug: string } }) {
  const post: BlogPost = await sanityClient.fetch(blogBySlugQuery, { slug: params.slug })
  const related: BlogPost[] = await sanityClient.fetch(relatedBlogsQuery, {
    slug: params.slug,
    categories: post?.categories ?? [],
  })

  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL || '#'

  if (!post) {
    return (
      <main style={{ backgroundColor: '#1a1a2e', minHeight: '100vh' }} className="pt-40 px-6 text-center">
        <h1 style={{ color: '#f5f0e8', fontFamily: 'Playfair Display, serif' }} className="text-4xl font-bold">
          Post not found
        </h1>
        <Link href="/blogs" className="mt-6 inline-block underline" style={{ color: '#e8e06a' }}>
          Back to Blog
        </Link>
      </main>
    )
  }

  return (
    <main style={{ backgroundColor: '#1a1a2e', minHeight: '100vh' }}>
      <section className="pt-36 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <Link href="/blogs" className="text-sm mb-8 inline-block transition hover:opacity-70" style={{ color: '#9b8ec4' }}>
            ← Back to Blog
          </Link>

          {post.categories?.[0] && (
            <span
              className="inline-block px-4 py-1 rounded-full text-xs font-semibold mb-4"
              style={{ backgroundColor: '#e8e06a', color: '#1a1a2e' }}
            >
              {post.categories[0]}
            </span>
          )}

          <h1
            className="text-4xl md:text-5xl font-bold mb-4 max-w-3xl leading-tight"
            style={{ fontFamily: 'Playfair Display, serif', color: '#f5f0e8' }}
          >
            {post.title}
          </h1>

          <p className="text-sm mb-8" style={{ color: '#6b7280' }}>
            {new Date(post.publishedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
            {post.author?.name && ` · By ${post.author.name}`}
          </p>
        </div>
      </section>

      {post.mainImage && (
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <div className="relative w-full h-96 rounded-2xl overflow-hidden">
            <Image
              src={urlFor(post.mainImage).width(1200).height(600).url()}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      )}

      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <article className="lg:col-span-2">
            {post.body && (
              <div
                className="prose prose-invert max-w-none"
                style={{ color: '#c4bfb5', lineHeight: '1.9' }}
              >
                <PortableText value={post.body} />
              </div>
            )}

            {post.author && (
              <div className="mt-12 p-6 rounded-2xl" style={{ backgroundColor: '#f5f0e8' }}>
                <div className="flex items-center gap-4 mb-4">
                  {post.author.image && (
                    <div className="relative w-14 h-14 rounded-full overflow-hidden">
                      <Image
                        src={urlFor(post.author.image).width(100).height(100).url()}
                        alt={post.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <p className="font-bold text-sm" style={{ color: '#1a1a2e', fontFamily: 'Playfair Display, serif' }}>
                      {post.author.name}
                    </p>
                    <p className="text-xs" style={{ color: '#6b7280' }}>Author</p>
                  </div>
                </div>
                {post.author.bio && (
                  <p className="text-sm" style={{ color: '#4b5563' }}>{post.author.bio}</p>
                )}
              </div>
            )}

            <div
              className="mt-8 p-6 rounded-2xl border"
              style={{ backgroundColor: '#2d2d4e', borderColor: 'rgba(155,142,196,0.3)' }}
            >
              <h3
                className="text-lg font-bold mb-2"
                style={{ fontFamily: 'Playfair Display, serif', color: '#f5f0e8' }}
              >
                Stay Updated
              </h3>
              <p className="text-sm mb-4" style={{ color: '#9b8ec4' }}>
                Get our latest insights on mental health delivered to your inbox.
              </p>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-2 rounded-full text-sm outline-none"
                  style={{ backgroundColor: '#1a1a2e', color: '#f5f0e8', border: '1px solid rgba(255,255,255,0.1)' }}
                />
                <button
                  className="px-6 py-2 rounded-full text-sm font-semibold"
                  style={{ backgroundColor: '#e8e06a', color: '#1a1a2e' }}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </article>

          <aside className="flex flex-col gap-6">
            <div
              className="p-6 rounded-2xl"
              style={{ backgroundColor: '#2d2d4e', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <h3
                className="text-base font-bold mb-4"
                style={{ fontFamily: 'Playfair Display, serif', color: '#f5f0e8' }}
              >
                Book a Session
              </h3>
              <p className="text-xs mb-4" style={{ color: '#9b8ec4' }}>
                Ready to take the next step? Connect with one of our therapists today.
              </p>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-3 rounded-full text-sm font-semibold transition hover:opacity-90"
                style={{ backgroundColor: '#e8e06a', color: '#1a1a2e' }}
              >
                Book a Session
              </a>
            </div>

            {related.length > 0 && (
              <div>
                <h3
                  className="text-base font-bold mb-4"
                  style={{ fontFamily: 'Playfair Display, serif', color: '#f5f0e8' }}
                >
                  Other Posts for your Reference
                </h3>
                <div className="flex flex-col gap-4">
                  {related.map((rp) => (
                    <Link
                      key={rp._id}
                      href={`/blogs/${rp.slug.current}`}
                      className="flex gap-3 group"
                    >
                      <div
                        className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0"
                        style={{ backgroundColor: '#3a3a5c' }}
                      >
                        {rp.mainImage && (
                          <Image
                            src={urlFor(rp.mainImage).width(100).height(100).url()}
                            alt={rp.title}
                            fill
                            className="object-cover"
                          />
                        )}
                      </div>
                      <div>
                        <p
                          className="text-xs font-semibold leading-snug group-hover:underline"
                          style={{ color: '#f5f0e8' }}
                        >
                          {rp.title}
                        </p>
                        <p className="text-xs mt-1" style={{ color: '#6b7280' }}>
                          {new Date(rp.publishedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </section>
    </main>
  )
}