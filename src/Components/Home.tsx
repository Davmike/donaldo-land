import star from "../../public/assets/star.png"

function Home() {
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
        <div className='z-[10] text-[white]'>
            <section className="bg-[#20095F] h-[100vh] text-center pt-[10vh] md:pt-[10vh]">
                <h1 className="text-[30px] md:text-[45px]">Welcome to Donaldo</h1>
                <p className="text-[18px] md:text-[25px]">
                    COMING SOON...
                </p>
                {/* Stars */}
                {stars.map((stars => (
                    <img
                        key={stars.id}
                        src={star}
                        alt="star"
                        style={{
                            position: "fixed",
                            top: stars.top,
                            left: stars.left,
                            width: stars.size,
                            height: stars.size,
                        }}
                    />
                )))}
            </section>
        </div>
    );
}

export default Home;
