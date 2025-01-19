import star from "../../public/assets/star.png";
import earth from "../../public/assets/earth.png"; // დედამიწის სურათი
import rocket from "../../public/assets/rocket.png"; // რაკეტის სურათი
import { useState } from "react";
// import Slider from "react-slick";
// import imageFirst from "../../public/assets/1.jpg";
// import imageSecond from "../../public/assets/2.jpg";
// import imageThird from "../../public/assets/3.jpg";
// import imageFourth from "../../public/assets/4.jpg";
// import imageFiveth from "../../public/assets/5.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrow from "../../public/assets/arrow.png"


function Home() {
    // const settings = {
    //     className: "center",
    //     centerMode: true,
    //     infinite: true,
    //     centerPadding: "60px",
    //     slidesToShow: 3,
    //     speed: 500,
    //     dots: true,
    // };

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: { clientX: any; clientY: any; }) => {
        const { clientX, clientY } = e;
        setMousePosition({ x: clientX, y: clientY });
    };

    const stars = [
        { id: 1, top: "50%", left: "20%", size: "25px" },
        { id: 2, top: "30%", left: "50%", size: "20px" },
        { id: 3, top: "70%", left: "40%", size: "10px" },
        { id: 4, top: "50%", left: "80%", size: "25px" },
        { id: 5, top: "25%", left: "70%", size: "18px" },
        { id: 6, top: "10%", left: "10%", size: "15px" },
        { id: 7, top: "15%", left: "90%", size: "12px" },
        { id: 8, top: "80%", left: "5%", size: "22px" },
        { id: 9, top: "65%", left: "30%", size: "14px" },
        { id: 10, top: "35%", left: "75%", size: "20px" },
        { id: 11, top: "45%", left: "15%", size: "16px" },
        { id: 12, top: "20%", left: "60%", size: "18px" },
        { id: 13, top: "85%", left: "85%", size: "25px" },
        { id: 14, top: "5%", left: "50%", size: "10px" },
        { id: 15, top: "55%", left: "5%", size: "12px" },
        { id: 16, top: "75%", left: "90%", size: "22px" },
        { id: 17, top: "40%", left: "40%", size: "15px" },
        { id: 18, top: "60%", left: "25%", size: "18px" },
        { id: 19, top: "30%", left: "15%", size: "20px" },
        { id: 20, top: "70%", left: "65%", size: "16px" },
    ];
    return (
        <div className='z-[10] text-[white]' onMouseMove={handleMouseMove}>
            <section className="bg-[#20095F] h-[100vh] text-center pt-[10vh] md:pt-[10vh] relative flex justify-center items-center flex-col gap-[30px]">
                {/* arrow img */}
                <div className="w-[100px] fixed top-[0%] left-[20%] sm:left-[14%] md:left-[8%] xl:left-[6%] xxl:left-[5%]">
                    <img src={arrow} alt="" />
                    <p className="fixed left-[12%] text-[20px] xl:left-[8%] transform" style={{ transform: "rotate(-12deg)" }}>Click here for more</p>
                </div>
                {/* main text section */}
                <div>
                    <h1 className="text-[30px] md:text-[45px]">Welcome to DonaldoLand</h1>
                    <p className="text-[18px] md:text-[25px]">
                        COMING SOON...
                    </p>
                </div>

                {/* photo slider */}
                {/* <div className="slider-container">
                    <Slider {...settings}>
                        <div>
                            <img src={imageFirst} alt="" />
                        </div>
                        <div>
                            <img src={imageSecond} alt="" />
                        </div>
                        <div>
                            <img src={imageThird} alt="" />
                        </div>
                        <div>
                            <img src={imageFourth} alt="" />
                        </div>
                        <div>
                            <img src={imageFiveth} alt="" />
                        </div>
                    </Slider>
                </div> */}

                {/* order button */}
                <button className="bg-[#FE5C37] w-[150px] h-[50px] rounded-[50px]">ჯავშანი</button>

                {/* Stars */}
                {stars.map((stars => (
                    <img
                        key={stars.id}
                        src={star}
                        alt="star"
                        style={{
                            position: "fixed",
                            top: `calc(${stars.top} + ${mousePosition.y * 0.02}px)`,
                            left: `calc(${stars.left} + ${mousePosition.x * 0.02}px)`,
                            width: stars.size,
                            height: stars.size,
                        }}
                    />
                )))}

                {/* Earth */}
                <img
                    src={earth}
                    alt="Earth"
                    style={{
                        position: "fixed",
                        top: `calc(70% + ${mousePosition.y * 0.05}px)`,
                        right: `calc(20% + ${mousePosition.x * -0.05}px)`,
                        width: "80px",
                        height: "80px",
                    }}
                />

                {/* Rocket */}
                <img
                    src={rocket}
                    alt="Rocket"
                    style={{
                        position: "fixed",
                        bottom: `calc(10% + ${mousePosition.y * -0.03}px)`,
                        left: `calc(15% + ${mousePosition.x * 0.03}px)`,
                        width: "60px",
                        height: "60px",
                    }}
                />
            </section>
        </div>
    );
}

export default Home;
