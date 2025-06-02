"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { FaRegQuestionCircle } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: <FaRegQuestionCircle />, path: "/" },
    { name: "الشركة", path: "#about" },
    { name: "المجالات", path: "#filds" },
    { name: "الخوادم ", path: "#services" },
    { name: "النطاقات", path: "#netak" },
    { name: "الاستضافات", path: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/5 backdrop-blur-md">
      <nav>
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          {/* روابط الديسكتوب */}
          <ul className="hidden md:flex items-center space-x-10 text-white">
            {navLinks.map((link, idx) => (
              <li className="hover:text-blue-400 transition-all" key={idx}>
                <a href={link.path}>{link.name}</a>
              </li>
            ))}
          </ul>

          {/* زر القائمة للأجهزة الصغيرة */}
          <div className="md:hidden text-white">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>

          {/* اللوجو */}
          <div className="flex items-center">
            <Link href="/">
              <img
                src="/images/logo.png"
                alt="Logo"
                className="h-10 w-auto"
              />
            </Link>
          </div>
        </div>

        {/* قائمة الجوال */}
        {menuOpen && (
          <ul className="md:hidden flex flex-col items-center bg-black/80 text-white w-full py-4 space-y-4">
            {navLinks.map((link, idx) => (
              <li key={idx} onClick={() => setMenuOpen(false)}>
                <a href={link.path}>{link.name}</a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
