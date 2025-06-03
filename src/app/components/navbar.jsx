'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX, FiSearch } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import Image from 'next/image';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About us', href: '../../Admin/AboutPage' },
  { name: 'Projects', href: '../../Admin/projectPage' },
  
  { name: 'Services', href: '../../Admin/ServicesPage' },
  { name: 'Publications', href: '../../Admin/PublicationPage' },
  { name: 'Team', href: '/team' },
  { name: 'News & Events', href: '../../Admin/NewsPage' },
  { name: 'Gallery', href: '../../Admin/GalleryPage' },
  { name: 'Contact Us', href: '/contact' }
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(null);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 font-sans">
      {/* Top Bar */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-2 text-sm text-gray-700">
          <div className="flex gap-4">
            <Link href="/press">Press</Link>
            <Link href="/contact">Contact</Link>
            <a
  href="https://scl-internship-portal.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-indigo-600 transition"
>
  Internships
</a>
           
          </div>
          <div className="flex items-center gap-4">
            <FaFacebookF className="hover:text-indigo-600 transition" />
            <FaInstagram className="hover:text-indigo-600 transition" />
            <FaYoutube className="hover:text-indigo-600 transition" />
            <FaLinkedinIn className="hover:text-indigo-600 transition" />
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="px-3 py-1 rounded-md border text-sm border-gray-300 bg-white text-gray-700 placeholder-gray-400"
              />
              <FiSearch className="absolute right-2 top-2 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white/90 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/images/ncailogo.png" // Replace with your actual logo path
              alt="Logo"
              width={250}      // Adjust as needed
              height={10}     // Match height visually with text
              className="object-contain"
            />
              {/* <span className="text-3xl font-black text-blue-400 tracking-tight">NCAI</span>
              <span className="text-xs text-gray-600 font-light leading-tight hidden sm:block">
                <p>Research Center for</p>
                <p>Artificial Intelligence</p>
              </span> */}
        </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 text-[15px] font-medium text-gray-800">
            {navLinks.map((link, idx) => (
              <div key={idx} className="relative group">
                <Link
                  href={link.href}
                  className={`hover:text-cyan-600 transition ${
                    pathname === link.href ? 'text-indigo-600 font-semibold' : ''
                  }`}
                >
                  {link.name}
                </Link>
                {link.submenu && (
                  <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {link.submenu.map((sublink, subIdx) => (
                      <Link
                        key={subIdx}
                        href={sublink.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-800"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden px-6 pb-4 bg-white border-t border-gray-200 space-y-2">
            {navLinks.map((link, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-center">
                  <Link
                    href={link.href}
                    className={`block py-2 text-base font-medium ${
                      pathname === link.href ? 'text-indigo-600 font-semibold' : 'text-gray-800'
                    }`}
                  >
                    {link.name}
                  </Link>
                  {link.submenu && (
                    <button
                      onClick={() => setSubmenuOpen(submenuOpen === idx ? null : idx)}
                      className="text-gray-800"
                      aria-label="Toggle Submenu"
                    >
                      ▼
                    </button>
                  )}
                </div>
                {link.submenu && submenuOpen === idx && (
                  <div className="pl-4">
                    {link.submenu.map((sublink, subIdx) => (
                      <Link
                        key={subIdx}
                        href={sublink.href}
                        className="block py-1 text-sm text-gray-700 hover:underline"
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}