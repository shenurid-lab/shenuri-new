// src/components/navbar.jsx
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-[1536px] mx-auto pl-[32px] pr-[30px] py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-[20px] font-bold text-[#1090CB]">LOGO</div>

        {/* Hamburger button (mobile only) */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <span className="text-xl">✖</span>
          ) : (
            <span className="text-xl">☰</span>
          )}
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-12">
          <ul className="flex items-center gap-8">
            <li className="relative">
              <a href="#" className="text-[#1090CB] font-medium">
                Home
              </a>
              {/* Dot above Home */}
              <span className="absolute -top-2 left-[-3px] -translate-x-1/2 w-2 h-2 rounded-full bg-[#08D3BB]"></span>
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

          {/* Contact button */}
          <a
            href="#"
            className="bg-[#1090CB] hover:bg-sky-700 text-white px-6 py-2 rounded-md"
          >
            Contact us
          </a>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden mt-2 px-6 py-6 bg-white shadow-md">
          <ul className="flex flex-col gap-4">
            <li className="relative">
              <a href="#" className="text-[#1090CB] font-medium">
                Home
              </a>
              <span className="absolute -top-2 left-[-5px] -translate-x-1/2 w-2 h-2 rounded-full bg-[#08D3BB]"></span>
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
