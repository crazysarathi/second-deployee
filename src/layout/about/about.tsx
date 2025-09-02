import Head from 'next/head';
import Image from 'next/image';
import {
    CheckIcon,
    ChartBarIcon,
    BoltIcon,
    UserGroupIcon,
    BuildingOfficeIcon,
    GlobeAmericasIcon,
    HeartIcon
} from '@heroicons/react/24/outline';
import { JSX, SVGProps } from 'react';

export default function About() {
    return (
        <div className="overflow-x-hidden">
            <Head>
                <title>About PK Digital | Our Story & Mission</title>
                <meta name="description" content="Learn about PK Digital - our mission, values, and the team behind your digital success" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            {/* Hero Section */}
            <section className="pt-24 pb-16 md:pt-32 md:pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-r from-teal-500 via-blue-500 to-cyan-400">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                            About <span className="text-yellow-300">PK Digital</span>
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-8 sm:mb-10 px-4 sm:px-0">
                            Pioneering digital marketing solutions since 2024 with a passion for measurable results.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                        <div className="lg:w-1/2 w-full">
                            <div className="relative aspect-video lg:aspect-auto lg:h-[400px] rounded-xl shadow-lg overflow-hidden">
                                <Image
                                    src="/images/ourstory.png"
                                    alt="Our team working together"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">Our <span className="text-teal-500">Story</span></h2>
                            <p className="text-gray-600 mb-4 text-base sm:text-lg">
                                Founded in 2024 by digital marketing veterans, PK Digital began as a small team with a big vision: to deliver transparent, results-driven marketing services that actually work.
                            </p>
                            <p className="text-gray-600 mb-6 text-base sm:text-lg">
                                What started as a three-person operation has grown into a full-service digital marketing agency with over 50 specialists across 4 countries. Despite our growth, we've maintained our commitment to personalized service and measurable ROI.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <div className="text-xl sm:text-2xl font-bold text-teal-600 mb-1">2024</div>
                                    <div className="text-gray-600 text-sm sm:text-base">Year Founded</div>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <div className="text-xl sm:text-2xl font-bold text-blue-500 mb-1">50+</div>
                                    <div className="text-gray-600 text-sm sm:text-base">Team Members</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Values */}
            <section className="py-16 sm:py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">Our <span className="text-teal-500">Mission</span> & Values</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg px-4 sm:px-0">
                            Guiding principles that shape every strategy we create
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {values.map((value, index) => (
                            <div key={index} className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full ${value.bgColor} flex items-center justify-center mb-4 sm:mb-6 mx-auto`}>
                                    <value.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3 text-center">{value.title}</h3>
                                <p className="text-gray-600 text-sm sm:text-base text-center">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">Meet The <span className="text-teal-500">Leadership</span></h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg px-4 sm:px-0">
                            The visionary minds driving PK Digital forward
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                                <div className="aspect-[4/3] sm:aspect-[3/4] lg:aspect-[4/3] relative">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <div className="p-5 sm:p-6">
                                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                                    <p className="text-teal-500 font-medium mb-2 sm:mb-3 text-sm sm:text-base">{member.position}</p>
                                    <p className="text-gray-600 mb-4 text-sm sm:text-base">{member.bio}</p>
                                    <div className="flex space-x-3 sm:space-x-4">
                                        {member.socialLinks.map((social, i) => (
                                            <a
                                                key={i}
                                                href={social.url}
                                                className="text-gray-500 hover:text-teal-500 transition-colors duration-300"
                                                aria-label={`${member.name}'s ${social.name}`}
                                            >
                                                <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 sm:py-20 bg-gradient-to-r from-teal-500 to-cyan-500">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">Why Choose <span className="text-yellow-300">PK Digital</span>?</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-10 sm:mt-12">
                        {reasons.map((reason, index) => (
                            <div key={index} className="bg-white bg-opacity-10 p-6 sm:p-8 rounded-xl backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 bg-blue-100 bg-opacity-20 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4">
                                        <reason.icon className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg sm:text-xl font-bold text-black mb-1 sm:mb-2">{reason.title}</h3>
                                        <p className="text-blue-300 text-sm sm:text-base">{reason.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

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

// Values Data
const values = [
    {
        icon: ChartBarIcon,
        title: "Data-Driven",
        description: "We base every decision on measurable results and continuous optimization.",
        bgColor: "bg-teal-500"
    },
    {
        icon: BoltIcon,
        title: "Innovation",
        description: "Staying ahead of digital trends to give our clients a competitive edge.",
        bgColor: "bg-blue-500"
    },
    {
        icon: HeartIcon,
        title: "Client Success",
        description: "Your growth is our success. We're invested in your business outcomes.",
        bgColor: "bg-cyan-400"
    }
];


// Indian Team Data
const teamMembers = [
    {
        name: "Rahul Sharma",
        position: "CEO & Founder",
        bio: "Digital marketing veteran with 12+ years experience scaling Indian businesses online. Recognized as Top 40 Under 40 by Business Today.",
        image: "/images/rahul.png",
        socialLinks: [
            { name: "Twitter", icon: TwitterIcon, url: "#" },
            { name: "LinkedIn", icon: LinkedInIcon, url: "#" }
        ],
        expertise: ["Indian Market Strategies", "Startup Growth", "VC Funding"]
    },
    {
        name: "Sorav Jain",
        position: "Digital Marketing Guru & Entrepreneur",
        bio: "Asia's first certified digital marketer with 15+ years experience. Mentor to 50,000+ students through Digital Scholar. Regular columnist for Economic Times and Forbes.",
        image: "/images/sorav.png",
        socialLinks: [
            { name: "Instagram", icon: InstagramIcon, url: "#" },
            { name: "LinkedIn", icon: LinkedInIcon, url: "#" }
        ],
        expertise: [
            "Personal Branding",
            "Indian Market Strategies",
            "Social Media Mastery",
            "Influencer Marketing"
        ],
    },
    {
        name: "Neil Patel",
        position: "SEO & Growth Marketing Legend",
        bio: "Indian-origin marketer named among Top 10 Entrepreneurs by Fortune. Advisor to Amazon, Microsoft, and Google. Reaches 30M+ marketers monthly through his blogs.",
        image: "/images/neil.png",
        socialLinks: [
            { name: "GitHub", icon: GitHubIcon, url: "#" },
            { name: "LinkedIn", icon: LinkedInIcon, url: "#" }
        ],
        expertise: [
            "SEO Mastery",
            "Content Marketing",
            "Conversion Optimization",
            "Data-Driven Growth"
        ],
    }
];

// Additional Indian social icons
function GitHubIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .27.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
    );
}

function BehanceIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.109 2.129h-8.918c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
        </svg>
    );
}

// Reasons Data
const reasons = [
    {
        icon: BuildingOfficeIcon,
        title: "Industry Experience",
        description: "Over a decade serving clients across 20+ industries with proven strategies."
    },
    {
        icon: GlobeAmericasIcon,
        title: "Global Perspective",
        description: "International team brings diverse insights to your marketing strategy."
    },
    {
        icon: ChartBarIcon,
        title: "Transparent Reporting",
        description: "Real-time dashboards show exactly how your campaigns are performing."
    },
    {
        icon: UserGroupIcon,
        title: "Dedicated Team",
        description: "You'll work directly with senior specialists, not junior account managers."
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
function TwitterIcon({ className = "w-5 h-5" }) {
    return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
    );
}

function LinkedInIcon({ className = "w-5 h-5" }) {
    return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
    );
}

function FacebookIcon({ className = "w-5 h-5" }) {
    return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
        </svg>
    );
}

function InstagramIcon({ className = "w-5 h-5" }) {
    return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
        </svg>
    );
}

function YouTubeIcon({ className = "w-5 h-5" }) {
    return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
        </svg>
    );
}