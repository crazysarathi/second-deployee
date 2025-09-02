
"use client"

import Head from 'next/head';
import React, { SVGProps, useState } from 'react';
import {
    MapPinIcon,
    PhoneIcon,
    EnvelopeIcon,
    ClockIcon,
    CheckCircleIcon,
    XCircleIcon
} from '@heroicons/react/24/outline';
import { Image } from '@heroui/react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });
    const [submissionState, setSubmissionState] = useState<null | 'success' | 'error'>(null);

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setSubmissionState(null);

        try {
            // Replace with your actual form submission logic
            await new Promise(resolve => setTimeout(resolve, 1000));
            setSubmissionState('success');
            setFormData({
                name: '',
                email: '',
                phone: '',
                service: '',
                message: ''
            });
        } catch (error) {
            setSubmissionState('error');
        }
    };

    return (
        <div className="min-h-screen">
            <Head>
                <title>Contact Us | DigitalApex - Get in Touch</title>
                <meta name="description" content="Reach out to our digital marketing experts for a free consultation" />
            </Head>

            {/* Hero Section */}
            <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-r from-teal-500 via-blue-500 to-cyan-400">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Contact <span className="text-yellow-300">DigitalApex</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 mb-10">
                            Let's discuss how we can help grow your business
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Contact Info */}
                        <div className="lg:w-1/3">
                            <h2 className="text-3xl font-bold text-gray-800 mb-8">Get in Touch</h2>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="bg-teal-100 p-3 rounded-lg mr-4">
                                        <MapPinIcon className="w-6 h-6 text-teal-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800 mb-1">Our Office</h3>
                                        <p className="text-gray-600">123 Marketing Ave, Suite 500<br />San Francisco, CA 94107</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                                        <PhoneIcon className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800 mb-1">Phone</h3>
                                        <p className="text-gray-600">
                                            <a href="tel:+18005551234" className="hover:text-teal-500 transition-colors">(800) 555-1234</a><br />
                                            Mon-Fri: 9am-6pm PST
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-cyan-100 p-3 rounded-lg mr-4">
                                        <EnvelopeIcon className="w-6 h-6 text-cyan-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800 mb-1">Email</h3>
                                        <p className="text-gray-600">
                                            <a href="mailto:hello@digitalapex.com" className="hover:text-teal-500 transition-colors">hello@digitalapex.com</a><br />
                                            Response within 24 hours
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-purple-100 p-3 rounded-lg mr-4">
                                        <ClockIcon className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800 mb-1">Hours</h3>
                                        <p className="text-gray-600">
                                            Monday-Friday: 9am-6pm<br />
                                            Saturday: 10am-2pm<br />
                                            Sunday: Closed
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10">
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">Follow Us</h3>
                                <div className="flex space-x-4">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.url}
                                            className="bg-gray-100 hover:bg-gray-200 p-3 rounded-lg transition-colors"
                                            aria-label={social.name}
                                        >
                                            <social.icon className="w-5 h-5 text-gray-700" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:w-2/3">
                            <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
                                <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>

                                {submissionState === 'success' && (
                                    <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg flex items-start">
                                        <CheckCircleIcon className="w-5 h-5 mt-0.5 mr-2 flex-shrink-0" />
                                        <div>
                                            <p className="font-medium">Thank you for your message!</p>
                                            <p className="text-sm">We'll get back to you within 24 hours.</p>
                                        </div>
                                    </div>
                                )}

                                {submissionState === 'error' && (
                                    <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg flex items-start">
                                        <XCircleIcon className="w-5 h-5 mt-0.5 mr-2 flex-shrink-0" />
                                        <div>
                                            <p className="font-medium">Something went wrong!</p>
                                            <p className="text-sm">Please try again or contact us directly.</p>
                                        </div>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit}>
                                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Interest</label>
                                            <select
                                                id="service"
                                                name="service"
                                                value={formData.service}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
                                            >
                                                <option value="">Select a service</option>
                                                <option value="seo">SEO Services</option>
                                                <option value="ppc">PPC Advertising</option>
                                                <option value="social">Social Media Marketing</option>
                                                <option value="web">Web Development</option>
                                                <option value="strategy">Digital Strategy</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message*</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={5}
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full px-6 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold rounded-lg hover:from-teal-600 hover:to-cyan-600 transition-all shadow-md"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>

                            {/* Map */}
                            <div className="mt-10 rounded-xl overflow-hidden shadow-md">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.665062583324!2d-122.41941592422823!3d37.77492997187468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1712345678901!5m2!1sen!2sus"
                                    width="100%"
                                    height="400"
                                    style={{ border: 0 }}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="DigitalApex Location"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="md:col-span-2 lg:col-span-1">
                            <div className="flex items-center mb-4">
                                <Image
                                    src="/images/logo.png"
                                    alt="PK Digital Logo"
                                    width={160}
                                    height={45}
                                    className="h-8 sm:h-10 w-auto"
                                />
                            </div>
                            <p className="text-gray-400 mb-4 text-sm sm:text-base">
                                Data-driven digital marketing solutions that deliver measurable results.
                            </p>
                            <div className="flex space-x-3 sm:space-x-4">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        className="text-gray-400 hover:text-white transition-colors duration-300"
                                        aria-label={social.name}
                                    >
                                        <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Services</h3>
                            <ul className="space-y-2">
                                <li><a href="/services#seo" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm sm:text-base">SEO Services</a></li>
                                <li><a href="/services#ppc" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm sm:text-base">PPC Advertising</a></li>
                                <li><a href="/services#social" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm sm:text-base">Social Media Marketing</a></li>
                                <li><a href="/services#content" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm sm:text-base">Content Marketing</a></li>
                                <li><a href="/services#web" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm sm:text-base">Web Design</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Company</h3>
                            <ul className="space-y-2">
                                <li><a href="/about" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm sm:text-base">About Us</a></li>
                                <li><a href="/careers" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm sm:text-base">Careers</a></li>
                                <li><a href="/blog" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm sm:text-base">Blog</a></li>
                                <li><a href="/case-studies" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm sm:text-base">Case Studies</a></li>
                                <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm sm:text-base">Contact</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact</h3>
                            <address className="not-italic text-gray-400 space-y-2 text-sm sm:text-base">
                                <p>123 Marketing Ave, Suite 500</p>
                                <p>San Francisco, CA 94107</p>
                                <p><a href="tel:+18005551234" className="hover:text-white transition-colors duration-300">(800) 555-1234</a></p>
                                <p><a href="mailto:hello@digitalapex.com" className="hover:text-white transition-colors duration-300">hello@digitalapex.com</a></p>
                            </address>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-10 sm:mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-500 text-xs sm:text-sm mb-4 md:mb-0">
                            © {new Date().getFullYear()} PK Digital. All rights reserved.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                            <a href="/privacy" className="text-gray-500 hover:text-white text-xs sm:text-sm transition-colors duration-300">Privacy Policy</a>
                            <a href="/terms" className="text-gray-500 hover:text-white text-xs sm:text-sm transition-colors duration-300">Terms of Service</a>
                            <a href="/cookies" className="text-gray-500 hover:text-white text-xs sm:text-sm transition-colors duration-300">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

// Social Links Data
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
function FacebookIcon(props: React. SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
        </svg>
    );
}

function TwitterIcon(props: React. SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 24 24">
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
    );
}

function LinkedInIcon(props: React. SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
        </svg>
    );
}

function InstagramIcon(props: React. SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
        </svg>
    );
}

function YouTubeIcon(props: React. SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
        </svg>
    );
}


