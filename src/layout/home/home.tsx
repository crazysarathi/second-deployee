"use client"

import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect, JSX, SVGProps } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowRightIcon,
    CheckIcon,
    ChartBarIcon,
    BoltIcon,
    UserGroupIcon,
    ArrowPathIcon,
    ShieldCheckIcon,
    SparklesIcon
} from '@heroicons/react/24/outline';

export default function Homes() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Auto-rotate testimonials
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen">

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-r from-teal-500 via-blue-500 to-cyan-400 overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <div className="absolute top-20 left-10 w-40 h-40 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
                    <div className="absolute top-40 right-20 w-40 h-40 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
                    <div className="absolute bottom-20 left-1/2 w-40 h-40 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="max-w-5xl mx-auto text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                        >
                            <span className="block">Grow Your Business With</span>
                            <span className="text-yellow-300">Data-Driven Marketing</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto"
                        >
                            We deliver measurable results through strategic digital marketing solutions tailored to your unique business goals.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex flex-col sm:flex-row justify-center gap-4"
                        >
                            <a
                                href="#contact"
                                className="px-8 py-4 bg-white text-teal-600 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg flex items-center justify-center"
                            >
                                Get Free Consultation <ArrowRightIcon className="w-5 h-5 ml-2" />
                            </a>
                            <a
                                href="#services"
                                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors flex items-center justify-center"
                            >
                                Explore Services
                            </a>
                        </motion.div>
                    </div>

                </div>
            </section>

            {/* Trust Badges */}
            {/* <section className="py-8 bg-gray-50 border-b">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
                        {trustBadges.map((badge, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="opacity-70 hover:opacity-100 transition-opacity"
                            >
                                <Image
                                    src={badge.image}
                                    alt={badge.alt}
                                    width={120}
                                    height={40}
                                    className="h-8 w-auto object-contain"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* Trust Badges - Enhanced */}
            <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h3 className="text-lg font-medium text-gray-500 mb-2">
                            Trusted by innovative companies worldwide
                        </h3>
                        <p className="text-sm text-gray-400 max-w-2xl mx-auto">
                            We partner with industry leaders to deliver exceptional results
                        </p>
                    </div>

                    <div className="relative">
                        {/* Gradient fade effect on sides */}
                        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
                        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

                        {/* Auto-scrolling badges with hover effects */}
                        <div className="flex overflow-x-hidden py-4 group">
                            <div className="flex items-center justify-center space-x-12 animate-scroll ">
                                {[...trustBadges, ...trustBadges].map((badge, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{
                                            scale: 1.1,
                                            transition: { duration: 0.3 }
                                        }}
                                        className="flex-shrink-0 px-4"
                                    >
                                        {/* <div className="relative h-12 w-34 flex items-center justify-center"> */}
                                        <Image
                                            src={badge.image}
                                            alt={badge.alt}
                                            width={120}
                                            height={48}
                                            className="h-30 w-auto object-contain opacity-80 transition-opacity duration-300"
                                        />
                                        {/* Subtle glow on hover */}
                                        <div className="absolute inset-0 rounded-lg bg-current opacity-0  transition-opacity duration-300 pointer-events-none"></div>
                                        {/* </div> */}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Trust indicators */}
                    <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-teal-600 mb-2">10+</div>
                            <div className="text-sm text-gray-500">Years Experience</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                            <div className="text-sm text-gray-500">Happy Clients</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-cyan-500 mb-2">97%</div>
                            <div className="text-sm text-gray-500">Client Retention</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-purple-600 mb-2">4.9/5</div>
                            <div className="text-sm text-gray-500">Avg. Rating</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Results Section */}
            <section id="results" className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="inline-block px-3 py-1 text-sm font-semibold text-teal-500 bg-teal-50 rounded-full mb-4">
                            PROVEN RESULTS
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            We Drive <span className="text-teal-500">Measurable Growth</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Our data-driven approach delivers consistent results across industries
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {results.map((result, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow"
                            >
                                <div className={`w-14 h-14 rounded-full ${result.bgColor} flex items-center justify-center mb-6`}>
                                    <result.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">{result.title}</h3>
                                <p className="text-gray-600 mb-4">{result.description}</p>
                                <div className="text-3xl font-bold text-teal-600">{result.value}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-500 bg-blue-50 rounded-full mb-4">
                            OUR SERVICES
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            Comprehensive <span className="text-blue-500">Digital Solutions</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            End-to-end marketing services to grow your online presence
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all"
                            >
                                <div className={`w-14 h-14 rounded-full ${service.bgColor} flex items-center justify-center mb-6`}>
                                    <service.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                                <p className="text-gray-600 mb-4">{service.description}</p>
                                <ul className="space-y-2 mb-6">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-center">
                                            <CheckIcon className="w-5 h-5 text-teal-500 mr-2" />
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href={`/services#${service.id}`}
                                    className="text-teal-500 font-medium flex items-center hover:text-teal-600"
                                >
                                    Learn more <ArrowRightIcon className="w-4 h-4 ml-1" />
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How We Work */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/2">
                            <Image
                                src="/images/our-process.png"
                                alt="Our process"
                                width={600}
                                height={400}
                                className="rounded-xl shadow-lg"
                            />
                        </div>
                        <div className="lg:w-1/2">
                            <span className="inline-block px-3 py-1 text-sm font-semibold text-cyan-500 bg-cyan-50 rounded-full mb-4">
                                OUR PROCESS
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                                A <span className="text-cyan-500">Strategic Approach</span> That Works
                            </h2>
                            <div className="space-y-6">
                                {processSteps.map((step, index) => (
                                    <div key={index} className="flex items-start">
                                        <div className="flex-shrink-0 bg-cyan-100 p-3 rounded-lg mr-4">
                                            <step.icon className="w-6 h-6 text-cyan-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-800 mb-1">{step.title}</h3>
                                            <p className="text-gray-600">{step.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section id="testimonials" className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="inline-block px-3 py-1 text-sm font-semibold text-purple-500 bg-purple-50 rounded-full mb-4">
                            CLIENT SUCCESS
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            Trusted By <span className="text-purple-500">Leading Brands</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Don't just take our word for it - hear from our satisfied clients
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentTestimonial}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5 }}
                                className="bg-white p-8 md:p-10 rounded-xl shadow-md"
                            >
                                <div className="flex items-center mb-6">
                                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                                        <Image
                                            src={testimonials[currentTestimonial].avatar}
                                            alt={testimonials[currentTestimonial].name}
                                            width={64}
                                            height={64}
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">{testimonials[currentTestimonial].name}</h4>
                                        <p className="text-gray-600 text-sm">{testimonials[currentTestimonial].position}</p>
                                    </div>
                                </div>
                                <p className="text-gray-700 text-lg italic mb-6">"{testimonials[currentTestimonial].quote}"</p>
                                <div className="flex items-center justify-between">
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                className={`w-5 h-5 ${i < testimonials[currentTestimonial].rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <div className="flex space-x-2">
                                        {testimonials.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setCurrentTestimonial(index)}
                                                className={`w-3 h-3 rounded-full ${currentTestimonial === index ? 'bg-teal-500' : 'bg-gray-300'}`}
                                                aria-label={`View testimonial ${index + 1}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </section>



            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <Image
                                src="/images/logo.png"
                                alt="DigitalApex Logo"
                                width={180}
                                height={50}
                                className="h-10 w-auto mb-4"
                            />
                            <p className="text-gray-400 mb-4">
                                Data-driven digital marketing solutions that deliver measurable results.
                            </p>
                            <div className="flex space-x-4">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        className="text-gray-400 hover:text-white transition-colors"
                                        aria-label={social.name}
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-4">Services</h3>
                            <ul className="space-y-2">
                                <li><a href="/services#seo" className="text-gray-400 hover:text-white transition-colors">SEO Services</a></li>
                                <li><a href="/services#ppc" className="text-gray-400 hover:text-white transition-colors">PPC Advertising</a></li>
                                <li><a href="/services#social" className="text-gray-400 hover:text-white transition-colors">Social Media Marketing</a></li>
                                <li><a href="/services#content" className="text-gray-400 hover:text-white transition-colors">Content Marketing</a></li>
                                <li><a href="/services#web" className="text-gray-400 hover:text-white transition-colors">Web Design</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-4">Company</h3>
                            <ul className="space-y-2">
                                <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                                <li><a href="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                                <li><a href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                                <li><a href="/case-studies" className="text-gray-400 hover:text-white transition-colors">Case Studies</a></li>
                                <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-4">Contact</h3>
                            <address className="not-italic text-gray-400 space-y-2">
                                <p>123 Marketing Ave, Suite 500</p>
                                <p>San Francisco, CA 94107</p>
                                <p><a href="tel:+18005551234" className="hover:text-white transition-colors">(800) 555-1234</a></p>
                                <p><a href="mailto:hello@digitalapex.com" className="hover:text-white transition-colors">hello@digitalapex.com</a></p>
                            </address>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-500 text-sm mb-4 md:mb-0">
                            © {new Date().getFullYear()} DigitalApex. All rights reserved.
                        </p>
                        <div className="flex space-x-6">
                            <a href="/privacy" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
                            <a href="/terms" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
                            <a href="/cookies" className="text-gray-500 hover:text-white text-sm transition-colors">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

// Data
const trustBadges = [
    { image: "/images/google.png", alt: "Google Partner" },
    { image: "/images/hubspot.png", alt: "HubSpot Certified" },
    { image: "/images/forbes.png", alt: "Forbes Agency Council" },
    { image: "/images/Clutch.png", alt: "Clutch Top Agency" },
    { image: "/images/Inc5000.png", alt: "Inc 5000" }
];

const results = [
    {
        icon: ChartBarIcon,
        title: "Increased Traffic",
        description: "Average organic traffic growth for our clients",
        value: "287%",
        bgColor: "bg-teal-500"
    },
    {
        icon: BoltIcon,
        title: "Higher Conversions",
        description: "Average increase in conversion rates",
        value: "156%",
        bgColor: "bg-blue-500"
    },
    {
        icon: ArrowPathIcon,
        title: "ROI Delivered",
        description: "Average return on marketing investment",
        value: "5.2x",
        bgColor: "bg-cyan-400"
    }
];

const services = [
    {
        id: "seo",
        icon: ChartBarIcon,
        title: "SEO Optimization",
        description: "Improve your search rankings and organic traffic with our proven SEO strategies.",
        features: [
            "Keyword research & strategy",
            "On-page optimization",
            "Technical SEO audits",
            "Content strategy",
            "Local SEO"
        ],
        bgColor: "bg-teal-500"
    },
    {
        id: "ppc",
        icon: BoltIcon,
        title: "PPC Advertising",
        description: "Drive targeted traffic immediately with our pay-per-click management services.",
        features: [
            "Google Ads management",
            "Facebook/Instagram ads",
            "LinkedIn advertising",
            "Conversion tracking",
            "A/B testing"
        ],
        bgColor: "bg-blue-500"
    },
    {
        id: "social",
        icon: UserGroupIcon,
        title: "Social Media Marketing",
        description: "Build your brand and engage your audience across social platforms.",
        features: [
            "Content creation",
            "Community management",
            "Influencer partnerships",
            "Paid social campaigns",
            "Performance analytics"
        ],
        bgColor: "bg-cyan-400"
    }
];

const processSteps = [
    {
        icon: ShieldCheckIcon,
        title: "Discovery & Strategy",
        description: "We analyze your business, competitors, and goals to create a custom plan"
    },
    {
        icon: SparklesIcon,
        title: "Implementation",
        description: "Our experts execute the strategy with precision and attention to detail"
    },
    {
        icon: ArrowPathIcon,
        title: "Optimization",
        description: "Continuous improvement based on performance data and testing"
    }
];

const testimonials = [
    {
        name: "Priya Sharma",
        position: "CEO, TechNest India",
        quote: "DigitalApex transformed our lead generation - we saw 3x more qualified leads in just 6 months. Their ROI-focused strategies are a game-changer for Indian businesses.",
        rating: 5,
        avatar: "/images/Priya Sharma.png"
    },
    {
        name: "Rahul Kapoor",
        position: "Marketing Head, UrbanDesi Retail",
        quote: "Our organic traffic grew by 300% with their hyper-local SEO tactics. They understand the Indian market like no other agency!",
        rating: 5,
        avatar: "/images/Rahul Kapoor.png"
    },
    {
        name: "Ananya Patel",
        position: "Founder, SareeStory",
        quote: "From 5K to 1M+ followers with actual sales conversions! Their culturally tailored social campaigns made our brand viral in Tier 2/3 cities.",
        rating: 4,
        avatar: "/images/Ananya Patel.png"
    }
];
const socialLinks = [
    {
        name: "Facebook",
        url: "#",
        icon: FacebookIcon
    },
    {
        name: "Twitter",
        url: "#",
        icon: TwitterIcon
    },
    {
        name: "LinkedIn",
        url: "#",
        icon: LinkedInIcon
    },
    {
        name: "Instagram",
        url: "#",
        icon: InstagramIcon
    },
    {
        name: "YouTube",
        url: "#",
        icon: YouTubeIcon
    }
];

// Social Icons Components
function FacebookIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
        </svg>
    );
}

function TwitterIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 24 24">
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
    );
}

function LinkedInIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
        </svg>
    );
}

function InstagramIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
        </svg>
    );
}

function YouTubeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
        </svg>
    );
}