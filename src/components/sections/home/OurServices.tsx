'use client'

import { useState } from 'react'

const services = [
  {
    id: 1,
    title: 'Individual Therapy',
    description: 'One-on-one sessions tailored entirely to you, your pace, and your needs.',
    bg: '#2d2d4e',
  },
  {
    id: 2,
    title: 'Couples Therapy',
    description: 'Rebuild connection, communication and trust with your partner.',
    bg: '#3a3a5c',
  },
  {
    id: 3,
    title: 'Group Therapy',
    description: 'Heal alongside others who understand what you are going through.',
    bg: '#8a9b6e',
  },
  {
    id: 4,
    title: 'Therapy for Parents',
    description: 'Parenting is hard. We help you show up for your family and yourself.',
    bg: '#9b8ec4',
  },
  {
    id: 5,
    title: 'Workshops',
    description: 'Structured group sessions focused on specific mental health skills.',
    bg: '#6b7a5a',
  },
  {
    id: 6,
    title: 'Specialised Areas',
    description: 'From trauma to neurodivergence — we have practitioners for every need.',
    bg: '#4a4a6a',
  },
]

export default function OurServices() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section style={{ backgroundColor: '#1a1a2e' }} className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-4">
          <span
            className="text-sm font-medium tracking-widest uppercase"
            style={{ color: '#9b8ec4' }}
          >
            — Our Services —
          </span>
        </div>

        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-4"
          style={{ fontFamily: 'Playfair Display, serif', color: '#f5f0e8' }}
        >
          Counseling and Mental Health
          <br />Services Built for Real Life
        </h2>

        <p className="text-center mb-16 max-w-xl mx-auto" style={{ color: '#9b8ec4' }}>
          At The Therapy Park, we are counseling and supporting thousands of people that need only judgment-free conversations.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              onMouseEnter={() => setHovered(service.id)}
              onMouseLeave={() => setHovered(null)}
              className="relative rounded-2xl p-8 cursor-pointer overflow-hidden"
              style={{
                backgroundColor: service.bg,
                transform: hovered === service.id ? 'scale(1.03)' : 'scale(1)',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                boxShadow: hovered === service.id ? '0 8px 32px rgba(0,0,0,0.4)' : 'none',
                border: hovered === service.id ? '1px solid rgba(232,224,106,0.3)' : '1px solid transparent',
              }}
            >
              <ServiceLineArt />
              <h3
                className="text-xl font-bold mb-3 relative z-10"
                style={{ fontFamily: 'Playfair Display, serif', color: '#f5f0e8' }}
              >
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed relative z-10" style={{ color: '#c4bfb5' }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceLineArt() {
  return (
    <svg
      className="absolute top-4 right-4 opacity-20"
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
    >
      <path
        d="M40 10 Q55 20 60 35 Q65 50 50 60 Q35 70 20 60 Q5 50 10 35 Q15 20 30 15 Q35 10 40 10"
        stroke="#f5f0e8"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M40 20 Q50 28 52 40 Q54 52 44 58 Q34 64 24 56 Q14 48 18 38 Q22 28 32 22 Q36 19 40 20"
        stroke="#f5f0e8"
        strokeWidth="1"
        fill="none"
      />
    </svg>
  )
}