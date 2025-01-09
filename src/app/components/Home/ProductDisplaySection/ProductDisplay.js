"use client";
import React, { useState, useEffect, useRef } from "react";

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function FeatureList({ features, color = "blue" }) {
    const diamondColors = {
        blue: "text-blue-600",
        purple: "text-purple-600",
        yellow: "text-yellow-500",
        orange: "text-orange-500",
        green: "text-green-500",
    };

    return (
        <div className="space-y-8 py-4 h-full md:flex flex-col justify-evenly">
            {features.map((feature, index) => (
                <div key={index} className="flex gap-3">
                    <div className={`${diamondColors[color]} md:text-3xl text-xl flex-shrink-0 mt-1`}>
                        ◆
                    </div>
                    <p className="text-black font-medium leading-tight text-md md:text-xl">
                        {feature}
                    </p>
                </div>
            ))}
        </div>
    );
}

function Section({ title, description, features, color, imageSrc }) {
    const bgColors = {
        blue: "bg-blue-600",
        purple: "bg-purple-600",
        yellow: "bg-yellow-500",
        orange: "bg-orange-500",
        green: "bg-green-500",
    };

    return (
        <div className="min-h-screen h-full w-full flex items-center">
            <div className="w-full h-full">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center md:hidden py-5 px-10">
                    A Seamless Creative Workflow Powered by AI
                </h1>
                {/* Mobile Layout */}
                <div
                    className="flex h-full flex-col md:hidden px-4 space-y-4 relative object-cover"
                    style={{
                        backgroundImage: `url(${imageSrc})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                    }}
                >
                    <div className="absolute inset-0 bg-black backdrop-blur-sm -z-10" />
                    <div className="bg-white rounded-[32px] p-6 space-y-4">
                        <div className={`${bgColors[color]} rounded-full px-6 py-3 mx-auto max-w-[280px]`}>
                            <h2 className="text-white text-lg text-center font-semibold">{title}</h2>
                        </div>
                        <p className="text-gray-600 text-base text-center leading-relaxed">{description}</p>
                        <FeatureList features={features} color={color} />
                    </div>
                </div>
                {/* Desktop Layout */}
                <div className="hidden md:block h-full">
                    <h1 className="text-4xl font-bold text-white text-center py-10">
                        A Seamless Creative Workflow Powered by AI
                    </h1>
                    <div className="grid md:grid-cols-4 pb-40 pl-20 h-full">
                        <div className="md:col-span-1 space-y-6">
                            <div className={`${bgColors[color]} rounded-l-full px-6 py-3 border-none`}>
                                <h2 className="text-white text-2xl font-medium text-center">{title}</h2>
                            </div>
                            <p className="text-gray-400 font-semibold text-xl tracking-tighter">{description}</p>
                        </div>
                        <div className="md:col-span-3 bg-white grid grid-cols-2 border-none">
                            <div className="h-full flex items-center">
                                <FeatureList features={features} color={color} />
                            </div>
                            <div className="h-full">
                                <img src={imageSrc || "/placeholder.svg?height=320&width=400"} alt={title} className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function ProductDisplaySection() {
    const containerRef = useRef(null);
    const scrollRef = useRef(null);
    const [currentSection, setCurrentSection] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const lastScrollTime = useRef(Date.now());
    const scrollTimeout = useRef(null);

    const sections = [
    {
      title: "Automate Follower Engagement",
      description:
        "Artists often struggle to keep up with interactions from new followers. Sulio AI automatically sends personalized greetings and updates based on follower behavior, so you can stay connected without spending too much time.",
      features: [
        "Automatically send personalized greetings and updates to your followers.",
        "Boost engagement by up to 85%, even when you're not online.",
        "Save time by skipping manual replies and focusing on your art.",
      ],
      color: "blue",
      imageSrc: "/images/section21.gif",
    },
    {
      title: "Smart Art Recommendations",
      description:
        "Not sure which buyer will be interested in your work? Sulio AI recommends the right artworks based on buyer preferences, helping you sell faster and avoid unsold pieces.",
      features: [
        "AI analyzes buyer preferences and recommends artworks that match their taste.",
        "Speed up sales by 20% by getting your art in front of the right buyers.",
        "Connect your art with the right audience, increasing your chances of making sales.",
      ],
      color: "purple",
      imageSrc: "/images/section22.gif",
    },
    {
      title: "Transaction Tracking",
      description:
        "Managing sales and commissions can be overwhelming for artists. Sulio AI simplifies the process by keeping all your transactions and inquiries organized and visible in one place.",
      features: [
        "Track all your sales and commissions in a single platform.",
        "Get 100% transparency into your sales and payment status.",
        "No more worrying about missed payments or lost commission details.",
      ],
      color: "yellow",
      imageSrc: "/images/section23.gif",
    },
    {
      title: "Fraud Detection",
      description:
        "Dealing with fraud can be stressful, especially when your buyers are from different regions. Sulio AI automatically detects and blocks suspicious activities, protecting you from fraud and scams.",
      features: [
        "AI automatically detects and blocks potential fraud attempts.",
        "Reduce the risk of fraud by 95%, allowing you to interact with real buyers confidently.",
        "Spend less time handling scams and more time focusing on genuine buyers.",
      ],
      color: "orange",
      imageSrc: "/images/section24.gif",
    },
    {
      title: "Streamlined Client Communication",
      description:
        "Handling multiple inquiries, after-sales support, and client communication can eat up valuable creative time. Sulio AI helps you manage all communications in one place, so you're not constantly answering the same questions.",
      features: [
        "Manage client inquiries, sales questions, and after-sales support all in one platform.",
        "Save 25% of your time by automating repetitive client responses.",
        "Provide a smooth and professional experience for your clients, improving customer satisfaction.",
      ],
      color: "green",
      imageSrc: "/images/section25.gif",
    },
  ];

  const handleSectionChange = (newSection) => {
    if (newSection === currentSection) return;
    setIsTransitioning(true);
    setCurrentSection(newSection);
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

    window.scrollTo({ top: newSection * window.innerHeight, behavior: 'smooth' });

    scrollTimeout.current = setTimeout(() => {
        setIsTransitioning(false);
    }, 100);
};

useEffect(() => {
    const handleScroll = () => {
        const now = Date.now();
        if (now - lastScrollTime.current < 50) return;
        const scrollPosition = window.scrollY;
        const viewportHeight = window.innerHeight;
        const sectionIndex = Math.round(scrollPosition / viewportHeight);

        if (sectionIndex !== currentSection && sectionIndex >= 0 && sectionIndex < sections.length) {
            lastScrollTime.current = now;
            handleSectionChange(sectionIndex);
        }
    };

    const handleWheel = (e) => {
        if (isTransitioning) return;

        const now = Date.now();
        if (now - lastScrollTime.current < 100) return;

        const direction = e.deltaY > 0 ? 1 : -1;
        const newSection = Math.max(0, Math.min(sections.length - 1, currentSection + direction));

        if (newSection !== currentSection) {
            handleSectionChange(newSection);
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('wheel', handleWheel, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('wheel', handleWheel);
        if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
}, [currentSection, sections.length, isTransitioning]);

return (
    <div ref={containerRef} className="relative" style={{ height: `${sections.length * 100}vh` }}>
        <div className="sticky top-0 h-screen overflow-hidden">
            {sections.map((section, index) => (
                <div key={index}
                     className={`h-screen w-full absolute top-0 left-0 transition-all duration-700 ease-in-out ${isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
                     style={{
                         opacity: currentSection === index ? 1 : 0,
                         transform: `scale(${currentSection === index ? 1 : 0.95})`,
                         pointerEvents: currentSection === index ? "auto" : "none",
                     }}>
                    <Section {...section} />
                </div>
            ))}
        </div>
    </div>
);
}
