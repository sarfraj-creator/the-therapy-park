'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { sanityClient } from '@/lib/sanity'
import { testimonialsQuery } from '@/lib/queries'
import type { Testimonial } from '@/types'

const fallback: Testimonial[] = [
  {
    _id: '1',
    name: 'Anonymous',
    content:
      'Coming here was the best decision I made for myself. My therapist truly listened without judgment and helped me work through things I had buried for years.',
    rating: 5,
  },
  {
    _id: '2',
    name: 'Anonymous',
    content:
      'I was skeptical about therapy but The Therapy Park changed that completely. The process felt natural, safe and deeply personal.',
    rating: 5,
  },
  {
    _id: '3',
    name: 'Anonymous',
    content:
      'Being able to choose my therapist made all the difference. I finally found someone who understood my background and identity.',
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(fallback)
  const [current, setCurrent] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    sanityClient.fetch(testimonialsQuery).then((data) => {
      if (data?.length) setTestimonials(data)
    })
  }, [])

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [testimonials.length])

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  const visible = [
    testimonials[current],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ]

  return (
    <section style={{ backgroundColor: '#f5f0e8' }} className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-4"
          style={{ fontFamily: 'Playfair Display, serif', color: '#1a1a2e' }}
        >
          Stories Of Transformation
        </h2>
        <p className="text-center mb-12" style={{ color: '#6b7280' }}>
          Real people, real shifts in therapy and counseling.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {visible.map((t, i) => (
            <div
              key={`${t._id}-${i}`}
              className="rounded-2xl p-7"
              style={{
                backgroundColor: i === 1 ? '#9b8ec4' : 'white',
                color: i === 1 ? 'white' : '#1a1a2e',
                minHeight: '220px',
              }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <span key={si} style={{ color: '#e8e06a' }}>★</span>
                ))}
              </div>
              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: i === 1 ? 'rgba(255,255,255,0.9)' : '#4b5563' }}
              >
                &ldquo;{t.content}&rdquo;
              </p>
              <p className="text-sm font-semibold">
                — {('isAnonymous' in t && t.isAnonymous) || t.name === 'Anonymous' ? 'Anonymous' : t.name}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-3">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border flex items-center justify-center transition-all hover:opacity-70"
            style={{ borderColor: '#1a1a2e', color: '#1a1a2e' }}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border flex items-center justify-center transition-all hover:opacity-70"
            style={{ borderColor: '#1a1a2e', color: '#1a1a2e' }}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}