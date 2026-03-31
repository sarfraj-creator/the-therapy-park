export default function OurPromise() {
  const commitments = [
    {
      icon: <YouComeFirstIcon />,
      label: 'You Come First',
    },
    {
      icon: <NoBiasIcon />,
      label: 'No Bias, Always',
    },
    {
      icon: <RealSupportIcon />,
      label: 'Real Support',
    },
    {
      icon: <SafeSpaceIcon />,
      label: 'Safe Space',
    },
  ]

  return (
    <section style={{ backgroundColor: '#f5f0e8' }} className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-4">
          <span
            className="text-sm font-medium tracking-widest uppercase"
            style={{ color: '#9b8ec4' }}
          >
            — Our Commitment —
          </span>
        </div>

        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          style={{ fontFamily: 'Playfair Display, serif', color: '#1a1a2e' }}
        >
          You Come First
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {commitments.map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-4 text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#e8e06a' }}
              >
                {item.icon}
              </div>
              <p
                className="text-sm font-semibold"
                style={{ color: '#1a1a2e' }}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function YouComeFirstIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M14 4 C10 4 7 7 7 11 C7 15 10 17 14 20 C18 17 21 15 21 11 C21 7 18 4 14 4Z" stroke="#1a1a2e" strokeWidth="1.5" fill="none"/>
      <path d="M9 22 L19 22 M11 25 L17 25" stroke="#1a1a2e" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

function NoBiasIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="9" stroke="#1a1a2e" strokeWidth="1.5" fill="none"/>
      <path d="M11 14 L13 16 L17 12" stroke="#1a1a2e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function RealSupportIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M7 14 Q7 8 14 8 Q21 8 21 14 Q21 19 14 22 Q7 19 7 14Z" stroke="#1a1a2e" strokeWidth="1.5" fill="none"/>
      <path d="M10 13 L13 16 L18 11" stroke="#1a1a2e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function SafeSpaceIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M14 4 L22 8 L22 16 Q22 21 14 24 Q6 21 6 16 L6 8 Z" stroke="#1a1a2e" strokeWidth="1.5" fill="none"/>
      <path d="M10 14 L13 17 L18 12" stroke="#1a1a2e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}