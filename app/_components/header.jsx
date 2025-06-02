"use client";
import React from 'react'
import './header.css';
import { useState, useEffect, useRef } from 'react';
import { FaGlobe, FaChevronDown } from "react-icons/fa";
import Head from "next/head";
import { HiMenu, HiX } from "react-icons/hi";
import { CiMail } from "react-icons/ci";
import { MdOutlinePhone } from "react-icons/md";
import { MdLogin } from "react-icons/md";
import { IoPersonAddOutline } from "react-icons/io5";
import {
    TR,
    SA,
    US,
    GB,
    PH,
    DE,
    IT,
    KR,
    SD,
    AE
} from 'country-flag-icons/react/3x2'
const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [currentIcon, setCurrentIcon] = useState(<SA className="w-5 h-auto" />);
    const [currentLanguage, setCurrentLanguage] = useState("Saudi Arabia");
    const dropdownRef = useRef(null);
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
        setCurrentIcon(lang.icon); // تحديث الأيقونة هنا
        setIsOpen(false);
        // هنا يمكنك إضافة تغيير اللغة الفعلي (مثل استخدام i18n)
    };

    return (
        <div className='navb'>
            <Head>
                <title>الاستضافات المشتركة</title>
            </Head>

            <nav className="flex navbar items-center justify-between px-4 md:px-10 py-4 bg-white shadow-md relative">
                <div className="flex items-center gap-4 tlemel">
                    <div className="text-xl flex items-center justify-center gap-1 font-bold"><CiMail /> info@doorsoft.com</div>
                    <div className="text-xl flex items-center justify-center gap-1 font-bold"><MdOutlinePhone /> +880181239633</div>
                    {/* <button className="flex items-center justify-center gap-1"><span className='block size-3 bg-gray-300 rounded-full'></span><span> EN</span></button> */}
                </div>

                <div className="hidden md:flex items-center gap-6">
                    <ul className="flex gap-6 text-gray-700 font-medium text-sm">

                        <li className="cursor-pointer">       {/* Dropdown للغات */}
                            <div className="relative" ref={dropdownRef}>
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="flex items-center gap-2 px-4 py-2 bg-gray-100  rounded-lg hover:bg-gray-200 transition-colors duration-300"
                                >
                                    <FaGlobe className="text-gray-600 dark:text-gray-800" />
                                    <span className="font-medium flex items-center justify-center gap-1"><span> {currentIcon}</span>{currentLanguage}</span>
                                    <FaChevronDown
                                        className={`transition-transform duration-200 ${isOpen ? "transform rotate-180" : ""
                                            }`}
                                        size={12}
                                    />
                                </button>

                                {/* القائمة المنسدلة مع تأثير Scroll */}
                                <div
                                    className={`absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${isOpen
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-2 pointer-events-none"
                                        }`}
                                >
                                    <ul className="max-h-60 overflow-y-auto scrollbar-thin">
                                        {languages.map((lang) => (
                                            <li key={lang.code}>
                                                <button
                                                    onClick={() => handleLanguageChange(lang)}
                                                    className={`w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${currentLanguage === lang.name
                                                        ? "bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-300"
                                                        : "text-gray-800 dark:text-gray-200"
                                                        }`}
                                                >
                                                    <div className='flex items-center justify-between gap-1'>
                                                        <span className='span border-radius-5'>{lang.icon}</span>
                                                        {lang.name}</div>
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div></li>
                        <li className="cursor-pointer flex items-center justify-center gap-1"><MdLogin /> Login</li>
                        <li className="cursor-pointer flex items-center justify-center gap-1"><IoPersonAddOutline /> Register</li>

                    </ul>
                    {/* <button className="bg-purple-900 text-white text-sm px-4 py-2 rounded-md hover:bg-purple-800 transition">
                        client login
                    </button> */}
                </div>

                <button
                    className="md:hidden text-gray-600"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    {mobileOpen ? <HiX size={26} /> : <HiMenu size={26} />}
                </button>

                {mobileOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-6 z-50">
                        <ul className="flex flex-col gap-4 text-gray-700 font-medium text-sm">
                            <li className="cursor-pointer">       {/* Dropdown للغات */}
                                <div className="relative" ref={dropdownRef}>
                                    <button
                                        onClick={() => setIsOpen(!isOpen)}
                                        className="flex items-center gap-2 px-4 py-2 bg-gray-100  rounded-lg hover:bg-gray-200 transition-colors duration-300"
                                    >
                                        <FaGlobe className="text-gray-600 dark:text-gray-800" />
                                        <span className="font-medium flex items-center justify-center gap-1"><span> {currentIcon}</span>{currentLanguage}</span>
                                        <FaChevronDown
                                            className={`transition-transform duration-200 ${isOpen ? "transform rotate-180" : ""
                                                }`}
                                            size={12}
                                        />
                                    </button>

                                    {/* القائمة المنسدلة مع تأثير Scroll */}
                                    <div
                                        className={`absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${isOpen
                                            ? "opacity-100 translate-y-0"
                                            : "opacity-0 translate-y-2 pointer-events-none"
                                            }`}
                                    >
                                        <ul className="max-h-60 overflow-y-auto scrollbar-thin">
                                            {languages.map((lang) => (
                                                <li key={lang.code}>
                                                    <button
                                                        onClick={() => handleLanguageChange(lang)}
                                                        className={`w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${currentLanguage === lang.name
                                                            ? "bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-300"
                                                            : "text-gray-800 dark:text-gray-200"
                                                            }`}
                                                    >
                                                        <div className='flex items-center justify-between gap-1'>
                                                            <span className='span border-radius-5'>{lang.icon}</span>
                                                            {lang.name}</div>
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div></li>

                            <li className="cursor-pointer flex items-center justify-center gap-1"><MdLogin /> Login</li>
                            <li className="cursor-pointer flex items-center justify-center gap-1"><IoPersonAddOutline /> Register</li>
                        </ul>
                        <button className="mt-4 bg-purple-900 text-white text-sm px-4 py-2 rounded-md w-full hover:bg-purple-800 transition">
                            client login
                        </button>
                    </div>
                )}
            </nav>

        </div>
    )
}

export default Header;
