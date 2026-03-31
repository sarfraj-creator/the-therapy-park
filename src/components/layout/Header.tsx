'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Blogs', href: '/blogs' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL || '#'

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-[#f5f0e8] font-serif">
            the therapy park
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#f5f0e8] hover:text-[#e8e06a] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full text-sm font-semibold bg-[#e8e06a] text-[#1a1a2e] hover:opacity-90 transition-all duration-200"
          >
            Book a Session
          </a>

          <Link
            href="/contact"
            className="px-5 py-2 rounded-full text-sm font-semibold border border-[#f5f0e8] text-[#f5f0e8] hover:opacity-80 transition-all duration-200"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-[#f5f0e8]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4 bg-[#1a1a2e]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium py-2 border-b border-[#2d2d4e] text-[#f5f0e8]"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <div className="flex flex-col gap-3 pt-2">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full text-sm font-semibold text-center bg-[#e8e06a] text-[#1a1a2e]"
            >
              Book a Session
            </a>

            <Link
              href="/contact"
              className="px-5 py-2 rounded-full text-sm font-semibold text-center border border-[#f5f0e8] text-[#f5f0e8]"
              onClick={() => setMobileOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}