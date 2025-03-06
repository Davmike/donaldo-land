import { Menu, X } from 'lucide-react';
import { useEffect, useContext, useRef } from 'react';
import { MyContext } from './Context';
import LanguageSwitcher from "./LanguageSwitcher";
import { Link } from "react-scroll";
import gsap from 'gsap';

function Header() {
    const context = useContext(MyContext);
    const { setLanguage, isHeaderOpen, setIsHeaderOpen, isMobile, setIsMobile }: any = context;

    // Refs for animations
    const headerRef = useRef(null);
    const logoRef = useRef(null);
    const navItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);
    const mobileMenuRef = useRef(null);
    const languageSwitcherRef = useRef(null);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        // Initial animation for header
        gsap.fromTo(headerRef.current,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
        );

        // Logo animation
        gsap.fromTo(logoRef.current,
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.6, delay: 0.3, ease: "back.out(1.7)" }
        );

        // Desktop nav items animation
        navItemsRef.current.forEach((item, index) => {
            gsap.fromTo(item,
                { y: -20, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.4,
                    delay: 0.4 + index * 0.1,
                    ease: "power2.out"
                }
            );
        });

        // Language switcher animation
        gsap.fromTo(languageSwitcherRef.current,
            { x: 50, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.6, delay: 0.8, ease: "power2.out" }
        );

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    // Mobile menu animation
    useEffect(() => {
        if (mobileMenuRef.current && isMobile) {
            if (isHeaderOpen) {
                gsap.fromTo(mobileMenuRef.current,
                    { height: 0, opacity: 0 },
                    { height: "auto", opacity: 1, duration: 0.4, ease: "power2.out" }
                );
            } else {
                gsap.to(mobileMenuRef.current, {
                    height: 0,
                    opacity: 0,
                    duration: 0.3,
                    ease: "power2.in"
                });
            }
        }
    }, [isHeaderOpen, isMobile]);

    const menuItems = [
        { id: "about", name: 'About' },
        { id: "programs", name: 'Programs' },
        { id: "gallery", name: 'PhotoStudio' },
        { id: "heros", name: 'Heros' },
        { id: "design", name: 'Design' },
        { id: "outdoor", name: 'Outdoor' },
        { id: "menu", name: 'Menu' },
        { id: "shows", name: 'Shows' },
        { id: "contact", name: 'Contact' }
    ];

    return (
        <header ref={headerRef} className="fixed top-0 left-0 w-full bg-[#20095F] z-[30] text-white bg-opacity-50 backdrop-blur-xl">
            <div className="container px-4 mx-auto">
                <div className="flex items-center justify-between h-16">
                    <div className='flex flex-row items-center justify-center'>
                        {/* Logo */}
                        <div ref={logoRef} className="flex-shrink-0 cursor-pointer">
                            <Link
                                to={"home"}
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                                className="transition-colors duration-200 text-white/70 hover:text-white"
                            >
                                <img src="/assets/donaldo-logo.png" alt="Donaldo Logo" className="w-auto h-12" />
                            </Link>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    {!isMobile && (
                        <nav className="hidden space-x-8 md:flex">
                            {menuItems.map((item, index) => (
                                <Link
                                    key={index}
                                    // ref={el => navItemsRef.current[index] = el}
                                    to={item.id}
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                    href={`#${item.name.toLowerCase()}`}
                                    className="transition-colors duration-200 text-white/70 hover:text-white"
                                    onClick={() => setIsHeaderOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    )}

                    {/* Mobile Menu Button and Language Switcher */}
                    <div className='flex flex-row items-center justify-center gap-2'>
                        {/* Language Switcher */}
                        <div ref={languageSwitcherRef} className="flex-shrink-0">
                            <LanguageSwitcher onLanguageChange={setLanguage} />
                        </div>
                        {isMobile && (
                            <button
                                onClick={() => setIsHeaderOpen(!isHeaderOpen)}
                                className="p-2 rounded-md md:hidden text-white/70 hover:text-white focus:outline-none"
                            >
                                {isHeaderOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        )}
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMobile && (
                    <nav
                        ref={mobileMenuRef}
                        className="py-4 overflow-hidden md:hidden"
                        style={{ height: 0, opacity: 0 }}
                    >
                        <div className="flex flex-col space-y-4">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.id}
                                    to={item.id}
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                    href={`#${item.name.toLowerCase()}`}
                                    className="transition-colors duration-200 text-white/70 hover:text-white"
                                    onClick={() => setIsHeaderOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
}

export default Header;