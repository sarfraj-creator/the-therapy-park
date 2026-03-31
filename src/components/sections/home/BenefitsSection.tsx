'use client'

import { useState } from 'react'

const benefits = [
  {
    id: 1,
    title: 'You Choose Who You Work With',
    description: 'Every therapist at The Therapy Park is listed with their specialisation and availability, so you walk in informed, not assigned.',
  },
  {
    id: 2,
    title: 'No Session Follows a Script',
    description: 'Our therapy and counseling adapts to what you bring into the room, not the other way around.',
  },
  {
    id: 3,
    title: 'Your Identity Is Never a Problem Here',
    description: 'Queer, neurodivergent, from any caste or background — our counseling and mental health services are built to hold every version of who you are, without exception.',
  },
  {
    id: 4,
    title: 'Online or In-Person, Same Standard',
    description: 'Whether you book an online mental health counseling session from another city or walk into Kolkata, the quality of care stays identical — same modalities, same practitioners, same commitment.',
  },
]

export default function BenefitsSection() {
  const [active, setActive] = useState(0)
  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL || '#'

  return (
    <section style={{ backgroundColor: '#1a1a2e' }} className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-4">
          <span className="text-sm font-medium tracking-widest uppercase" style={{ color: '#9b8ec4' }}>
            — Benefits of working with us —
          </span>
        </div>

        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          style={{ fontFamily: 'Playfair Display, serif', color: '#f5f0e8' }}
        >
          The Real Benefits of Therapy and Counseling With Us
        </h2>

        <p className="text-center max-w-xl mx-auto mb-16" style={{ color: '#9b8ec4' }}>
          Most counseling and mental health services treat symptoms, we work on the person carrying them.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <p className="text-xs font-semibold mb-2" style={{ color: '#9b8ec4' }}>
              Benefit {active + 1}
            </p>

            <h3
              className="text-3xl font-bold mb-4 transition-all duration-300"
              style={{ fontFamily: 'Playfair Display, serif', color: '#f5f0e8' }}
            >
              {benefits[active].title}
            </h3>

            <p className="text-base leading-relaxed mb-8" style={{ color: '#c4bfb5' }}>
              {benefits[active].description}
            </p>

            {/* ✅ FIXED HERE */}
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 rounded-full font-semibold transition-all duration-200 hover:opacity-90 mb-8"
              style={{ backgroundColor: '#e8e06a', color: '#1a1a2e' }}
            >
              Book a Session
            </a>

            <div className="flex gap-2">
              {benefits.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="w-3 h-3 rounded-full transition-all duration-200"
                  style={{
                    backgroundColor: active === i ? '#9b8ec4' : 'rgba(155,142,196,0.3)',
                    transform: active === i ? 'scale(1.2)' : 'scale(1)',
                  }}
                  aria-label={`Benefit ${i + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <TreeIllustration active={active} />
          </div>
        </div>
      </div>
    </section>
  )
}

function TreeIllustration({ active }: { active: number }) {
  const colors = ['#8a9b6e', '#9b8ec4', '#c4a882', '#6b8a7a']
  const fill = colors[active]

  return (
    <svg width="320" height="380" viewBox="0 0 320 380" fill="none" style={{ transition: 'all 0.4s ease' }}>
      <ellipse cx="190" cy="160" rx="110" ry="100" fill={fill} opacity="0.7" />
      <path
        d="M160 260 L160 360 M140 320 Q160 300 180 320 M130 340 Q160 315 190 340"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M80 180 Q100 140 130 130 Q150 100 180 110 Q210 90 240 110 Q270 120 275 155 Q290 170 280 195 Q285 220 265 230 Q255 255 230 248 Q210 265 185 255 Q160 268 140 255 Q110 260 95 240 Q70 230 80 205 Q72 192 80 180"
        stroke="white"
        strokeWidth="1.5"
        fill="none"
      />
      <path d="M140 200 Q160 170 185 175 Q210 165 225 185 Q235 205 220 220 Q200 235 178 228 Q155 235 142 218 Q132 208 140 200" stroke="white" strokeWidth="1" fill="none"/>
      <path d="M175 248 Q178 280 176 310" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="220" cy="290" r="12" stroke="white" strokeWidth="1.5" fill="none"/>
      <path d="M215 290 Q220 282 225 290" stroke="white" strokeWidth="1" fill="none"/>
    </svg>
  )
}