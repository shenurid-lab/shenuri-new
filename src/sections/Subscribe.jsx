// src/components/Subscribe.jsx
import purpleIcon from "../assets/purpleIcon.png";
import starIcon from "../assets/star.png";

export default function Subscribe() {
  return (
    <section className="bg-[#EAF6FB] py-10 md:py-35 lg:py-35 relative">
      <div className="max-w-2xl mx-auto text-center px-6">
        {/* Heading */}
        <h2 className="text-[20px] md:text-[23px] lg:text-[25px] font-semibold text-gray-800 mb-12 leading-6 md:leading-12 lg:leading-12">
          Lorem Ipsum is simply dummy <br /> text of the printing.
        </h2>

        {/* Input + Button (separate) */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full max-w-md px-8 py-3 md:py-6 lg:py-6 rounded-lg border border-white bg-white focus:outline-none focus:ring-2 focus:ring-[#1090CB]"
          />
          <button
            type="submit"
            className="bg-black text-white px-12 py-3 md:py-6 lg:py-6  rounded-lg font-medium hover:bg-gray-900 transition w-full sm:w-auto"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>

      {/* Decorative star (top-left) */}
      <div className="hidden lg:block absolute top-[-40px] left-120">
        <img src={starIcon} alt="Star decorative icon" className="w-20 h-20" />
      </div>

      {/* Decorative purple icon (top-right) */}
      <div className="hidden lg:block absolute top-20 right-110">
        <img
          src={purpleIcon}
          alt="Purple decorative icon"
          className="w-15 h-15 opacity-80"
        />
      </div>
    </section>
  );
}
