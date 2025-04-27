import { useState, useEffect, useContext } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Calendar, Users } from 'lucide-react';
import { MyContext } from './Context';

interface PartyTheme {
    id: number;
    title: { en: string; ka: string; ru: string }; // Different titles for different languages
    description: { en: string; ka: string; ru: string }; // Different descriptions for different languages
    price: number;
    image: string;
    features: { en: string[]; ka: string[]; ru: string[] }; // Different features for different languages
    ageRange: string;
    duration: string;
    maxGuests: number;
}

const translationsDesign = {
    en: {
        designTitle: "Design",
    },
    ka: {
        designTitle: "დიზაინი",
    },
    ru: {
        designTitle: "дизайн",
    }
};

const partyThemes: PartyTheme[] = [
    {
        id: 1,
        title: {
            en: "Space Adventure Party",
            ka: "კოსმოსური თავგადასავალი",
            ru: "Космическое приключение"
        },
        description: {
            en: "Blast off into an intergalactic celebration with our cosmic-themed party experience!",
            ka: "გაიმგზავრე კოსმიურ ზეიმში ჩვენი კოსმოსური თემატიკით!",
            ru: "Отправьтесь в межгалактическое празднование с нашей космической тематикой!"
        },
        price: 399,
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
        features: {
            en: ["Astronaut costume rentals", "Space-themed games", "Planetary decorations", "Cosmic snacks"],
            ka: ["ასტრონავტის კოსტუმის იჯარა", "კოსმოსური თამაშები", "პლანეტარული დეკორაციები", "კოსმოსური სანაყეები"],
            ru: ["Аренда костюмов астронавтов", "Космические игры", "Планетарные украшения", "Космические закуски"]
        },
        ageRange: "5-12 years",
        duration: "3 hours",
        maxGuests: 15
    },
    {
        id: 2,
        title: {
            en: "Magical Unicorn Dreams",
            ka: "მაგიური Unicorn ოცნებები",
            ru: "Магические сны о единороге"
        },
        description: {
            en: "Enter a world of sparkles and rainbows with our enchanted unicorn celebration!",
            ka: "შეხვდით ვარსკვლავებს და ფერად ცარცებს ჩვენი ჯადოსნური Unicorn ზეიმით!",
            ru: "Войдите в мир искр и радуг с нашим волшебным праздником единорога!"
        },
        price: 349,
        image: "https://images.unsplash.com/photo-1518972559570-7cc1309b3229?auto=format&fit=crop&w=1200&q=80",
        features: {
            en: ["Unicorn ride photos", "Glitter face painting", "Rainbow cake workshop", "Magic show"],
            ka: ["Unicorn-ის ცხენოსანი ფოტოები", "Glitter-ის სახის მხატვრობა", "ცისარტყელის ნამცხვარი სამკურნალო", "ჯადოსნური შოუ"],
            ru: ["Фотографии с единорогом", "Глиттерная роспись лиц", "Мастер-класс по радужным тортам", "Шоу магии"]
        },
        ageRange: "4-10 years",
        duration: "3 hours",
        maxGuests: 12
    }
];

function Design() {
    const context = useContext(MyContext);
    const { language }: { language: keyof typeof translationsDesign } = context; // Correctly define the language type

    const [currentTheme, setCurrentTheme] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const nextTheme = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentTheme((prev) => (prev + 1) % partyThemes.length);
        setTimeout(() => setIsAnimating(false), 500);
    };

    const prevTheme = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentTheme((prev) => (prev - 1 + partyThemes.length) % partyThemes.length);
        setTimeout(() => setIsAnimating(false), 500);
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') nextTheme();
            if (e.key === 'ArrowLeft') prevTheme();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const t = translationsDesign[language];

    return (
        <div className="bg-gradient-to-b from-[#20095F] to-[#130538] min-h-screen relative overflow-hidden" id='design'>
            {/* design name */}
            <div className='flex items-center justify-center pb-[50px] mt-[150px]'>
                <h3 className='text-xl font-bold text-white'>{t.designTitle}</h3>
            </div>

            <div className="relative z-10 w-full max-w-[1400px] rounded-2xl m-auto bg-[#2a2f6e] shadow-2xl overflow-hidden backdrop-blur-xl lg:min-h-0 lg:w-[95%] lg:rounded-2xl">
                <div className="relative overflow-hidden bg-[#2a2f6e]">
                    <div className="absolute z-10 top-[18%] lg:top-[42%] left-[0.9rem] sm:left-[1.2rem] md:left-4">
                        <button
                            onClick={prevTheme}
                            className="p-1.5 sm:p-2 md:p-3 transition-all rounded-full bg-purple-500/20 hover:bg-purple-500/40 hover:scale-110"
                            disabled={isAnimating}
                        >
                            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                        </button>
                    </div>
                    <div className="absolute z-10 top-[18%] lg:top-[42%] right-[0.9rem] sm:right-[1.2rem] md:right-4">
                        <button
                            onClick={nextTheme}
                            className="p-1.5 sm:p-2 md:p-3 transition-all rounded-full bg-purple-500/20 hover:bg-purple-500/40 hover:scale-110"
                            disabled={isAnimating}
                        >
                            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                        </button>
                    </div>

                    <div
                        className="flex transition-transform duration-500 ease-out"
                        style={{ transform: `translateX(-${currentTheme * 100}%)` }}
                    >
                        {partyThemes.map((theme) => (
                            <div key={theme.id} className="min-w-full">
                                <div className="grid gap-3 p-3 sm:gap-4 md:gap-6 lg:gap-8 sm:p-4 md:p-6 lg:p-8 lg:grid-cols-2">
                                    <div className="relative group">
                                        <img
                                            src={theme.image}
                                            alt={theme.title[language]}
                                            className="w-full h-[180px] sm:h-[220px] md:h-[280px] lg:h-[400px] object-cover rounded-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl shadow-purple-500/20"
                                        />
                                        <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                                        <div className="absolute bottom-2 left-2 right-2 p-1.5 sm:p-2 md:p-3 bg-black/50 backdrop-blur-sm rounded-lg text-[10px] sm:text-xs md:text-sm">
                                            <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2">
                                                <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-purple-400" />
                                                <span>{theme.duration}</span>
                                                <Users className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 ml-1 sm:ml-1.5 md:ml-2 text-purple-400" />
                                                <span>Up to {theme.maxGuests} guests</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col justify-start space-y-2 lg:justify-center sm:space-y-3 md:space-y-4">
                                        <div>
                                            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1 sm:mb-1.5 md:mb-2 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                                                {theme.title[language]}
                                            </h2>
                                            <p className="text-xs text-gray-300 sm:text-sm md:text-base">{theme.description[language]}</p>
                                        </div>

                                        <div className="space-y-1.5 sm:space-y-2 md:space-y-3 max-h-[120px] sm:max-h-[140px] md:max-h-[160px]">
                                            {theme.features[language].map((feature, index) => (
                                                <div key={index} className="flex items-center gap-1.5 sm:gap-2 md:gap-3 bg-purple-500/10 p-1.5 sm:p-2 md:p-3 rounded-lg transition-transform hover:translate-x-2">
                                                    <Sparkles className="flex-shrink-0 w-3 h-3 text-purple-400 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                                                    <span className="text-xs sm:text-sm md:text-base">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center gap-1 sm:gap-1.5 md:gap-2 p-2 sm:p-3 md:p-4 bg-[#2a2f6e]">
                        {partyThemes.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    if (!isAnimating) {
                                        setIsAnimating(true);
                                        setCurrentTheme(index);
                                        setTimeout(() => setIsAnimating(false), 500);
                                    }
                                }}
                                className={`w-1.5 sm:w-2 md:w-3 h-1.5 sm:h-2 md:h-3 rounded-full transition-all ${currentTheme === index
                                    ? 'bg-purple-500 w-3 sm:w-4 md:w-6'
                                    : 'bg-gray-600 hover:bg-gray-500'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Design;
