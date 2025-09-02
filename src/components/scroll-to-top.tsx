// "use client";

// import { ArrowUpIcon } from "@heroicons/react/24/outline";
// import { cn } from "@heroui/react";
// import { useEffect, useState } from "react";


// export function ScrollToTop() {
// const [isVisible, setIsVisible] = useState(false);

// const toggleVisibility = () => {
//     if (window.pageYOffset > 300) {
//         setIsVisible(true);
//     } else {
//         setIsVisible(false);
//     }
// };

// const scrollToTop = () => {
//     window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//     });
// };

// useEffect(() => {
//     window.addEventListener("scroll", toggleVisibility);
//     return () => window.removeEventListener("scroll", toggleVisibility);
// }, []);

//     return (
//         <button
//             onClick={scrollToTop}
//             className={cn(
//                 "fixed bottom-6 right-6 z-50 cursor-pointer",
//                 "h-12 w-12 rounded-full p-2",
//                 "bg-black/80 backdrop-blur-sm text-white",
//                 "border border-white/10 shadow-lg",
//                 "transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
//                 "hover:bg-black hover:scale-105 active:scale-95",
//                 "flex items-center justify-center",
//                 "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
//                 isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
//             )}
//             aria-label="Scroll to top"
//         >
//             <div className="relative">
//                 <ArrowUpIcon className="h-5 w-5" />
//             </div>
//         </button>
//     );
// }



'use client';

import { cn } from '@heroui/react';
import { useEffect, useState } from 'react';
import Lottie from 'react-lottie-player';

const ScrollToTop = () => {
    const [animationData, setAnimationData] = useState<any>(null);
    // const [scrolled, setScrolled] = useState(false);
    // const phoneNumber = "1234567890";
    // const defaultMessage = "Hello, I have a question";

    // useEffect(() => {
    //     const handleScroll = () => {
    //         setScrolled(window.scrollY > 100);
    //     };
    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, []);

    // const openWhatsApp = () => {
    //     const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
    //     window.open(url, "_blank");
    // };

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);


    useEffect(() => {
        fetch('animations/scroll.json')
            .then(res => res.json())
            .then(data => setAnimationData(data));
    }, []);

    return (
        <div
            onClick={scrollToTop}
            className={cn(
                "fixed bottom-3 right-6 z-50 cursor-pointer",
                "h-10 w-10 rounded-full p-0",
                "bg-[#2386ff] backdrop-blur-sm text-white",
                "border border-white/10 shadow-lg",
                "transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
                "hover:bg-[#2386ffb7] hover:scale-105 active:scale-95",
                "flex items-center justify-center",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0" // Moves up when scrolled
            )}
            aria-label="Chat on WhatsApp"
        >
            {animationData && (
                <Lottie
                    loop
                    animationData={animationData}
                    play
                />
            )}
        </div>
    );
};

export default ScrollToTop;
