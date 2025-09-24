// src/components/Footer.jsx
import logo from "../assets/lg.png"; // replace with your logo
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";

export default function Footer() {
  const socialIcons = [
    { src: facebook, alt: "Facebook", href: "#" },
    { src: instagram, alt: "Instagram", href: "#" },
    { src: twitter, alt: "Twitter", href: "#" },
    { src: linkedin, alt: "LinkedIn", href: "#" },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid grid-cols-1 md:grid-cols-[2fr_1fr_2fr_1fr] gap-y-10 md:gap-x-20 text-center md:text-left">
        {/* Logo & About */}
        <div className="flex flex-col items-center md:items-start">
          <img src={logo} alt="Logo" className="h-6 mb-4" />
          <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-xs md:max-w-none">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className="text-gray-500 text-sm">@Lorem</p>
        </div>

        {/* About us */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-gray-800 font-semibold mb-4">About us</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><a href="#">Lorem</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </div>

        {/* Contact us */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-gray-800 font-semibold mb-4">Contact us</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-xs md:max-w-none">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className="text-gray-600 text-sm font-medium">+908 89097 890</p>
        </div>

        {/* Social icons */}
        <div className="flex flex-col items-center md:items-end justify-end">
          <div className="flex space-x-4">
            {socialIcons.map((icon, index) => (
              <a
                key={index}
                href={icon.href}
                className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md hover:shadow-lg transition"
              >
                <img src={icon.src} alt={icon.alt} className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t border-gray-200 py-8">
        <p className="text-center text-gray-500 text-sm">
          Copyright © 2021 Lorem All rights Reserved
        </p>
      </div>
    </footer>
  );
}
