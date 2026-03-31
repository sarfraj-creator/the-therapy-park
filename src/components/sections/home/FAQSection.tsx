'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  { q: 'How do I know which therapist is right for me?', a: 'Every therapist on our platform lists their specialisation, approach and availability. You can browse profiles and choose who feels right before booking.' },
  { q: 'Are online sessions as effective as in-person?', a: 'Yes. Research consistently shows online therapy is as effective as in-person for most concerns. Our practitioners use the same modalities across both formats.' },
  { q: 'What if I want to switch my therapist?', a: 'You can switch at any time, no questions asked. We want you to feel comfortable and supported — finding the right fit matters most.' },
  { q: 'Is my information kept confidential?', a: 'Absolutely. Everything shared in your sessions is strictly confidential and protected under professional ethics and privacy law.' },
  { q: 'Do you offer services for the LGBTQ+ community?', a: 'Yes. All our practitioners are trained to be affirming and inclusive. Your identity is never a barrier or problem here.' },
]

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section style={{ backgroundColor: '#f5f0e8' }} className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-4"
          style={{ fontFamily: 'Playfair Display, serif', color: '#1a1a2e' }}
        >
          FAQ&apos;s
        </h2>
        <p className="text-center mb-12" style={{ color: '#6b7280' }}>
          Everything you need to know before getting started.
        </p>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden"
              style={{ backgroundColor: 'white', border: '1px solid rgba(26,26,46,0.08)' }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left"
              >
                <span className="text-sm font-semibold pr-4" style={{ color: '#1a1a2e' }}>
                  {faq.q}
                </span>
                <span style={{ color: '#9b8ec4', flexShrink: 0 }}>
                  {open === i ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-4">
                  <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}