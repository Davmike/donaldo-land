import starss from "../../public/assets/star.png";
import earth from "../../public/assets/earth.png";
import rocket from "../../public/assets/rocket.png";
import arrow from "../../public/assets/arrow.png";
import { useState, useEffect, useContext } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { MyContext } from "./Context";
// import { Rocket, Stars, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

const translations = {
    en: {
        welcome: "Welcome to DonaldoLand",
        comingSoon: "COMING SOON...",
        clickMore: "Click here for more",
        order: "Order"
    },
    ka: {
        welcome: "კეთილი იყოს თქვენი მობრძანება DonaldoLand-ში",
        comingSoon: "მალე...",
        clickMore: "დააჭირეთ მეტი ინფორმაციისთვის",
        order: "ჯავშანი"
    },
    ru: {
        welcome: "Добро пожаловать в DonaldoLand",
        comingSoon: "СКОРО...",
        clickMore: "Нажмите здесь для подробностей",
        order: "Заказать"
    }
};

function Home() {

    // image slide logic
    // const images = [
    //     {
    //         url: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80",
    //         caption: "Fun & Adventure"
    //     },
    //     {
    //         url: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&q=80",
    //         caption: "Learning Through Play"
    //     },
    //     {
    //         url: "https://images.unsplash.com/photo-1484820540004-14229fe36ca4?auto=format&fit=crop&q=80",
    //         caption: "Creative Activities"
    //     },
    //     {
    //         url: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80",
    //         caption: "Safe Environment"
    //     }
    // ];

    // const [currentIndex, setCurrentIndex] = useState(0);
    // const [isTransitioning, setIsTransitioning] = useState(false);
    // const [direction, setDirection] = useState('');

    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         nextSlide();
    //     }, 5000);

    //     return () => clearInterval(timer);
    // }, [currentIndex]);

    // const nextSlide = () => {
    //     if (!isTransitioning) {
    //         setIsTransitioning(true);
    //         setDirection('next');
    //         setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    //         setTimeout(() => setIsTransitioning(false), 500);
    //     }
    // };

    // const prevSlide = () => {
    //     if (!isTransitioning) {
    //         setIsTransitioning(true);
    //         setDirection('prev');
    //         setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    //         setTimeout(() => setIsTransitioning(false), 500);
    //     }
    // };


    const context = useContext(MyContext);
    const { language, setLanguage }: any = context;

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const handleMouseMove = (e: { clientX: any; clientY: any; }) => {
        const { clientX, clientY } = e;
        setMousePosition({ x: clientX, y: clientY });
    };

    const stars = [
        { id: 1, top: "50%", left: "20%", size: "25px", delay: "0.1s" },
        { id: 2, top: "30%", left: "50%", size: "20px", delay: "0.2s" },
        { id: 3, top: "70%", left: "40%", size: "10px", delay: "0.3s" },
        { id: 4, top: "50%", left: "80%", size: "25px", delay: "0.4s" },
        { id: 5, top: "25%", left: "70%", size: "18px", delay: "0.5s" },
        { id: 6, top: "10%", left: "10%", size: "15px", delay: "0.6s" },
        { id: 7, top: "15%", left: "90%", size: "12px", delay: "0.7s" },
        { id: 8, top: "80%", left: "5%", size: "22px", delay: "0.8s" },
        { id: 9, top: "65%", left: "30%", size: "14px", delay: "0.9s" },
        { id: 10, top: "35%", left: "75%", size: "20px", delay: "1s" },
        { id: 11, top: "45%", left: "15%", size: "16px", delay: "1.1s" },
        { id: 12, top: "20%", left: "60%", size: "18px", delay: "1.2s" },
        { id: 13, top: "85%", left: "85%", size: "25px", delay: "1.3s" },
        { id: 14, top: "5%", left: "50%", size: "10px", delay: "1.4s" },
        { id: 15, top: "55%", left: "5%", size: "12px", delay: "1.5s" },
        { id: 16, top: "75%", left: "90%", size: "22px", delay: "1.6s" },
        { id: 17, top: "40%", left: "40%", size: "15px", delay: "1.7s" },
        { id: 18, top: "60%", left: "25%", size: "18px", delay: "1.8s" },
        { id: 19, top: "30%", left: "15%", size: "20px", delay: "1.9s" },
        { id: 20, top: "70%", left: "65%", size: "16px", delay: "2s" },
    ];

    return (
        <div className='z-[10] text-[white] overflow-hidden' onMouseMove={handleMouseMove}>
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
            <section className="bg-gradient-to-b from-[#20095F] to-[#130538] h-[100vh] text-center pt-[10vh] md:pt-[10vh] relative flex justify-center items-center flex-col gap-[30px] overflow-hidden">
                {/* Language Switcher */}
                <LanguageSwitcher onLanguageChange={setLanguage} />

                {/* Arrow section with animation */}
                <div className="w-[100px] fixed top-[0%] left-[20%] sm:left-[14%] md:left-[8%] xl:left-[6%] xxl:left-[5%]">
                    <img src={arrow} alt="" />
                    <p className="fixed left-[12%] text-[20px] xl:left-[8%] transform" style={{ transform: "rotate(-12deg)" }}> {translations[language as keyof typeof translations].clickMore}</p>
                </div>

                {/* Main text section with animation */}
                <div className={`z-[10] ${isLoaded ? 'fade-in' : ''}`} style={{ animationDelay: '0.8s' }}>
                    <h1 className="text-[30px] md:text-[45px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#FE5C37] mb-4">
                        {translations[language as keyof typeof translations].welcome}
                    </h1>
                    <p className="text-[18px] md:text-[25px] text-[#a8a8ff]">
                        {translations[language as keyof typeof translations].comingSoon}
                    </p>
                </div>

                {/* Order button with animation */}
                <button className={`bg-gradient-to-r from-[#FE5C37] to-[#FF8666] w-[150px] h-[50px] rounded-[50px] transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#FE5C37]/30 ${isLoaded ? 'fade-in' : ''}`} style={{ animationDelay: '1.1s' }}>
                    {translations[language as keyof typeof translations].order}
                </button>

                {/* Stars with animation */}
                {stars.map((star) => (
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
                ))}

                {/* Earth with animation */}
                <img
                    src={earth}
                    alt="Earth"
                    className="float-animation"
                    style={{
                        position: "fixed",
                        top: `calc(70% + ${mousePosition.y * 0.05}px)`,
                        right: `calc(20% + ${mousePosition.x * -0.05}px)`,
                        width: "80px",
                        height: "80px",
                        filter: "drop-shadow(0 0 10px rgba(255,255,255,0.3))",
                    }}
                />

                {/* Rocket with animation */}
                <img
                    src={rocket}
                    alt="Rocket"
                    className="float-animation"
                    style={{
                        position: "fixed",
                        bottom: `calc(10% + ${mousePosition.y * -0.03}px)`,
                        left: `calc(15% + ${mousePosition.x * 0.03}px)`,
                        width: "60px",
                        height: "60px",
                        filter: "drop-shadow(0 0 10px rgba(254,92,55,0.5))",
                        transform: "rotate(15deg)",
                    }}
                />
            </section>
        </div>
    );
}

export default Home;