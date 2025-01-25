import { useContext, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Rocket, Sparkles, Calendar, Users } from 'lucide-react';
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
                <div className="fixed inset-0 z-10 flex items-center justify-center overflow-auto bg-gradient-to-b from-[#1a103d] to-[#2d1b69] text-white p-2 sm:p-4 md:p-8">
                    <div
                        className="absolute inset-0 bg-[#150b2e]/90 backdrop-blur-sm"
                        onClick={() => setIsHideDesign(!isHideDesign)}
                    />
                    <div className="relative z-10 w-full sm:w-[95%] max-w-[1400px] bg-[#1E222C]/90 rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl">
                        <div className="p-4 text-center sm:p-6 md:p-8">
                            <h1 className="mb-2 text-2xl font-bold text-transparent sm:text-3xl md:text-4xl lg:text-5xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse sm:mb-4">
                                Magical Birthday Adventures
                            </h1>
                            <p className="max-w-2xl mx-auto text-sm text-gray-300 sm:text-base md:text-lg">
                                Create unforgettable memories with our specially curated party themes
                            </p>
                        </div>

                        <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-[#252a37]/80">
                            <div className="absolute z-10 -translate-y-1/2 top-1/2 left-2 sm:left-4">
                                <button
                                    onClick={prevTheme}
                                    className="p-2 transition-all rounded-full sm:p-3 bg-purple-500/20 hover:bg-purple-500/40 hover:scale-110"
                                    disabled={isAnimating}
                                >
                                    <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
                                </button>
                            </div>
                            <div className="absolute z-10 -translate-y-1/2 top-1/2 right-2 sm:right-4">
                                <button
                                    onClick={nextTheme}
                                    className="p-2 transition-all rounded-full sm:p-3 bg-purple-500/20 hover:bg-purple-500/40 hover:scale-110"
                                    disabled={isAnimating}
                                >
                                    <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
                                </button>
                            </div>

                            <div
                                className="flex transition-transform duration-500 ease-out"
                                style={{ transform: `translateX(-${currentTheme * 100}%)` }}
                            >
                                {partyThemes.map((theme) => (
                                    <div key={theme.id} className="min-w-full">
                                        <div className="grid gap-4 p-3 sm:gap-6 md:gap-8 sm:p-6 md:p-8 md:grid-cols-2">
                                            <div className="relative group">
                                                <img
                                                    src={theme.image}
                                                    alt={theme.title}
                                                    className="w-full h-[200px] sm:h-[300px] md:h-[400px] object-cover rounded-lg sm:rounded-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl shadow-purple-500/20"
                                                />
                                                <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/60 via-black/30 to-transparent sm:rounded-xl" />
                                                <div className="absolute p-2 text-xs rounded-lg bottom-2 sm:bottom-4 left-2 right-2 sm:left-4 sm:right-4 sm:p-4 bg-black/50 backdrop-blur-sm sm:text-sm">
                                                    <div className="flex items-center gap-1 sm:gap-2">
                                                        <Calendar className="w-3 h-3 text-purple-400 sm:w-4 sm:h-4" />
                                                        <span>{theme.duration}</span>
                                                        <Users className="w-3 h-3 ml-1 text-purple-400 sm:w-4 sm:h-4 sm:ml-2" />
                                                        <span>Up to {theme.maxGuests} guests</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex flex-col justify-center space-y-3 sm:space-y-4 md:space-y-6">
                                                <div>
                                                    <h2 className="mb-1 text-xl font-bold text-transparent sm:text-2xl md:text-3xl sm:mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                                                        {theme.title}
                                                    </h2>
                                                    <p className="text-sm text-gray-300 sm:text-base">{theme.description}</p>
                                                </div>

                                                <div className="space-y-2 sm:space-y-3">
                                                    {theme.features.map((feature, index) => (
                                                        <div key={index} className="flex items-center gap-2 p-2 transition-transform rounded-lg sm:gap-3 bg-purple-500/10 sm:p-3 hover:translate-x-2">
                                                            <Sparkles className="w-4 h-4 text-purple-400 sm:w-5 sm:h-5" />
                                                            <span className="text-sm sm:text-base">{feature}</span>
                                                        </div>
                                                    ))}
                                                </div>

                                                <div className="flex flex-col items-center gap-3 pt-2 sm:flex-row sm:gap-4 sm:pt-4">
                                                    <div className="w-full text-center sm:text-left sm:w-auto">
                                                        <span className="block text-xs text-gray-400 sm:text-sm">Starting from</span>
                                                        <span className="text-2xl font-bold text-transparent sm:text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                                                            ${theme.price}
                                                        </span>
                                                    </div>
                                                    <button className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition-all hover:scale-105 flex items-center justify-center gap-2">
                                                        <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />
                                                        Book This Theme
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-center gap-1.5 sm:gap-2 p-3 sm:p-4 bg-[#1E222C]/50">
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
                                        className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-all ${currentTheme === index
                                            ? 'bg-purple-500 w-4 sm:w-6'
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