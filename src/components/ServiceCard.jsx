// src/components/ServiceCard.jsx
export default function ServiceCard({ title, text, img, tileBg }) {
  return (
    <li className="group flex flex-row items-center text-left gap-4">
      {/* Pastel icon tile */}
      <div
        className="shrink-0 rounded-2xl p-4 md:p-5 ring-1 ring-black/5 transition-transform group-hover:-translate-y-0.5"
        style={{ backgroundColor: tileBg }}
      >
        <img
          src={img}
          alt={title}
          className="w-8 h-8 md:w-9 md:h-9 object-contain"
          loading="lazy"
        />
      </div>

      {/* Texts */}
      <div>
        <h3 className="text-base md:text-lg font-semibold text-gray-900">
          {title}
        </h3>
        <p className="text-sm text-gray-500">{text}</p>
      </div>
    </li>
  );
}
