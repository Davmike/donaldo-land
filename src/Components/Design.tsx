import { useContext, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { MyContext } from './Context';

interface PartyTheme {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
    features: string[];
}

const partyThemes: PartyTheme[] = [
    {
        id: 1,
        title: "Princess Paradise",
        description: "Transform your party into a magical royal celebration with enchanting decorations and activities.",
        price: 299,
        image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=80",
        features: ["Crown making workshop", "Face painting", "Royal dance lessons", "Themed cake"]
    },
    {
        id: 2,
        title: "Superhero Adventure",
        description: "An action-packed party experience where every child becomes their favorite superhero.",
        price: 349,
        image: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?auto=format&fit=crop&w=1200&q=80",
        features: ["Costume station", "Superhero training camp", "Comic book creation", "Hero photo booth"]
    },
    {
        id: 3,
        title: "Safari Explorer",
        description: "Embark on a wild adventure with jungle-themed activities and exciting animal encounters.",
        price: 279,
        image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80",
        features: ["Animal face painting", "Safari scavenger hunt", "Wildlife games", "Explorer certificates"]
    }
];

function Design() {
    const context = useContext(MyContext);
    const { isHideDesign, setIsHideDesign }: any = context;

    const [currentTheme, setCurrentTheme] = useState(0);

    const nextTheme = () => {
        setCurrentTheme((prev) => (prev + 1) % partyThemes.length);
    };

    const prevTheme = () => {
        setCurrentTheme((prev) => (prev - 1 + partyThemes.length) % partyThemes.length);
    };

    return (
        <>
            {isHideDesign && (
                <div className="fixed inset-0 z-10 flex items-center justify-center overflow-hidden to-[#2d3444] text-white p-4 md:p-8">
                    <div
                        className="absolute inset-0 bg-[#1E222C]/90 backdrop-blur-sm"
                        onClick={() => setIsHideDesign(!isHideDesign)}
                    />
                    <div className="relative mx-auto h-[auto] z-10 w-[90%] max-w-[1200px] max-h-[90vh] bg-[#1E222C] text-white rounded-2xl shadow-xl overflow-hidden">
                        {/* <div className="text-center">
                            <h1 className="text-4xl font-bold text-transparent md:text-5xl bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 animate-pulse">
                                Magical Birthday Experiences
                            </h1>
                            <p className="text-lg text-gray-300">Choose the perfect theme for your child's special day</p>
                        </div> */}

                        <div className="relative overflow-hidden rounded-2xl bg-[#252a37] shadow-2xl">
                            <div className="absolute z-10 -translate-y-1/2 top-1/2 left-4">
                                <button
                                    onClick={prevTheme}
                                    className="p-2 transition-colors rounded-full bg-white/10 hover:bg-white/20"
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </button>
                            </div>
                            <div className="absolute z-10 -translate-y-1/2 top-1/2 right-4">
                                <button
                                    onClick={nextTheme}
                                    className="p-2 transition-colors rounded-full bg-white/10 hover:bg-white/20"
                                >
                                    <ChevronRight className="w-6 h-6" />
                                </button>
                            </div>

                            <div className="flex transition-transform duration-500 ease-out"
                                style={{ transform: `translateX(-${currentTheme * 100}%)` }}>
                                {partyThemes.map((theme) => (
                                    <div key={theme.id} className="min-w-full">
                                        <div className="grid gap-8 p-8 md:grid-cols-2">
                                            <div className="relative group">
                                                <img
                                                    src={theme.image}
                                                    alt={theme.title}
                                                    className="w-full h-[400px] object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl" />
                                            </div>

                                            <div className="flex flex-col justify-center">
                                                <h2 className="mb-3 text-[25px] md:text-3xl font-bold">{theme.title}</h2>
                                                <p className="mb-5 text-gray-300">{theme.description}</p>
                                                <div className="space-y-4 mb-7">
                                                    {theme.features.map((feature, index) => (
                                                        <div key={index} className="flex items-center gap-3">
                                                            <Star className="w-5 h-5 text-yellow-400" />
                                                            <span>{feature}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <span className="text-3xl font-bold text-pink-500">${theme.price}</span>
                                                    <button
                                                        className="px-6 py-3 font-semibold transition-opacity rounded-full bg-gradient-to-r from-pink-500 to-violet-500 hover:opacity-90"
                                                    >
                                                        Book Now
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div >
            )
            }
        </>
    );
}

export default Design;