'use client';

import { cn } from '@heroui/react';
import { useEffect, useState } from 'react';
import Lottie from 'react-lottie-player';

const WhatsappLottie = () => {
    const [animationData, setAnimationData] = useState<any>(null);
    const [scrolled, setScrolled] = useState(false);
    const phoneNumber = "1234567890";
    const defaultMessage = "Hello, I have a question";

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const openWhatsApp = () => {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
        window.open(url, "_blank");
    };

    useEffect(() => {
        fetch('animations/whatsapp.json')
            .then(res => res.json())
            .then(data => setAnimationData(data));
    }, []);

    return (
        <div
            onClick={openWhatsApp}
            className={cn(
                "fixed right-1 z-40 cursor-pointer",
                "h-20 w-20 rounded-full p-2",
                "transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
                "hover:bg-[#25d366] hover:scale-105 active:scale-95",
                "flex items-center justify-center",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
                scrolled ? "bottom-14" : "bottom-2" // Moves up when scrolled
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

export default WhatsappLottie;
