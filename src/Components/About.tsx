import { useState, useEffect } from 'react';
import { Rocket, Stars, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
// import starss from "../../public/assets/star.png";
// import { MyContext } from './Context';

function About() {
    // const context = useContext(MyContext);
    // const { isHideAbout, setIsHideAbout }: any = context;

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

    // stars logic
    // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // const handleMouseMove = (e: { clientX: any; clientY: any; }) => {
    //     const { clientX, clientY } = e;
    //     setMousePosition({ x: clientX, y: clientY });
    // };

    // const stars = [
    //     { id: 1, top: "50%", left: "20%", size: "25px", delay: "0.1s" },
    //     { id: 2, top: "30%", left: "50%", size: "20px", delay: "0.2s" },
    //     { id: 3, top: "70%", left: "40%", size: "10px", delay: "0.3s" },
    //     { id: 4, top: "50%", left: "80%", size: "25px", delay: "0.4s" },
    //     { id: 5, top: "25%", left: "70%", size: "18px", delay: "0.5s" },
    //     { id: 6, top: "10%", left: "10%", size: "15px", delay: "0.6s" },
    //     { id: 7, top: "15%", left: "90%", size: "12px", delay: "0.7s" },
    //     { id: 8, top: "80%", left: "5%", size: "22px", delay: "0.8s" },
    //     { id: 9, top: "65%", left: "30%", size: "14px", delay: "0.9s" },
    //     { id: 10, top: "35%", left: "75%", size: "20px", delay: "1s" },
    //     { id: 11, top: "45%", left: "15%", size: "16px", delay: "1.1s" },
    //     { id: 12, top: "20%", left: "60%", size: "18px", delay: "1.2s" },
    //     { id: 13, top: "85%", left: "85%", size: "25px", delay: "1.3s" },
    //     { id: 14, top: "5%", left: "50%", size: "10px", delay: "1.4s" },
    //     { id: 15, top: "55%", left: "5%", size: "12px", delay: "1.5s" },
    //     { id: 16, top: "75%", left: "90%", size: "22px", delay: "1.6s" },
    //     { id: 17, top: "40%", left: "40%", size: "15px", delay: "1.7s" },
    //     { id: 18, top: "60%", left: "25%", size: "18px", delay: "1.8s" },
    //     { id: 19, top: "30%", left: "15%", size: "20px", delay: "1.9s" },
    //     { id: 20, top: "70%", left: "65%", size: "16px", delay: "2s" },
    // ];

    return (
        <div className="bg-gradient-to-b from-[#130538] to-[#20095F] min-h-screen py-16 relative overflow-hidden" >
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
            <div className='flex items-center justify-center pb-[50px] relative z-50'>
                <h3 className='text-xl font-bold text-white'>ABOUT</h3>
            </div>
            {/* Decorative elements */}
            <div className="absolute inset-0">
                <Stars className="absolute text-yellow-200 w-6 h-6 top-20 left-[20%] animate-pulse" />
                <Stars className="absolute text-yellow-200 w-4 h-4 top-40 right-[30%] animate-pulse" />
                <Sparkles className="absolute text-yellow-200 w-5 h-5 bottom-32 left-[40%] animate-pulse" />
                <Rocket className="absolute text-[#F47B5D] w-8 h-8 bottom-20 right-[15%] animate-bounce" />
            </div>

            <div className="container px-4 mx-auto">
                <div className="max-w-6xl mx-auto">
                    <div className="grid items-center gap-12 md:grid-cols-2">
                        {/* Image Slider Section */}
                        <div className="relative overflow-hidden shadow-xl rounded-2xl group">
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
                        <div className="space-y-6 text-white">
                            <h2 className="text-4xl font-bold mb-6 text-[#F47B5D]">
                                Welcome to DonaldoLand
                            </h2>
                            <p className="mb-4 text-lg leading-relaxed">
                                At DonaldoLand, we believe in creating magical moments that last a lifetime. Our state-of-the-art entertainment center is designed to spark imagination, encourage learning, and most importantly - make fun memories!
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <Stars className="text-[#F47B5D] w-6 h-6 mt-1" />
                                    <p>Safe and supervised play areas for children of all ages</p>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <Sparkles className="text-[#F47B5D] w-6 h-6 mt-1" />
                                    <p>Educational activities that make learning fun</p>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <Rocket className="text-[#F47B5D] w-6 h-6 mt-1" />
                                    <p>Adventure zones that encourage physical activity and imagination</p>
                                </div>
                            </div>
                            <button className="mt-8 bg-[#F47B5D] text-white px-8 py-3 rounded-full hover:bg-[#E36A4C] transition-colors duration-300">
                                Explore Our World
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Stars with animation */}
            {/* {stars.map((star) => (
                <img
                    key={star.id}
                    src={starss}
                    alt="star"
                    className="star-animation"
                    style={{
                        position: "fixed",
                        top: `calc(${star.top} + ${mousePosition.y * 0.02}px)`,
                        left: `calc(${star.left} + ${mousePosition.x * 0.02}px)`,
                        width: star.size,
                        height: star.size,
                        animationDelay: star.delay,
                    }}
                />
            ))} */}
        </div>
    );
}

export default About;