"use client"

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function GradientNavbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMobileMenu = () => setMobileMenuOpen(false);

    return (
        <header className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-gradient-to-r from-teal-500 via-blue-500 to-cyan-400 py-4'}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center z-50">
                        <span className={`text-2xl font-bold ${scrolled ? 'text-gray-800' : 'text-white drop-shadow-md'}`}>
                            {/* People magnet */}
                            PK Digital Works
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <NavLink href="/" scrolled={scrolled}>
                            Home
                        </NavLink>
                        <NavLink href="/about" scrolled={scrolled}>
                            About
                        </NavLink>
                        <NavLink href="/services" scrolled={scrolled}>
                            Service
                        </NavLink>
                        <NavLink href="/contact" scrolled={scrolled}>
                            Contact Us
                        </NavLink>

                        <Link
                            href="/signup"
                            className={`ml-4 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${scrolled
                                ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white hover:from-teal-600 hover:to-cyan-600 shadow-md'
                                : 'bg-white text-teal-600 hover:bg-gray-100 hover:text-teal-700 shadow-md'
                                }`}
                        >
                            Get Started
                        </Link>
                    </nav>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden p-2 rounded-md focus:outline-none z-50"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className={`w-6 h-6 transition-all ${scrolled ? 'text-gray-800' : 'text-white'}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {mobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div className={`md:hidden fixed inset-0 bg-gradient-to-b from-teal-500 to-cyan-500 transition-all duration-500 ease-in-out transform ${mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'} z-40 pt-20`}>
                    <div className="container mx-auto px-4 py-8 flex flex-col items-center h-full">
                        <MobileNavLink href="/" onClick={closeMobileMenu}>
                            Home
                        </MobileNavLink>
                        <MobileNavLink href="/about" onClick={closeMobileMenu}>
                            About
                        </MobileNavLink>
                        <MobileNavLink href="/services" onClick={closeMobileMenu}>
                            Service
                        </MobileNavLink>
                        <MobileNavLink href="/contact" onClick={closeMobileMenu}>
                            Contact Us
                        </MobileNavLink>

                        <Link
                            href="/signup"
                            onClick={closeMobileMenu}
                            className="mt-8 w-full max-w-xs px-6 py-3 text-center rounded-lg bg-white text-teal-600 font-medium hover:bg-gray-100 transition-colors shadow-lg"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

// Reusable NavLink component
function NavLink({ href, children, scrolled }: { href: string; children: React.ReactNode; scrolled: boolean }) {
    return (
        <Link
            href={href}
            className={`text-sm font-medium transition-all duration-300 hover:scale-105 ${scrolled ? 'text-gray-800 hover:text-teal-600' : 'text-white hover:text-teal-200 drop-shadow-md'
                }`}
        >
            {children}
        </Link>
    );
}

// Reusable MobileNavLink component
function MobileNavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className="w-full max-w-xs px-6 py-4 text-center text-white text-lg font-medium hover:bg-white/10 rounded-lg transition-colors mb-2"
        >
            {children}
        </Link>
    );
}