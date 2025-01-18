import { useEffect, useRef, useContext } from 'react';
import Home from './Home';
import { MyContext } from './Context';
import logo from "../../public/assets/donaldo-logo.png";

function Main() {
    const context = useContext(MyContext);
    const {
        isMenuOpen,
        setIsMenuOpen,
        isHidePrograms,
        setIsHideprograms,
        isHideHeros,
        setIsHideHeros,
        isHideDesign,
        setIsHideDesign,
        isHideOutdoor,
        setIsHideOutdoor,
        isHideEat,
        setIsHideEat,
        isHideContact,
        setIsHideContact,
        isHideShows,
        setIsHideShows
    }: any = context;

    const windowRef = useRef<HTMLDivElement>(null);
    const frontRef = useRef<HTMLDivElement>(null);
    const hamburgerRef = useRef<HTMLDivElement>(null);
    const offset = 1800;

    const updateTransformOrigin = () => {
        if (!windowRef.current || !frontRef.current) return;

        const scrollTop = windowRef.current.scrollTop;
        const pageHeight = frontRef.current.offsetHeight;
        const equation = ((scrollTop + offset) / pageHeight) * 100;
        frontRef.current.style.transformOrigin = `center ${equation}%`;
    };

    const handleOpen = () => {
        if (!hamburgerRef.current || !windowRef.current) return;
        setIsMenuOpen(true);
        hamburgerRef.current.style.position = 'absolute';
        hamburgerRef.current.style.top = `${windowRef.current.scrollTop + 30}px`;
    };

    const handleClose = () => {
        if (!hamburgerRef.current) return;
        setIsMenuOpen(false);
        setTimeout(() => {
            if (hamburgerRef.current) {
                hamburgerRef.current.style.position = 'fixed';
                hamburgerRef.current.style.top = '30px';
            }
        }, 300);
    };

    useEffect(() => {
        const currentWindowRef = windowRef.current;
        if (currentWindowRef) {
            currentWindowRef.addEventListener('scroll', updateTransformOrigin);
            updateTransformOrigin();
        }
        return () => {
            if (currentWindowRef) {
                currentWindowRef.removeEventListener('scroll', updateTransformOrigin);
            }
        };
    }, []);

    return (
        <div>
            {/* Paper Back (Menu) */}
            <div className="fixed inset-0 bg-[#412E77] text-[33px]">
                <nav className="pt-[120px] px-[34px] w-[200px]">
                    <div
                        onClick={handleClose}
                        className="fixed top-[30px] left-[30px] w-[45px] h-[34px] cursor-pointer"
                    >
                        <div className="before:content-[''] after:content-[''] before:absolute after:absolute before:block after:block before:w-[45px] after:w-[45px] before:h-[6px] after:h-[6px] before:top-1/2 after:top-1/2 before:bg-white after:bg-white before:rounded-[2px] after:rounded-[2px] before:-translate-y-1/2 after:-translate-y-1/2 before:rotate-45 after:-rotate-45" />
                    </div>
                    <span className="block mb-[25px] no-underline text-white/70 cursor-pointer" onClick={() => setIsHideprograms(!isHidePrograms)}>Programs</span>
                    <span className="block mb-[25px] no-underline text-white/70 cursor-pointer" onClick={() => setIsHideHeros(!isHideHeros)}>Heros</span>
                    <span className="block mb-[25px] no-underline text-white/70 cursor-pointer" onClick={() => setIsHideDesign(!isHideDesign)}>Design</span>
                    <span className="block mb-[25px] no-underline text-white/70 cursor-pointer" onClick={() => setIsHideOutdoor(!isHideOutdoor)}>Outdoor</span>
                    <span className="block mb-[25px] no-underline text-white/70 cursor-pointer" onClick={() => setIsHideEat(!isHideEat)}>Drinks</span>
                    <span className="block mb-[25px] no-underline text-white/70 cursor-pointer" onClick={() => setIsHideShows(!isHideShows)}>Shows</span>
                    <span className="block mb-[25px] no-underline text-white/70 cursor-pointer" onClick={() => setIsHideContact(!isHideContact)}>Contact</span>
                </nav>
            </div>

            {/* Paper Window */}
            <div
                ref={windowRef}
                className={`h-screen w-screen relative overflow-x-hidden overflow-y-scroll z-[2] ${isMenuOpen ? 'pointer-events-none' : ''
                    }`}
            >
                {/* Paper Front */}
                <div
                    ref={frontRef}
                    onClick={isMenuOpen ? handleClose : undefined}
                    className={`relative z-[3] bg-white shadow-[0_0_20px_rgba(0,0,0,0.7)] transition-transform duration-300 ease-in-out ${isMenuOpen ? 'rotate-[10deg]' : 'rotate-0'
                        }`}
                >
                    {/* Hamburger */}
                    <div
                        ref={hamburgerRef}
                        onClick={handleOpen}
                        className="fixed z-[4] top-[30px] left-[30px] w-[45px] h-[34px] cursor-pointer select-none"
                    >
                        <span className="relative block w-[45px] h-[6px] bg-[#F49D22] rounded-[2px] before:content-[''] after:content-[''] before:absolute after:absolute before:block after:block before:w-[45px] after:w-[45px] before:h-[6px] after:h-[6px] before:bg-[#F49D22] after:bg-[#F49D22] before:rounded-[2px] after:rounded-[2px] before:-bottom-[14px] after:-bottom-[28px]" />
                    </div>

                    {/* logo */}
                    <div className='w-[90px] h-[90px] fixed z-[4] top-[15px] right-[5px]'>
                        <img src={logo} alt="" />
                    </div>

                    {/* Content */}
                    <Home />
                    {/* <div>
                        <section className="h-[600px] text-center pt-[10vh] md:pt-[10vh]">
                            <h1 className="text-[30px] md:text-[45px]">მოგესალმებათ Donaldo</h1>
                            <p className="text-[18px] md:text-[25px]">
                                ცენტრის შესახებ სიახლე მალე დაემატება
                            </p>
                        </section>
                        <section className="h-[600px] bg-[#243040]/[0.15]"></section>
                        <section className="h-[600px]"></section>
                        <section className="h-[600px] bg-[#243040]/[0.15]"></section>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default Main;
