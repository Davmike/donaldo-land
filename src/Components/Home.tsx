import starss from "../../public/assets/star.png";
import earth from "../../public/assets/earth.png";
import rocket from "../../public/assets/rocket.png";
import arrowUp from "../../public/assets/arrow-up.png"
import { useState, useEffect, useContext, useRef } from "react";
import { MyContext } from "./Context";
import Header from "./Header";
import gsap from "gsap";
import { Link } from "react-scroll";

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
    const context = useContext(MyContext);
    const { language, mousePosition }: any = context;
    const [isLoaded, setIsLoaded] = useState(false);

    // Refs for GSAP animations
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const buttonRef = useRef(null);
    const starsRef = useRef<(HTMLImageElement | null)[]>([]);
    const earthRef = useRef(null);
    const rocketRef = useRef(null);

    useEffect(() => {
        setIsLoaded(!isLoaded);

        // Initial animations
        gsap.fromTo(titleRef.current,
            { opacity: 0, y: -50 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
        );

        gsap.fromTo(subtitleRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power3.out" }
        );

        gsap.fromTo(buttonRef.current,
            { opacity: 0, scale: 0.5 },
            { opacity: 1, scale: 1, duration: 0.8, delay: 0.6, ease: "back.out(1.7)" }
        );

        // Animate stars
        starsRef.current.forEach((star, index) => {
            gsap.fromTo(star,
                { opacity: 0, scale: 0 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.5,
                    delay: 0.1 * index,
                    ease: "power2.out"
                }
            );
        });

        // Animate earth
        gsap.fromTo(earthRef.current,
            { opacity: 0, scale: 0.5, rotation: -180 },
            {
                opacity: 1,
                scale: 1,
                rotation: 0,
                duration: 1.5,
                delay: 0.8,
                ease: "elastic.out(1, 0.3)"
            }
        );

        // Animate rocket
        gsap.fromTo(rocketRef.current,
            { opacity: 0, x: -100, y: 100 },
            {
                opacity: 1,
                x: 0,
                y: 0,
                duration: 1.2,
                delay: 1,
                ease: "power2.out"
            }
        );
    }, []);

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
        <div className='text-[white] overflow-hidden' id="home">
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
                <Header />
                {/* Main text section with GSAP animation */}
                <div className="z-20">
                    <h1
                        ref={titleRef}
                        className="text-[30px] md:text-[45px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#FE5C37] mb-4"
                    >
                        {translations[language as keyof typeof translations].welcome}
                    </h1>
                    <p
                        ref={subtitleRef}
                        className="text-[18px] md:text-[25px] text-[#a8a8ff]"
                    >
                        {translations[language as keyof typeof translations].comingSoon}
                    </p>
                </div>

                {/* Order button with GSAP animation */}
                <button
                    ref={buttonRef}
                    className="bg-gradient-to-r z-20 from-[#FE5C37] to-[#FF8666] w-[150px] h-[50px] rounded-[50px] transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#FE5C37]/30"
                >
                    {translations[language as keyof typeof translations].order}
                </button>

                {/* Stars with GSAP animation */}
                {stars.map((star, index) => (
                    <img
                        key={star.id}
                        ref={el => starsRef.current[index] = el}
                        src={starss}
                        alt="star"
                        className="z-10 star-animation"
                        style={{
                            position: "fixed",
                            top: `calc(${star.top} + ${mousePosition.y * 0.05}px)`,
                            left: `calc(${star.left} + ${mousePosition.x * -0.05}px)`,
                            width: star.size,
                            height: star.size,
                            animationDelay: star.delay,
                        }}
                    />
                ))}

                {/* Earth with GSAP animation */}
                <img
                    ref={earthRef}
                    src={earth}
                    alt="Earth"
                    className="z-10 float-animation"
                    style={{
                        position: "fixed",
                        top: `calc(70% + ${mousePosition.y * 0.05}px)`,
                        right: `calc(20% + ${mousePosition.x * -0.05}px)`,
                        width: "80px",
                        height: "80px",
                        filter: "drop-shadow(0 0 10px rgba(255,255,255,0.3))",
                    }}
                />

                {/* Rocket with GSAP animation */}
                <img
                    ref={rocketRef}
                    src={rocket}
                    alt="Rocket"
                    className="z-10 float-animation"
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

                {/*scroll from down to up */}
                <Link
                    to={"home"}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    className="transition-colors duration-200 text-white/70 hover:text-white"
                >
                    <div className="z-50 w-[50px] h-[50px] rounded-xl bg-[#20095E] fixed bottom-[40px] right-[40px]">
                        <img src={arrowUp} alt="" />
                    </div>
                </Link>
            </section>
        </div>
    );
}

export default Home;