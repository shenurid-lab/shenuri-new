// src/components/FeatureSection.jsx
export default function FeatureSection({
  eyebrow,
  subtext,
  title,
  body,
  iconImg,
  iconBg,
  featureImg,
  imageOn = "right", // 'left' or 'right'
  withCircle = false, // purple background circle option
}) {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div
            className={`flex justify-center ${
              imageOn === "left" ? "md:justify-start order-2 md:order-1" : "md:justify-end order-2"
            } relative`}
          >
            {withCircle && (
              <div className="absolute top-1/2 right-1/2 md:right-0 transform -translate-y-1/2 w-80 h-80 bg-purple-100 rounded-full -z-10"></div>
            )}
            <img
              src={featureImg}
              alt="Feature"
              className="w-full max-w-md md:max-w-lg relative z-10"
            />
          </div>

          {/* Text Column */}
          <div className={`order-1 ${imageOn === "left" ? "md:order-2" : ""}`}>
            {/* Icon + Eyebrow */}
            <div className="flex items-center space-x-3 mb-10">
              <div
                className="w-12 h-12 flex items-center justify-center rounded-full"
                style={{ backgroundColor: iconBg }}
              >
                <img src={iconImg} alt="Icon" className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 py-1">
                  {eyebrow}
                </p>
                <p className="text-xs text-gray-500 mb-2">{subtext}</p>
              </div>
            </div>

            {/* Heading */}
            <h3 className="text-center md:text-left text-xl md:text-2xl font-semibold text-gray-900 mb-10 leading-8">
              <span className="text-[#1090CB]">{title.highlight}</span>{" "}
              {title.rest}
            </h3>

            {/* Body */}
            <p className="text-center md:text-left text-gray-600 text-sm md:text-base leading-relaxed">
              {body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
