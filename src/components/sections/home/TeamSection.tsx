'use client'

import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { sanityClient } from '@/lib/sanity'
import { teamMembersQuery } from '@/lib/queries'
import { urlFor } from '@/lib/sanity'
import type { TeamMember } from '@/types'

const fallback: TeamMember[] = [
  { _id: '1', name: 'Dr. Prerna Aggarwal', title: 'Clinical Psychologist', availability: 'Mon–Fri, 10am–6pm', image: null, slug: { current: '' } },
  { _id: '2', name: 'Dr. Ananya Roy', title: 'Counseling Therapist', availability: 'Tue–Sat, 11am–7pm', image: null, slug: { current: '' } },
  { _id: '3', name: 'Dr. Rahul Mehta', title: 'Psychotherapist', availability: 'Mon–Thu, 9am–5pm', image: null, slug: { current: '' } },
]

export default function TeamSection() {
  const [team, setTeam] = useState<TeamMember[]>(fallback)
  const [current, setCurrent] = useState(0)
  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL || '#'

  useEffect(() => {
    sanityClient.fetch(teamMembersQuery).then((data) => {
      if (data?.length) setTeam(data)
    })
  }, [])

  const prev = () => setCurrent((c) => (c - 1 + team.length) % team.length)
  const next = () => setCurrent((c) => (c + 1) % team.length)

  const visible = [
    team[current],
    team[(current + 1) % team.length],
    team[(current + 2) % team.length],
  ]

  return (
    <section style={{ backgroundColor: '#1a1a2e' }} className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-4"
          style={{ fontFamily: 'Playfair Display, serif', color: '#f5f0e8' }}
        >
          Meet The Team
        </h2>
        <p className="text-center mb-12" style={{ color: '#9b8ec4' }}>
          Real people, real shifts in therapy and counseling.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {visible.map((member, i) => (
            <div
              key={`${member._id}-${i}`}
              className="rounded-2xl overflow-hidden"
              style={{ backgroundColor: '#2d2d4e', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div className="relative h-56 w-full" style={{ backgroundColor: '#3a3a5c' }}>
                {member.image ? (
                  <Image
                    src={urlFor(member.image)?.width(400).height(300).url() || ''}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <PlaceholderAvatar />
                  </div>
                )}
                <div
                  className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold"
                  style={{ backgroundColor: '#e8e06a', color: '#1a1a2e' }}
                >
                  Book a Session
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-bold text-base mb-1" style={{ fontFamily: 'Playfair Display, serif', color: '#f5f0e8' }}>
                  {member.name}
                </h3>
                <p className="text-xs mb-1" style={{ color: '#9b8ec4' }}>{member.title}</p>
                {member.availability && (
                  <p className="text-xs mb-4" style={{ color: '#6b7280' }}>{member.availability}</p>
                )}

                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center py-2 rounded-full text-xs font-semibold transition hover:opacity-90"
                  style={{ backgroundColor: '#e8e06a', color: '#1a1a2e' }}
                >
                  Book a Session
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-3">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border flex items-center justify-center transition hover:opacity-70"
            style={{ borderColor: '#f5f0e8', color: '#f5f0e8' }}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border flex items-center justify-center transition hover:opacity-70"
            style={{ borderColor: '#f5f0e8', color: '#f5f0e8' }}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}

function PlaceholderAvatar() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
      <circle cx="40" cy="30" r="16" stroke="#9b8ec4" strokeWidth="2" fill="none"/>
      <path d="M12 70 Q12 52 40 52 Q68 52 68 70" stroke="#9b8ec4" strokeWidth="2" strokeLinecap="round" fill="none"/>
    </svg>
  )
}