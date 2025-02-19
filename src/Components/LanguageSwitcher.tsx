import { useContext, useState } from 'react';
import { Globe } from 'lucide-react';
import { MyContext } from './Context';

interface Language {
    code: string;
    name: string;
    flag: string;
}

const languages: Language[] = [
    {
        code: 'en',
        name: 'English',
        flag: 'https://raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/gb.svg'
    },
    {
        code: 'ka',
        name: 'ქართული',
        flag: 'https://raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/ge.svg'
    },
    {
        code: 'ru',
        name: 'Русский',
        flag: 'https://raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/ru.svg'
    }
];

export default function LanguageSwitcher({ onLanguageChange }: { onLanguageChange: (code: string) => void }) {
    const [selectedLang, setSelectedLang] = useState(languages[0]);

    const handleLanguageSelect = (lang: Language) => {
        setSelectedLang(lang);
        setIsOpen(false);
        onLanguageChange(lang.code);
    };

    const context = useContext(MyContext);
    const { isOpen, setIsOpen }: any = context;

    return (
        <div className="z-50 ">
            <div className="relative">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center space-x-2 bg-[#20095F]/50 backdrop-blur-md px-4 py-2 rounded-full hover:bg-[#20095F]/70 transition-all duration-300 border border-white/10"
                >
                    <Globe className="w-5 h-5 text-white" />
                    <img
                        src={selectedLang.flag}
                        alt={selectedLang.name}
                        className="object-cover w-5 h-5 rounded-sm"
                    />
                </button>

                {isOpen && (
                    <div className="absolute right-0 mt-2 bg-[#20095F]/90 backdrop-blur-md rounded-lg border border-white/10 overflow-hidden shadow-xl">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => handleLanguageSelect(lang)}
                                className="flex items-center space-x-1 w-full pl-2 pr-6 py-2 text-white hover:bg-[#FE5C37]/20 transition-colors duration-200"
                            >
                                <img
                                    src={lang.flag}
                                    alt={lang.name}
                                    className="object-cover w-5 h-5 rounded-sm"
                                />
                                <span className="whitespace-nowrap">{lang.name}</span>
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}