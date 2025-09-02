import Head from 'next/head';
import Image from 'next/image';
import {
    CheckIcon,
    ChartBarIcon,
    BoltIcon,
    UserGroupIcon,
    DevicePhoneMobileIcon,
    ShoppingCartIcon,
    EnvelopeIcon,
    FilmIcon,
    MegaphoneIcon,
    PuzzlePieceIcon
} from '@heroicons/react/24/outline';
import { JSX, SVGProps } from 'react';

export default function Service() {
    return (
        <div>
            <Head>
                <title>Our Services | DigitalApex - Comprehensive Digital Marketing Solutions</title>
                <meta name="description" content="Explore our full range of digital marketing services designed to grow your business online" />
            </Head>

            {/* Hero Section */}
            <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-r from-teal-500 via-blue-500 to-cyan-400">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Our <span className="text-yellow-300">Services</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 mb-10">
                            End-to-end digital marketing solutions tailored to your business goals
                        </p>
                        <a
                            href="#contact"
                            className="inline-block px-8 py-4 bg-white text-teal-600 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg flex items-center justify-center mx-auto"
                        >
                            Get Free Audit <ArrowRightIcon className="w-5 h-5 ml-2" />
                        </a>
                    </div>
                </div>
            </section>

            {/* Services Overview */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Comprehensive <span className="text-teal-500">Digital Solutions</span></h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            We combine strategy, creativity, and technology to deliver measurable results
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {serviceCategories.map((category, index) => (
                            <div key={index} className="group bg-gray-50 p-8 rounded-xl hover:bg-gradient-to-r from-teal-500 to-cyan-500 transition-all duration-300 hover:shadow-xl">
                                <div className={`w-14 h-14 rounded-full ${category.bgColor} group-hover:bg-white group-hover:text-teal-500 flex items-center justify-center mb-6`}>
                                    <category.icon className="w-6 h-6 text-white group-hover:text-teal-500" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 group-hover:text-white mb-3">{category.title}</h3>
                                <p className="text-gray-600 group-hover:text-blue-100 mb-4">{category.description}</p>
                                <ul className="space-y-2">
                                    {category.services.slice(0, 3).map((service, i) => (
                                        <li key={i} className="flex items-center">
                                            <CheckIcon className="w-5 h-5 text-teal-500 group-hover:text-white mr-2" />
                                            <span className="text-gray-700 group-hover:text-white">{service}</span>
                                        </li>
                                    ))}
                                </ul>
                                {category.services.length > 3 && (
                                    <div className="mt-4 text-sm text-teal-500 group-hover:text-white font-medium">
                                        + {category.services.length - 3} more services
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Services */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Featured <span className="text-teal-500">Services</span></h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Our most popular solutions that deliver exceptional ROI
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {featuredServices.map((service, index) => (
                            <div key={index} className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                                <div className={`w-16 h-16 rounded-lg ${service.bgColor} flex-shrink-0 flex items-center justify-center`}>
                                    <service.icon className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                                    <p className="text-gray-600 mb-4">{service.description}</p>
                                    <div className="grid grid-cols-2 gap-2">
                                        {service.stats.map((stat, i) => (
                                            <div key={i} className="bg-gray-50 p-3 rounded-lg">
                                                <div className="text-lg font-bold text-teal-600">{stat.value}</div>
                                                <div className="text-xs text-gray-500">{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
           <section className="relative py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                    <div className="absolute top-20 left-10 w-64 h-64 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                    <div className="absolute top-60 right-20 w-64 h-64 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                    <div className="absolute bottom-20 left-1/2 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center mb-20">
                        <span className="inline-block px-3 py-1 text-sm font-medium text-teal-600 bg-teal-100 rounded-full mb-4 animate-fade-in-up">
                            How We Work
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up animation-delay-200">
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-600">Process</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
                            A proven methodology that delivers exceptional results through collaboration and innovation
                        </p>
                    </div>

                    <div className="relative">
                        <div className="hidden lg:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-teal-400 to-cyan-500 transform -translate-x-1/2 animate-draw-line"></div>

                        <div className="space-y-16 lg:space-y-0">
                            {processSteps.map((step, index) => (
                                <div
                                    key={index}
                                    className={`flex flex-col lg:flex-row ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-16 group`}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    <div className="lg:w-1/2 flex justify-center">
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full blur-md opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
                                            <div className="relative w-24 h-24 rounded-full flex items-center justify-center text-white text-3xl font-bold bg-gradient-to-r from-teal-500 to-cyan-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                                {index + 1}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="lg:w-1/2">
                                        <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                                            <div className="flex items-center mb-4">
                                                <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                                                <div className="ml-auto pl-4">
                                                    <svg className="w-8 h-8 text-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <p className="text-gray-600 mb-6">{step.description}</p>
                                            <ul className="space-y-3">
                                                {step.details.map((detail, i) => (
                                                    <li key={i} className="flex items-start hover:bg-gray-50 px-2 py-1 rounded-lg transition-colors duration-200">
                                                        <div className="flex-shrink-0 mt-1">
                                                            <div className="flex items-center justify-center h-5 w-5 rounded-full bg-teal-100 text-teal-600">
                                                                <CheckIcon className="h-3 w-3" />
                                                            </div>
                                                        </div>
                                                        <span className="ml-3 text-gray-700">{detail}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
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

// Service Categories Data
const serviceCategories = [
    {
        icon: ChartBarIcon,
        title: "Search Marketing",
        description: "Dominate search results and drive qualified traffic",
        bgColor: "bg-teal-500",
        services: [
            "SEO Optimization",
            "Local SEO",
            "Technical SEO",
            "E-commerce SEO",
            "Enterprise SEO",
            "Content Strategy"
        ]
    },
    {
        icon: BoltIcon,
        title: "Paid Advertising",
        description: "Precision-targeted campaigns that convert",
        bgColor: "bg-blue-500",
        services: [
            "Google Ads",
            "Facebook/Instagram Ads",
            "LinkedIn Advertising",
            "YouTube Ads",
            "Programmatic Advertising",
            "Retargeting"
        ]
    },
    {
        icon: UserGroupIcon,
        title: "Social Media",
        description: "Build authentic connections with your audience",
        bgColor: "bg-cyan-400",
        services: [
            "Social Media Management",
            "Content Creation",
            "Community Management",
            "Influencer Marketing",
            "Social Advertising",
            "Reputation Management"
        ]
    },
    {
        icon: DevicePhoneMobileIcon,
        title: "Web Solutions",
        description: "High-performing websites that convert visitors",
        bgColor: "bg-purple-500",
        services: [
            "Website Design",
            "UX/UI Optimization",
            "Conversion Rate Optimization",
            "Landing Pages",
            "WordPress Development",
            "Shopify Development"
        ]
    },
    {
        icon: EnvelopeIcon,
        title: "Email Marketing",
        description: "Turn subscribers into loyal customers",
        bgColor: "bg-red-400",
        services: [
            "Email Strategy",
            "Automation Flows",
            "List Growth",
            "Template Design",
            "A/B Testing",
            "Performance Analytics"
        ]
    },
    {
        icon: FilmIcon,
        title: "Content Creation",
        description: "Compelling content that engages and converts",
        bgColor: "bg-yellow-400",
        services: [
            "Blog Content",
            "Video Production",
            "Infographics",
            "Case Studies",
            "White Papers",
            "Interactive Content"
        ]
    }
];

// Featured Services Data
const featuredServices = [
    {
        icon: MegaphoneIcon,
        title: "Growth Marketing",
        description: "Full-funnel marketing strategies that scale with your business",
        bgColor: "bg-teal-500",
        stats: [
            { value: "3-5X", label: "ROI Increase" },
            { value: "360°", label: "Approach" },
            { value: "24/7", label: "Monitoring" },
            { value: "90%", label: "Client Retention" }
        ]
    },
    {
        icon: PuzzlePieceIcon,
        title: "Marketing Automation",
        description: "Streamline your marketing with intelligent automation workflows",
        bgColor: "bg-blue-500",
        stats: [
            { value: "40%", label: "Time Saved" },
            { value: "3X", label: "More Leads" },
            { value: "65%", label: "Open Rates" },
            { value: "500%", label: "ROI Potential" }
        ]
    }
];

// Process Steps Data
const processSteps = [
    {
        title: "Discovery & Strategy",
        description: "We begin by deeply understanding your business, competitors, and goals",
        details: [
            "Comprehensive business audit",
            "Market & competitor analysis",
            "Goal setting & KPI definition",
            "Custom strategy development"
        ]
    },
    {
        title: "Implementation",
        description: "Our experts execute the strategy with precision and attention to detail",
        details: [
            "Campaign setup & optimization",
            "Content creation & publishing",
            "Technical implementations",
            "Quality assurance testing"
        ]
    },
    {
        title: "Optimization",
        description: "Continuous improvement based on data and performance",
        details: [
            "Weekly performance reviews",
            "A/B testing & experimentation",
            "Conversion rate optimization",
            "Algorithm updates monitoring"
        ]
    },
    {
        title: "Reporting & Scaling",
        description: "Transparent reporting and strategic scaling for growth",
        details: [
            "Monthly performance reports",
            "Executive summaries",
            "Budget reallocation",
            "Growth opportunity identification"
        ]
    }
];

// ArrowRightIcon component
const ArrowRightIcon = ({ className = "w-5 h-5 ml-2" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
);


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