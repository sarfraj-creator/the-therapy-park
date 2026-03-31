import Link from 'next/link'

export default function Footer() {
  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL || '#'

  return (
    <footer>
      {/* CTA Section */}
      <section className="py-20 px-6 bg-[#1a1a2e]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="max-w-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-[#f5f0e8] font-serif">
              Reach out to us to find perfect therapist for you
            </h2>

            {/* ✅ FIXED */}
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-8 py-3 rounded-full font-semibold bg-[#e8e06a] text-[#1a1a2e] hover:opacity-90 transition-all duration-200"
            >
              Book a Session
            </a>
          </div>

          {/* Placeholder Illustration */}
          <div className="w-48 h-48 rounded-full border-2 border-dashed border-[#9b8ec4] flex items-center justify-center opacity-30">
            <span className="text-xs text-center px-4 text-[#9b8ec4]">
              illustration
            </span>
          </div>
        </div>
      </section>

      {/* Bottom Footer */}
      <div className="py-8 px-6 border-t border-[#2d2d4e] bg-[#16213e]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          
          <span className="text-xl font-bold text-[#f5f0e8] font-serif">
            the therapy park
          </span>

          <div className="flex items-center gap-6">
            {[
              { label: 'Home', href: '/' },
              { label: 'About', href: '/about' },
              { label: 'Services', href: '/services' },
              { label: 'Blogs', href: '/blogs' },
              { label: 'Contact', href: '/contact' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[#9b8ec4] hover:text-[#f5f0e8] transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <p className="text-xs text-[#6b7280]">
            © {new Date().getFullYear()} The Therapy Park. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}