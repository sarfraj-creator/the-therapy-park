'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'
import type { BlogPost } from '@/types'

const POSTS_PER_PAGE = 6

export default function BlogsClient({ initialPosts }: { initialPosts: BlogPost[] }) {
  const [activeTag, setActiveTag] = useState<string>('All')
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE)

  const allTags = useMemo(() => {
    const tags = new Set<string>()
    initialPosts.forEach((p) => p.categories?.forEach((c) => tags.add(c)))
    return ['All', ...Array.from(tags)]
  }, [initialPosts])

  const filtered = useMemo(() => {
    if (activeTag === 'All') return initialPosts
    return initialPosts.filter((p) => p.categories?.includes(activeTag))
  }, [activeTag, initialPosts])

  const visible = filtered.slice(0, visibleCount)
  const hasMore = visibleCount < filtered.length

  return (
    <main style={{ backgroundColor: '#1a1a2e', minHeight: '100vh' }}>
      <section className="pt-36 pb-16 px-6 text-center">
        <span className="text-sm font-medium tracking-widest uppercase" style={{ color: '#9b8ec4' }}>
          — From the Blog —
        </span>
        <h1
          className="text-5xl md:text-6xl font-bold mt-4 mb-6"
          style={{ fontFamily: 'Playfair Display, serif', color: '#f5f0e8' }}
        >
          Insights on Mental Health
        </h1>
        <p className="max-w-xl mx-auto" style={{ color: '#9b8ec4' }}>
          Perspectives on therapy, counseling and healing — written by our practitioners.
        </p>
      </section>

      <section className="px-6 pb-12">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-3 justify-center">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => { setActiveTag(tag); setVisibleCount(POSTS_PER_PAGE) }}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-200"
              style={{
                backgroundColor: activeTag === tag ? '#e8e06a' : 'rgba(255,255,255,0.06)',
                color: activeTag === tag ? '#1a1a2e' : '#c4bfb5',
                border: activeTag === tag ? 'none' : '1px solid rgba(255,255,255,0.1)',
              }}
            >
              {tag}
            </button>
          ))}
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          {visible.length === 0 ? (
            <p className="text-center py-20" style={{ color: '#6b7280' }}>
              No posts found in this category yet.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visible.map((post) => (
                <BlogCard key={post._id} post={post} />
              ))}
            </div>
          )}

          {hasMore && (
            <div className="text-center mt-12">
              <button
                onClick={() => setVisibleCount((c) => c + POSTS_PER_PAGE)}
                className="px-8 py-3 rounded-full font-semibold transition-all hover:opacity-90"
                style={{ backgroundColor: '#e8e06a', color: '#1a1a2e' }}
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blogs/${post.slug.current}`}
      className="group rounded-2xl overflow-hidden block transition-all duration-200 hover:scale-105"
      style={{ backgroundColor: '#2d2d4e', border: '1px solid rgba(255,255,255,0.08)' }}
    >
      <div className="relative h-52 w-full" style={{ backgroundColor: '#3a3a5c' }}>
        {post.mainImage ? (
          <Image
            src={urlFor(post.mainImage).width(500).height(300).url()}
            alt={post.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center opacity-20">
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
              <rect x="5" y="8" width="40" height="34" rx="3" stroke="white" strokeWidth="1.5" fill="none"/>
              <path d="M12 20 L38 20 M12 27 L30 27 M12 34 L22 34" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
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
            day: 'numeric', month: 'long', year: 'numeric',
          })}
        </p>
        <h2
          className="font-bold text-base mb-2 leading-snug"
          style={{ fontFamily: 'Playfair Display, serif', color: '#f5f0e8' }}
        >
          {post.title}
        </h2>
        <p className="text-xs leading-relaxed mb-4" style={{ color: '#9b8ec4' }}>
          {post.excerpt}
        </p>
        <span className="text-xs font-semibold" style={{ color: '#e8e06a' }}>
          Read More →
        </span>
      </div>
    </Link>
  )
}