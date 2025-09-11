// src/components/Hero.jsx
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#EEF8FD]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-4 md:px-8 py-16 lg:py-24">
       
        {/* LEFT: text */}
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-[40px] font-semibold leading-tight text-gray-900">
            Experienced <span className="text-[#1090CB]">mobile and web</span>{" "}
            applications and website builders measuring.
          </h1>

          <p className="mt-6 text-gray-600 text-base md:text-[16px] leading-relaxed max-w-xl">
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
            applications and website builders measuring dozens of completed
            projects. We build and develop mobile applications for several top
            platforms, including Android &amp; iOS.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-lg text-[16px] bg-[#1090CB] px-6 py-3 text-white font-medium shadow hover:bg-[#0c74a2] hover:shadow-md transition"
            >
              Contact us
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-lg text-[16px] bg-white border border-[#1090CB] px-6 py-3 text-[#1090CB] font-medium hover:bg-[#1090CB]/10 transition"
            >
              View more
            </a>
          </div>
        </div>
        

        {/* RIGHT: illustration */}
        <div className="relative">
          {/* soft radial glow behind the image */}
            
          <img
            src="src/assets/hero-figure.png"
            alt="Person working on a laptop"
            className="w-full max-w-[520px] mx-auto"
          />

          
        </div>
      </div>

      
    </section>
  );
}
