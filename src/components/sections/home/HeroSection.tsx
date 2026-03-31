'use client'

import Link from 'next/link'

export default function HeroSection() {
  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL || '#'

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#1a1a2e]">
      
      {/* Decorative Elements */}
      <CloudLeft className="absolute top-16 left-8 w-24 h-16 opacity-60" />
      <CloudRight className="absolute top-32 right-12 w-20 h-14 opacity-40" />
      <CloudSmall className="absolute bottom-40 left-1/4 w-16 h-10 opacity-30" />
      <RollerCoasterLine className="absolute bottom-0 left-0 right-0 w-full opacity-20" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="max-w-2xl">
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-[#f5f0e8] font-serif">
            Therapy and Counseling That Holds You Through the{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#1a1a2e]">
                Hard Parts
              </span>
              <span className="absolute inset-0 -mx-1 -my-0.5 rounded bg-[#e8e06a]" />
            </span>
          </h1>

          <p className="text-lg md:text-xl mb-10 leading-relaxed max-w-xl text-[#c4bfb5]">
            Over 1,000 people globally have felt understood by our practitioners and their team&apos;s strong support.
            Our therapists are counseling and supporting thousands of people that need only judgment-free conversations.
          </p>

          <div className="flex flex-wrap gap-4">
            
            {/* ✅ FIXED */}
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full font-semibold text-base bg-[#e8e06a] text-[#1a1a2e] hover:opacity-90 hover:scale-105 transition-all duration-200"
            >
              Book a Session
            </a>

            <Link
              href="/contact"
              className="px-8 py-3 rounded-full font-semibold text-base border border-[#f5f0e8] text-[#f5f0e8] hover:opacity-80 transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <WavyDivider className="absolute bottom-0 left-0 right-0 w-full" />
    </section>
  )
}

/* SVG Components */

function CloudLeft({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 80" fill="none">
      <path d="M20 60 Q10 60 10 50 Q10 40 20 40 Q18 30 28 28 Q32 18 44 20 Q50 12 62 16 Q72 10 80 20 Q92 18 94 30 Q104 32 104 44 Q104 56 92 58 Q88 68 76 66 Q68 72 56 68 Q44 74 36 68 Q24 70 20 60Z"
        stroke="#f5f0e8" strokeWidth="1.5" />
    </svg>
  )
}

function CloudRight({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 65" fill="none">
      <path d="M15 50 Q6 50 6 41 Q6 32 15 32 Q13 23 22 21 Q26 13 36 15 Q42 8 52 12 Q60 7 67 15 Q77 13 79 24 Q88 26 88 37 Q88 48 77 50 Q73 58 63 56 Q56 62 46 58 Q36 63 28 58 Q18 59 15 50Z"
        stroke="#f5f0e8" strokeWidth="1.5" />
    </svg>
  )
}

function CloudSmall({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 50" fill="none">
      <path d="M12 38 Q5 38 5 31 Q5 24 12 24 Q10 17 18 15 Q22 9 30 11 Q36 6 44 9 Q52 5 58 12 Q66 10 68 20 Q74 22 74 30 Q74 38 65 40 Q60 46 52 44 Q45 48 37 45 Q28 48 22 44 Q13 45 12 38Z"
        stroke="#f5f0e8" strokeWidth="1.5" />
    </svg>
  )
}

function RollerCoasterLine({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
      <path d="M0 80 Q60 20 120 60 Q180 100 240 50 Q300 0 360 40 Q420 80 480 30 Q540 -20 600 20 Q660 60 720 10 Q780 -40 840 10 Q900 60 960 20 Q1020 -20 1080 30 Q1140 80 1200 40 Q1260 0 1320 50 Q1380 100 1440 60"
        stroke="#9b8ec4" strokeWidth="2" />
    </svg>
  )
}

function WavyDivider({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none">
      <path d="M0 30 Q180 0 360 30 Q540 60 720 30 Q900 0 1080 30 Q1260 60 1440 30 L1440 60 L0 60 Z"
        fill="#f5f0e8" />
    </svg>
  )
}