// src/components/Services.jsx
export default function Services() {
  // You can change titles, copy, and colors here:
  const items = [
    {
      title: "Web Application",
      text: "Lorem Ipsum is simply",
      // pastel tile color
      tileBg: "#ECEAFF",            // light purple
      // icon color
      iconColor: "#6F6CF6",
      icon: (
        // simple "web" icon (inline SVG)
        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.6">
          <rect x="3" y="4" width="18" height="14" rx="2" />
          <path d="M3 8h18M8 12h3M8 16h6" />
        </svg>
      ),
    },
    {
      title: "SEO",
      text: "Lorem Ipsum is simply",
      tileBg: "#EAFBE8",            // light green
      iconColor: "#5DBD56",
      icon: (
        // tag icon
        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M20 13.5L10.5 4H4v6.5L13.5 20a2.1 2.1 0 003 0l3.5-3.5a2.1 2.1 0 000-3z" />
          <circle cx="7" cy="7" r="1.2" />
        </svg>
      ),
    },
    {
      title: "AR/VR Solutions",
      text: "Lorem Ipsum is simply",
      tileBg: "#E7F0FF",            // light blue
      iconColor: "#4C88FF",
      icon: (
        // VR headset icon
        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.6">
          <rect x="2.5" y="8" width="19" height="8" rx="3" />
          <path d="M8 12h2.2M13.8 12H16" />
          <path d="M6.5 16.5L9 14m6 0l2.5 2.5" />
        </svg>
      ),
    },
    {
      title: "Mobile Applications",
      text: "Lorem Ipsum is simply",
      tileBg: "#FEE9E2",            // light peach
      iconColor: "#F08966",
      icon: (
        // phone icon
        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.6">
          <rect x="7" y="2.8" width="10" height="18.4" rx="2" />
          <circle cx="12" cy="18.6" r="0.9" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Row of cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((it) => (
            <div
              key={it.title}
              className="group flex items-center gap-4"
            >
              {/* Icon tile */}
              <div
                className="shrink-0 rounded-2xl p-4 ring-1 ring-black/5 transition-transform group-hover:-translate-y-0.5"
                style={{ backgroundColor: it.tileBg }}
              >
                <div className="text-[color:var(--icon)]" style={{ ["--icon"]: it.iconColor }}>
                  {it.icon}
                </div>
              </div>

              {/* Texts */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {it.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {it.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
