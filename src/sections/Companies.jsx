// src/components/CompanyLogos.jsx
import beneoshop from "../assets/beneoshop.png";
import caspio from "../assets/caspio.png";
import hypergrid from "../assets/hyperGrid.png";
import leotrippi from "../assets/leotrippi.png";

export default function Companies() {
  const logos = [
    { src: beneoshop, alt: "Beneoshop" },
    { src: caspio, alt: "Caspio" },
    { src: hypergrid, alt: "Hypergrid" },
    { src: leotrippi, alt: "Leo Trippi" },
  ];

  return (
    <section className="max-w-7xl mx-auto bg-white py-12 relative">
      {/* Title */}
      <h3 className="text-center text-xl md:text-2xl font-medium text-gray-800 mb-8">
        You will be in good <span className="font-semibold">Company</span>
      </h3>

      {/* Logos */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-12 px-6 md:px-16 place-items-center">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="h-28 w-44 md:h-36 md:w-60 object-contain opacity-90 hover:opacity-100 transition"
          />
        ))}
      </div>
    </section>
  );
}
