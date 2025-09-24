// src/components/Card.jsx

export default function Card({
  title,
  text,
  buttonText,
  variant = "light", // "light" = left card, "dark" = right card
  icon,             // optional icon (like bell)
}) {
  const isDark = variant === "dark";

  return (
    <div
      className={`relative rounded-lg shadow-sm p-8 flex flex-col items-center text-center ${
        isDark ? "bg-[#1090CB] text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Optional Icon */}
      {icon && (
        <img
          src={icon.src}
          alt={icon.alt}
          className="absolute -top-12 right-4 w-[100px] h-[100px]"
        />
      )}

      <h3
        className={`m-10 text-[18px] md:text-[25px] lg:text-[25px] font-semibold leading-6 md:leading-6 lg:leading-8 ${
          isDark ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h3>

      <p
        className={`text-[13px] md:text-[14px] lg:text-[15px] sm:leading-5 md:leading-5 lg:leading-6 ${
          isDark ? "text-white/90" : "text-gray-600"
        }`}
      >
        {text}
      </p>

      <button
        className={`mt-10 px-6 py-2 rounded-md text-sm font-medium transition ${
          isDark
            ? "bg-white text-[#1090CB] hover:bg-gray-100"
            : "bg-[#1090CB] text-white hover:bg-[#0c74a2]"
        }`}
      >
        {buttonText}
      </button>
    </div>
  );
}
