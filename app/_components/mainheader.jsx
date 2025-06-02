"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Head from "next/head";
import { CiMail } from "react-icons/ci";
import { MdOutlinePhone, MdLogin } from "react-icons/md";
import { IoPersonAddOutline } from "react-icons/io5";
import { FaGlobe, FaChevronDown } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { FiMenu, FiX } from "react-icons/fi";
import { FaRegQuestionCircle } from "react-icons/fa";
import {
    TR, SA, US, GB, PH, DE, IT, KR, SD, AE
} from 'country-flag-icons/react/3x2';

const MainHeader = () => {

    const [mobileOpen, setMobileOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [currentIcon, setCurrentIcon] = useState(<SA className="w-5 h-auto" />);
    const [currentLanguage, setCurrentLanguage] = useState("Saudi Arabia");
    const dropdownRef = useRef(null);
    const [menuOpen, setMenuOpen] = useState(false);

    const languages = [
        { code: "ar", name: "Saudi Arabia", icon: <SA className="w-8 h-auto" /> },
        { code: "en", name: "United States", icon: <US className="w-8 h-auto" /> },
        { code: "en", name: "United Kingdom", icon: <GB className="w-8 h-auto" /> },
        { code: "en", name: "Turkey", icon: <TR className="w-8 h-auto" /> },
        { code: "en", name: "Philippines", icon: <PH className="w-8 h-auto" /> },
        { code: "en", name: "Germany", icon: <DE className="w-8 h-auto" /> },
        { code: "en", name: "Italy", icon: <IT className="w-8 h-auto" /> },
        { code: "en", name: "Korea", icon: <KR className="w-8 h-auto" /> },
        { code: "en", name: "Sudan", icon: <SD className="w-8 h-auto" /> },
        { code: "fr", name: "United Arab", icon: <AE className="w-8 h-auto" /> },
    ];

    const navLinks = [
        { name: <FaRegQuestionCircle />, path: "/" },
        { name: "الشركة", path: "#about" },
        { name: "المجالات", path: "#filds" },
        { name: "الخوادم", path: "#services" },
        { name: "النطاقات", path: "#netak" },
        { name: "الاستضافات", path: "#contact" },
    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleLanguageChange = (lang) => {
        setCurrentLanguage(lang.name);
        setCurrentIcon(lang.icon);
        setIsOpen(false);
    };
    return (
        <div>
            <Head>
                <title>الاستضافات المشتركة</title>
            </Head>

            {/* Header Section */}
            <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
                <nav className="flex items-center justify-between px-4 md:px-10 py-3">
                    <div className="flex items-center gap-4">
                        <div className="text-sm flex items-center gap-1"><CiMail /> info@doorsoft.com</div>
                        <div className="text-sm flex items-center gap-1"><MdOutlinePhone /> +880181239633</div>
                    </div>

                    <div className="hidden md:flex items-center gap-6">
                        <ul className="flex gap-6 text-gray-700 font-medium text-sm">
                            <li className="cursor-pointer relative" ref={dropdownRef}>
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
                                >
                                    <FaGlobe className="text-gray-600" />
                                    <span className="flex items-center gap-1">{currentIcon} {currentLanguage}</span>
                                    <FaChevronDown
                                        className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                                        size={12}
                                    />
                                </button>
                                {/* Dropdown List */}
                                <div className={`absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"}`}>
                                    <ul className="max-h-60 overflow-y-auto">
                                        {languages.map((lang) => (
                                            <li key={lang.code}>
                                                <button
                                                    onClick={() => handleLanguageChange(lang)}
                                                    className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${currentLanguage === lang.name ? "bg-blue-50 text-blue-600" : "text-gray-800"}`}
                                                >
                                                    <div className="flex items-center justify-between gap-2">
                                                        {lang.icon} {lang.name}
                                                    </div>
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </li>
                            <li className="flex items-center gap-1 cursor-pointer"><MdLogin /> Login</li>
                            <li className="flex items-center gap-1 cursor-pointer"><IoPersonAddOutline /> Register</li>
                        </ul>
                    </div>

                    {/* Burger Menu on Mobile */}
                    <button className="md:hidden text-gray-600" onClick={() => setMobileOpen(!mobileOpen)}>
                        {mobileOpen ? <HiX size={26} /> : <HiMenu size={26} />}
                    </button>
                </nav>

                {/* Mobile Header Dropdown */}
                {mobileOpen && (
                    <div className="md:hidden px-6 pb-4">
                        <ul className="flex flex-col gap-4 text-gray-700 font-medium text-sm">
                            <li className="cursor-pointer relative" ref={dropdownRef}>
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
                                >
                                    <FaGlobe className="text-gray-600" />
                                    <span className="flex items-center gap-1">{currentIcon} {currentLanguage}</span>
                                    <FaChevronDown
                                        className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                                        size={12}
                                    />
                                </button>
                                <div className={`absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"}`}>
                                    <ul className="max-h-60 overflow-y-auto">
                                        {languages.map((lang) => (
                                            <li key={lang.code}>
                                                <button
                                                    onClick={() => handleLanguageChange(lang)}
                                                    className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${currentLanguage === lang.name ? "bg-blue-50 text-blue-600" : "text-gray-800"}`}
                                                >
                                                    <div className="flex items-center justify-between gap-2">
                                                        {lang.icon} {lang.name}
                                                    </div>
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </li>
                            <li className="flex items-center gap-1"><MdLogin /> Login</li>
                            <li className="flex items-center gap-1"><IoPersonAddOutline /> Register</li>
                        </ul>
                    </div>
                )}
            </div>

            {/* Navbar Section */}
            <header className="fixed nav top-[50px] w-full z-40  backdrop-blur-md">
                <nav>
                    <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                        {/* Desktop Menu */}
                        <ul className="hidden md:flex items-center space-x-10 text-white">
                            {navLinks.map((link, idx) => (
                                <li className="hover:text-blue-400 transition-all" key={idx}>
                                    <a href={link.path}>{link.name}</a>
                                </li>
                            ))}
                        </ul>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden text-white">
                            <button onClick={() => setMenuOpen(!menuOpen)}>
                                {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                            </button>
                        </div>

                        {/* Logo */}
                        <div className="flex items-center">
                            <Link href="/">
                                <img src="/images/logo.png" alt="Logo" className="h-10 w-auto" />
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Links */}
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

        </div>
    )
}

export default MainHeader
