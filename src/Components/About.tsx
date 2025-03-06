import { useState, useEffect, useRef } from 'react';
import { Rocket, Stars, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function About() {
    const images = [
        {
            url: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80",
            caption: "Fun & Adventure"
        },
        {
            url: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&q=80",
            caption: "Learning Through Play"
        },
        {
            url: "https://images.unsplash.com/photo-1484820540004-14229fe36ca4?auto=format&fit=crop&q=80",
            caption: "Creative Activities"
        },
        {
            url: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80",
            caption: "Safe Environment"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [direction, setDirection] = useState('');

    // Refs for animations
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const sliderRef = useRef(null);
    const contentRef = useRef(null);
    const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
    const buttonRef = useRef(null);
    const decorativeRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        // Section fade in
        gsap.fromTo(sectionRef.current,
            { backgroundColor: 'transparent' },
            {
                backgroundColor: '#130538',
                duration: 1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top center',
                    end: 'top top',
                    toggleActions: 'play none none reverse'
                }
            }
        );

        // Title animation
        gsap.fromTo(titleRef.current,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            }
        );

        // Slider animation
        gsap.fromTo(sliderRef.current,
            { x: -500, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sliderRef.current,
                    start: 'top 75%',
                    toggleActions: 'play none none reverse'
                }
            }
        );

        // Content section animations
        gsap.fromTo(contentRef.current,
            { x: 500, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: contentRef.current,
                    start: 'top 75%',
                    toggleActions: 'play none none reverse'
                }
            }
        );

        // Feature items stagger animation
        featureRefs.current.forEach((feature, index) => {
            gsap.fromTo(feature,
                { x: 50, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.6,
                    delay: index * 0.2,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: feature,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });

        // Button animation
        gsap.fromTo(buttonRef.current,
            { y: 20, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                    trigger: buttonRef.current,
                    start: 'top 90%',
                    toggleActions: 'play none none reverse'
                }
            }
        );

        // Decorative elements floating animation
        decorativeRefs.current.forEach((element, index) => {
            gsap.to(element, {
                y: `${Math.sin(index) * 20}`,
                duration: 2 + index,
                repeat: -1,
                yoyo: true,
                ease: 'power1.inOut'
            });
        });
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(timer);
    }, [currentIndex]);

    const nextSlide = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setDirection('next');
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            setTimeout(() => setIsTransitioning(false), 500);
        }
    };

    const prevSlide = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setDirection('prev');
            setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
            setTimeout(() => setIsTransitioning(false), 500);
        }
    };

    return (
        <div ref={sectionRef} className="bg-gradient-to-b from-[#130538] to-[#20095F] min-h-screen py-16 relative overflow-hidden" id='about'>
            <style>
                {`
                    @keyframes twinkle {
                        0%, 100% { opacity: 1; transform: scale(1); }
                        50% { opacity: 0.5; transform: scale(0.8); }
                    }
                    @keyframes float {
                        0%, 100% { transform: translateY(0px); }
                        50% { transform: translateY(-20px); }
                    }
                    @keyframes fadeIn {
                        from { opacity: 0; transform: translateY(20px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                    .star-animation {
                        animation: twinkle 3s infinite ease-in-out;
                    }
                    .float-animation {
                        animation: float 6s infinite ease-in-out;
                    }
                    .fade-in {
                        opacity: 0;
                        transform: translateY(20px);
                        animation: fadeIn 0.8s forwards;
                    }
                `}
            </style>
            {/* about name */}
            <div ref={titleRef} className='flex items-center justify-center pb-[50px] relative'>
                <h3 className='text-xl font-bold text-white'>ABOUT</h3>
            </div>
            {/* Decorative elements */}
            <div className="absolute inset-0">
                <div ref={el => decorativeRefs.current[0] = el}>
                    <Stars className="absolute text-yellow-200 w-6 h-6 top-20 left-[20%] animate-pulse" />
                </div>
                <div ref={el => decorativeRefs.current[1] = el}>
                    <Stars className="absolute text-yellow-200 w-4 h-4 top-40 right-[30%] animate-pulse" />
                </div>
                <div ref={el => decorativeRefs.current[2] = el}>
                    <Sparkles className="absolute text-yellow-200 w-5 h-5 bottom-32 left-[40%] animate-pulse" />
                </div>
                <div ref={el => decorativeRefs.current[3] = el}>
                    <Rocket className="absolute text-[#F47B5D] w-8 h-8 bottom-20 right-[15%] animate-bounce" />
                </div>
            </div>

            <div className="container px-4 mx-auto">
                <div className="max-w-6xl mx-auto">
                    <div className="grid items-center gap-12 md:grid-cols-2">
                        {/* Image Slider Section */}
                        <div ref={sliderRef} className="relative z-20 overflow-hidden shadow-xl rounded-2xl group">
                            {/* Main Image */}
                            <div className={`relative w-full h-[400px] transition-transform duration-500 ease-in-out ${isTransitioning
                                ? direction === 'next'
                                    ? '-translate-x-full'
                                    : 'translate-x-full'
                                : 'translate-x-0'
                                }`}>
                                <img
                                    src={images[currentIndex].url}
                                    alt={images[currentIndex].caption}
                                    className="object-cover w-full h-full"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1147]/50 to-transparent"></div>
                                <div className="absolute text-xl font-semibold text-white bottom-4 left-4 right-4">
                                    <div className="bg-[#1E1147]/70 p-2 rounded-lg backdrop-blur-sm">
                                        {images[currentIndex].caption}
                                    </div>
                                </div>
                            </div>

                            {/* Navigation Arrows */}
                            <button
                                onClick={prevSlide}
                                className="absolute p-2 transition-all -translate-y-1/2 rounded-full opacity-0 left-2 top-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm group-hover:opacity-100"
                            >
                                <ChevronLeft className="w-6 h-6 text-white" />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="absolute p-2 transition-all -translate-y-1/2 rounded-full opacity-0 right-2 top-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm group-hover:opacity-100"
                            >
                                <ChevronRight className="w-6 h-6 text-white" />
                            </button>

                            {/* Dots Navigation */}
                            <div className="absolute flex space-x-2 -translate-x-1/2 bottom-6 left-1/2">
                                {images.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        className={`w-2 h-2 rounded-full transition-all ${index === currentIndex
                                            ? 'bg-white w-4'
                                            : 'bg-white/50 hover:bg-white/70'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Content Section */}
                        <div ref={contentRef} className="z-20 space-y-6 text-white">
                            <h2 className="text-4xl font-bold mb-6 text-[#F47B5D]">
                                Welcome to DonaldoLand
                            </h2>
                            <p className="mb-4 text-lg leading-relaxed">
                                At DonaldoLand, we believe in creating magical moments that last a lifetime. Our state-of-the-art entertainment center is designed to spark imagination, encourage learning, and most importantly - make fun memories!
                            </p>
                            <div className="space-y-4">
                                <div ref={el => featureRefs.current[0] = el} className="flex items-start space-x-3">
                                    <Stars className="text-[#F47B5D] w-6 h-6 mt-1" />
                                    <p>Safe and supervised play areas for children of all ages</p>
                                </div>
                                <div ref={el => featureRefs.current[1] = el} className="flex items-start space-x-3">
                                    <Sparkles className="text-[#F47B5D] w-6 h-6 mt-1" />
                                    <p>Educational activities that make learning fun</p>
                                </div>
                                <div ref={el => featureRefs.current[2] = el} className="flex items-start space-x-3">
                                    <Rocket className="text-[#F47B5D] w-6 h-6 mt-1" />
                                    <p>Adventure zones that encourage physical activity and imagination</p>
                                </div>
                            </div>
                            <button ref={buttonRef} className="mt-8 bg-[#F47B5D] text-white px-8 py-3 rounded-full hover:bg-[#E36A4C] transition-colors duration-300">
                                Explore Our World
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;