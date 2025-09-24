// src/components/Hero.jsx
import heroImg from "../assets/hero-figure.png";     // person sitting image
import decoLeft from "../assets/frame2.png";         // left blue shape
import decoRight from "../assets/frame.png";         // right blue shape

export default function Hero() {
  return (
    <section className="relative bg-[#EAF6FB] min-h-screen">
      {/* Left Decorative Shape */}
      <img
        src={decoLeft}
        alt="Decorative Shape Left"
        className="hidden md:block absolute left-0 top-[200px] md:top-[230px] lg:top-[380px] w-20 lg:w-18 z-10"
      />

      {/* Right Decorative Shape */}
      <img
        src={decoRight}
        alt="Decorative Shape Right"
        className="hidden md:block absolute top-[80px] md:top-[200px] lg:top-[220px] right-0 w-16 lg:w-18 z-0"
      />

      <div className="relative max-w-[1536px] mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
        {/* Left Text Section */}
        <div className="relative">
          {/* Purple Glow */}
          <div
            className="absolute top-30 md:-top-10 lg:-top-10 left-1/2 md:left-1/3 lg:left-[100px] -translate-x-1/2
                       w-40 sm:w-56 md:w-72 h-40 sm:h-56 md:h-72
                       rounded-full bg-radial from-purple-300/60 to-transparent blur-2xl"
          ></div>

          <h1 className="relative text-center md:text-left text-[25px] md:text-[32px] lg:text-[40px] font-bold text-gray-900 mb-6 leading-snug">
            Experienced <span className="text-[#1090CB]">mobile and web</span>{" "}
            applications and website <br className="hidden sm:block" /> builders measuring.
          </h1>

          <p className="text-center md:text-left text-gray-600 text-[15px] mb-8 leading-6">
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
            applications and website builders measuring dozens of completed
            projects. We build and develop mobile applications for several top
            platforms, including Android & iOS.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-[#1090CB] text-white text-[15px] px-6 lg:px-10 py-3 rounded-lg hover:bg-[#0d7fb0] transition">
              Contact us
            </button>
            <button className="border border-[#1090CB] text-[#1090CB] text-[15px] px-6 lg:px-10 py-3 rounded-lg bg-white hover:bg-[#1090CB] hover:text-white transition">
              View more
            </button>
          </div>
        </div>

        {/* Right Hero Image */}
        <div className="flex justify-center md:justify-end relative">
          <img
            src={heroImg}
            alt="Hero Person"
            className="w-3/4 sm:w-2/3 md:w-full max-w-sm md:max-w-lg relative z-10"
          />
        </div>
      </div>

      {/* Yellow Gradient Glow */}
      <div
        className="absolute bottom-10 right-[10px] md:right-[10px] lg:right-[300px] top-[650px] md:top-[200px] lg:top-[200px] w-60 md:w-56 lg:w-72 h-40 md:h-56 lg:h-72
                   rounded-full bg-radial from-yellow-300/50 to-transparent blur-2xl z-0"
      ></div>
    </section>
  );
}
