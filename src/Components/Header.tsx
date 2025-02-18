import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const menuItems = [
        'About',
        'Programs',
        'PhotoStudio',
        'Heros',
        'Design',
        'Outdoor',
        'Menu',
        'Shows',
        'Contact'
    ];

    return (
        <header className="fixed top-0 left-0 w-full bg-[#412E77] text-white z-50">
            <div className="container px-4 mx-auto">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <img src="/assets/donaldo-logo.png" alt="Donaldo Logo" className="w-auto h-12" />
                    </div>

                    {/* Desktop Navigation */}
                    {!isMobile && (
                        <nav className="hidden space-x-8 md:flex">
                            {menuItems.map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="transition-colors duration-200 text-white/70 hover:text-white"
                                >
                                    {item}
                                </a>
                            ))}
                        </nav>
                    )}

                    {/* Mobile Menu Button */}
                    {isMobile && (
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-md md:hidden text-white/70 hover:text-white focus:outline-none"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    )}
                </div>

                {/* Mobile Navigation */}
                {isMobile && isMenuOpen && (
                    <nav className="py-4 md:hidden">
                        <div className="flex flex-col space-y-4">
                            {menuItems.map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="px-2 py-1 transition-colors duration-200 text-white/70 hover:text-white"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
}

export default Header;