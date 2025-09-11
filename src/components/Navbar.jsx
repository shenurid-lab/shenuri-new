// src/components/navbar.jsx
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full px-8 py-5 shadow-sm bg-white">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-[20px] font-bold text-[#1090CB]">LOGO</div>

        {/* Hamburger button (visible on mobile only) */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <span className="text-xl">✖</span> // close icon
          ) : (
            <span className="text-xl">☰</span> // hamburger icon
          )}
        </button>

        {/* Menu (desktop) */}
        <ul className="hidden md:flex items-center gap-15 ml-300">
          <li className="relative">
            <a href="#" className="text-[#1090CB] font-medium">
              Home
            </a>
            {/* Dot at top-left corner */}
            <span className="absolute -top-2 -left-2 w-2 h-2 rounded-full bg-[#08D3BB]"></span>
          </li>
          <li>
            <a href="#" className="text-gray-800 hover:text-[#1090CB]">
              About us
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-800 hover:text-[#1090CB]">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-800 hover:text-[#1090CB]">
              Blog
            </a>
          </li>
        </ul>

        {/* Contact button (desktop) */}
        <a
          href="#"
          className="hidden md:inline-block ml-8 bg-[#1090CB] hover:bg-sky-700 text-white px-4 py-2 rounded-md"
        >
          Contact us
        </a>
      </div>

      {/* Mobile menu (collapsible) */}
      {open && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col gap-4">
            <li className="relative">
              <a href="#" className="text-[#1090CB] font-medium">
                Home
              </a>
              <span className="absolute -top-2 -left-2 w-2 h-2 rounded-full bg-[#08D3BB]"></span>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:text-[#1090CB]">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:text-[#1090CB]">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:text-[#1090CB]">
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="bg-[#1090CB] hover:bg-sky-700 text-white px-4 py-2 rounded-md"
              >
                Contact us
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
