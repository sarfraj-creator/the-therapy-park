'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { sanityClient } from '@/lib/sanity'
import { recentBlogsQuery } from '@/lib/queries'
import { urlFor } from '@/lib/sanity'
import type { BlogPost } from '@/types'

const fallback: BlogPost[] = [
  {
    _id: '1',
    title: 'Understanding Anxiety in Daily Life',
    slug: { current: 'understanding-anxiety' },
    publishedAt: '2024-03-01',
    excerpt: 'Anxiety shows up in ways we often mistake for something else entirely.',
    mainImage: null,
    categories: ['Anxiety'],
    author: { name: 'Dr. Prerna', bio: '', image: null },
  },
  {
    _id: '2',
    title: 'How Therapy Helps with Grief',
    slug: { current: 'therapy-and-grief' },
    publishedAt: '2024-02-20',
    excerpt: 'Grief is not a problem to solve — it is a process to move through.',
    mainImage: null,
    categories: ['Grief'],
    author: { name: 'Dr. Ananya', bio: '', image: null },
  },
  {
    _id: '3',
    title: 'Finding the Right Therapist for You',
    slug: { current: 'finding-right-therapist' },
    publishedAt: '2024-02-10',
    excerpt: 'The relationship between therapist and client is the foundation of all progress.',
    mainImage: null,
    categories: ['Guide'],
    author: { name: 'Dr. Rahul', bio: '', image: null },
  },
]

export default function RecentPosts() {
  const [posts, setPosts] = useState<BlogPost[]>(fallback)

  useEffect(() => {
    sanityClient.fetch(recentBlogsQuery).then((data) => {
      if (data?.length) setPosts(data)
    })
  }, [])

  return (
    <section
      className="py-20 px-6 border-t"
      style={{ backgroundColor: '#1a1a2e', borderColor: 'rgba(255,255,255,0.06)' }}
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-4"
          style={{ fontFamily: 'Playfair Display, serif', color: '#f5f0e8' }}
        >
          Recent Insights
        </h2>
        <p className="text-center mb-12" style={{ color: '#9b8ec4' }}>
          From the blog — perspectives on mental health, therapy and healing.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post._id}
              href={`/blogs/${post.slug.current}`}
              className="group rounded-2xl overflow-hidden block transition-all duration-200 hover:scale-105"
              style={{ backgroundColor: '#2d2d4e', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div className="relative h-48 w-full" style={{ backgroundColor: '#3a3a5c' }}>
                {post.mainImage ? (
                  <Image
                    src={urlFor(post.mainImage)?.width(400).height(250).url() || ''}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center opacity-30">
                    <BlogPlaceholder />
                  </div>
                )}

                {post.categories?.[0] && (
                  <span
                    className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ backgroundColor: '#e8e06a', color: '#1a1a2e' }}
                  >
                    {post.categories[0]}
                  </span>
                )}
              </div>

              <div className="p-5">
                <p className="text-xs mb-2" style={{ color: '#6b7280' }}>
                  {new Date(post.publishedAt).toLocaleDateString('en-IN', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </p>
                <h3
                  className="font-bold text-base mb-2 leading-snug"
                  style={{ fontFamily: 'Playfair Display, serif', color: '#f5f0e8' }}
                >
                  {post.title}
                </h3>
                <p className="text-xs leading-relaxed mb-4" style={{ color: '#9b8ec4' }}>
                  {post.excerpt}
                </p>
                <span className="text-xs font-semibold underline" style={{ color: '#e8e06a' }}>
                  Read More →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function BlogPlaceholder() {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
      <rect x="8" y="12" width="44" height="36" rx="4" stroke="white" strokeWidth="1.5" fill="none" />
      <path d="M16 24 L44 24 M16 32 L36 32 M16 40 L28 40" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}