// src/components/Services.jsx
import s1 from "../assets/service1.png";
import s2 from "../assets/service2.png";
import s3 from "../assets/service3.png";
import s4 from "../assets/service4.png";
import ServiceCard from "../components/ServiceCard.jsx";

export default function Services() {
  const items = [
    {
      title: "Web Application",
      text: "Lorem Ipsum is simply",
      img: s1,
      tileBg: "#ECEAFF", // light purple
    },
    {
      title: "SEO",
      text: "Lorem Ipsum is simply",
      img: s2,
      tileBg: "#EAFBE8", // light green
    },
    {
      title: "AR/VR Solutions",
      text: "Lorem Ipsum is simply",
      img: s3,
      tileBg: "#E7F0FF", // light blue
    },
    {
      title: "Mobile Applications",
      text: "Lorem Ipsum is simply",
      img: s4,
      tileBg: "#FEE9E2", // light peach
    },
  ];

  return (
    <section className="bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12 relative z-10">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((it) => (
            <ServiceCard
              key={it.title}
              title={it.title}
              text={it.text}
              img={it.img}
              tileBg={it.tileBg}
            />
          ))}
        </ul>
      </div>
      <div className="border-b border-gray-200"></div>
    </section>
  );
}
