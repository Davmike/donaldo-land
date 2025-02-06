import { useContext, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Rocket, Sparkles, Calendar, Users, X } from 'lucide-react';
import { MyContext } from './Context';

interface PartyTheme {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
    features: string[];
    ageRange: string;
    duration: string;
    maxGuests: number;
}

const partyThemes: PartyTheme[] = [
    {
        id: 1,
        title: "Space Adventure Party",
        description: "Blast off into an intergalactic celebration with our cosmic-themed party experience!",
        price: 399,
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
        features: ["Astronaut costume rentals", "Space-themed games", "Planetary decorations", "Cosmic snacks"],
        ageRange: "5-12 years",
        duration: "3 hours",
        maxGuests: 15
    },
    {
        id: 2,
        title: "Magical Unicorn Dreams",
        description: "Enter a world of sparkles and rainbows with our enchanted unicorn celebration!",
        price: 349,
        image: "https://images.unsplash.com/photo-1518972559570-7cc1309b3229?auto=format&fit=crop&w=1200&q=80",
        features: ["Unicorn ride photos", "Glitter face painting", "Rainbow cake workshop", "Magic show"],
        ageRange: "4-10 years",
        duration: "3 hours",
        maxGuests: 12
    },
    {
        id: 3,
        title: "Dinosaur Discovery",
        description: "Journey back in time with an exciting prehistoric adventure party!",
        price: 379,
        image: "https://images.unsplash.com/photo-1569794067683-d28c803a0460?auto=format&fit=crop&w=1200&q=80",
        features: ["Fossil hunting game", "Dino costume parade", "Paleontology workshop", "3D dinosaur decorations"],
        ageRange: "6-12 years",
        duration: "3.5 hours",
        maxGuests: 15
    },
    {
        id: 4,
        title: "Superhero Academy",
        description: "Transform into mighty superheroes with our action-packed party experience!",
        price: 429,
        image: "https://images.unsplash.com/photo-1612036782180-6f0822045d23?auto=format&fit=crop&w=1200&q=80",
        features: ["Superhero training camp", "Cape decoration station", "Mission challenges", "Hero photoshoot"],
        ageRange: "5-12 years",
        duration: "4 hours",
        maxGuests: 20
    }
];

function Design() {
    const context = useContext(MyContext);
    const { isHideDesign, setIsHideDesign }: any = context;
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

    return (
        <>
            {isHideDesign && (
                <div className="fixed inset-0 z-10 flex items-start justify-center overflow-auto text-white bg-gradient-to-b">
                    <div
                        className="absolute inset-0 bg-[#1a1f47]/90 backdrop-blur-sm"
                        onClick={() => setIsHideDesign(!isHideDesign)}
                    />
                    <div className="relative z-10 w-full max-w-[1400px] rounded-2xl m-auto bg-[#2a2f6e] shadow-2xl overflow-hidden backdrop-blur-xl lg:min-h-0 lg:w-[95%] lg:rounded-2xl">
                        {/* header */}
                        <div className="p-3 text-center sm:p-4 md:p-6 lg:p-8">
                            <h1 className="mb-1 text-xl font-bold text-transparent sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse sm:mb-2 md:mb-3">
                                Magical Birthday Adventures
                            </h1>
                            <p className="max-w-2xl mx-auto text-xs text-gray-300 sm:text-sm md:text-base lg:text-lg">
                                Create unforgettable memories with our specially curated party themes
                            </p>
                        </div>
                        <button
                            className="absolute p-2 transition-colors rounded-full top-1 right-1 hover:bg-gray-700 hover:bg-white/10"
                            onClick={() => setIsHideDesign(!isHideDesign)}
                        >
                            <X className="w-6 h-6 text-white" />
                        </button>
                        {/* content */}
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
                                                    alt={theme.title}
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
                                                        {theme.title}
                                                    </h2>
                                                    <p className="text-xs text-gray-300 sm:text-sm md:text-base">{theme.description}</p>
                                                </div>

                                                <div className="space-y-1.5 sm:space-y-2 md:space-y-3 max-h-[120px] sm:max-h-[140px] md:max-h-[160px]">
                                                    {theme.features.map((feature, index) => (
                                                        <div key={index} className="flex items-center gap-1.5 sm:gap-2 md:gap-3 bg-purple-500/10 p-1.5 sm:p-2 md:p-3 rounded-lg transition-transform hover:translate-x-2">
                                                            <Sparkles className="flex-shrink-0 w-3 h-3 text-purple-400 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                                                            <span className="text-xs sm:text-sm md:text-base">{feature}</span>
                                                        </div>
                                                    ))}
                                                </div>

                                                <div className="flex items-center justify-between gap-2 pt-6 sm:gap-3 md:gap-4 sm:pt-9 md:pt-16">
                                                    <div className="text-left">
                                                        <span className="block text-[10px] sm:text-xs md:text-sm text-gray-400">Starting from</span>
                                                        <span className="text-lg font-bold text-transparent sm:text-xl md:text-2xl lg:text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                                                            ${theme.price}
                                                        </span>
                                                    </div>
                                                    <button className="flex-shrink-0 px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-2.5 text-xs sm:text-sm md:text-base font-semibold rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition-all hover:scale-105 flex items-center justify-center gap-1.5 sm:gap-2">
                                                        <Rocket className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                                                        Book This Theme
                                                    </button>
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
            )}
        </>
    );
}

export default Design;