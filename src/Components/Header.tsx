import { Menu, X } from 'lucide-react';
import { useEffect, useContext } from 'react';
import { MyContext } from './Context';
// import arrow from "../../public/assets/arrow.png";
// import logo from "../../public/assets/donaldo-logo.png";
import LanguageSwitcher from "./LanguageSwitcher";
import { Link } from "react-scroll";

// const translations = {
//     en: {
//         welcome: "Welcome to DonaldoLand",
//         comingSoon: "COMING SOON...",
//         clickMore: "Click here for more",
//         order: "Order"
//     },
//     ka: {
//         welcome: "კეთილი იყოს თქვენი მობრძანება DonaldoLand-ში",
//         comingSoon: "მალე...",
//         clickMore: "დააჭირეთ მეტი ინფორმაციისთვის",
//         order: "ჯავშანი"
//     },
//     ru: {
//         welcome: "Добро пожаловать в DonaldoLand",
//         comingSoon: "СКОРО...",
//         clickMore: "Нажмите здесь для подробностей",
//         order: "Заказать"
//     }
// };

function Header() {

    const context = useContext(MyContext);
    const { language, setLanguage, isHeaderOpen, setIsHeaderOpen, isMobile, setIsMobile }: any = context;

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

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
        <header className="fixed top-0 left-0 w-full bg-[#20095F] z-[30] text-white bg-opacity-50 backdrop-blur-xl">
            {/* logo */}
            {/* <div className='w-[90px] h-[90px] fixed z-[4] top-[8px] right-[5px]'>
                <img src={logo} alt="" />
            </div> */}
            {/* Arrow section with animation */}
            {/* <div className="w-[100px] fixed top-[0%] left-[20%] sm:left-[14%] md:left-[8%] xl:left-[6%] xxl:left-[5%]">
                <img src={arrow} alt="" />
                <p className="fixed left-[12%] text-[20px] xl:left-[8%] transform" style={{ transform: "rotate(-12deg)" }}> {translations[language as keyof typeof translations].clickMore}</p>
            </div> */}
            <div className="container px-4 mx-auto">
                <div className="flex items-center justify-between h-16">
                    <div className='flex flex-row items-center justify-center'>
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <img src="/assets/donaldo-logo.png" alt="Donaldo Logo" className="w-auto h-12" />
                        </div>

                    </div>
                    {/* Desktop Navigation */}
                    {!isMobile && (
                        <nav className="hidden space-x-8 md:flex">
                            {menuItems.map((item) => (
                                <Link
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

                    {/* Mobile Menu Button */}
                    <div className='flex flex-row items-center justify-center gap-2'>
                        {/* Language Switcher */}
                        <div className="flex-shrink-0">
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
                {isMobile && isHeaderOpen && (
                    <nav className="py-4 md:hidden">
                        <div className="flex flex-col space-y-4">
                            {menuItems.map((item) => (
                                <Link
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
        </header >
    );
}

export default Header;