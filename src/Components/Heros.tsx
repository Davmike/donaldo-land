import { Rocket, X, Users, Clock, Star, PartyPopper, Sparkles } from 'lucide-react';
import { useContext } from 'react';
import { MyContext } from './Context';

const partyCharacters = [
    {
        name: "Spider-Hero Adventure",
        image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=800&auto=format&fit=crop",
        price: 299,
        duration: "3 hours",
        maxParticipants: 15,
        activities: [
            "Web Slinging Games",
            "Hero Training Course",
            "Costume Contest"
        ],
        color: "from-red-400 to-blue-500"
    },
    {
        name: "Dark Knight Party",
        image: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=800&auto=format&fit=crop",
        price: 349,
        duration: "4 hours",
        maxParticipants: 12,
        activities: [
            "Batcave Experience",
            "Detective Games",
            "Hero Gadget Workshop"
        ],
        color: "from-gray-600 to-yellow-400"
    },
    {
        name: "Panda Paradise",
        image: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=800&auto=format&fit=crop",
        price: 249,
        duration: "3 hours",
        maxParticipants: 20,
        activities: [
            "Bamboo Forest Games",
            "Panda Dance Party",
            "Nature Adventure"
        ],
        color: "from-green-400 to-emerald-600"
    },
    {
        name: "Space Ranger Adventure",
        image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&auto=format&fit=crop",
        price: 399,
        duration: "4 hours",
        maxParticipants: 15,
        activities: [
            "Space Mission Training",
            "Alien Hunt",
            "Rocket Building Workshop"
        ],
        color: "from-purple-500 to-indigo-600"
    },
    {
        name: "Princess Tea Party",
        image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=800&auto=format&fit=crop",
        price: 299,
        duration: "3 hours",
        maxParticipants: 12,
        activities: [
            "Royal Dance Lessons",
            "Crown Making",
            "Magical Tea Ceremony"
        ],
        color: "from-pink-400 to-purple-500"
    },
    {
        name: "Pirate Adventure",
        image: "https://images.unsplash.com/photo-1590424693420-d8e2c761da6f?w=800&auto=format&fit=crop",
        price: 329,
        duration: "4 hours",
        maxParticipants: 15,
        activities: [
            "Treasure Hunt",
            "Ship Navigation",
            "Pirate Games"
        ],
        color: "from-amber-400 to-red-500"
    }
];

function Heros() {
    const context = useContext(MyContext);
    const { isHideHeros, setIsHideHeros }: any = context;

    return (
        isHideHeros && (
            <div className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-8">
                <div
                    className="absolute inset-0 bg-[#1a1f47]/90 backdrop-blur-sm"
                    onClick={() => setIsHideHeros(!isHideHeros)}
                />
                <div className="w-full max-w-7xl bg-[#2A2F6E] rounded-2xl backdrop-blur-sm shadow-2xl">
                    <div className="sticky top-0 z-10 bg-[#2A2F6E] backdrop-blur-sm rounded-t-2xl border-b border-white/10 cursor-pointer"
                        onClick={() => setIsHideHeros(!isHideHeros)}>
                        <button
                            className="absolute p-1 transition-colors duration-300 rounded-full top-2 right-2"
                        >
                            <X className="w-6 h-6 text-white" />
                        </button>

                        <div className="pt-8 pb-8 space-y-1 text-center">
                            <h1 className="text-4xl font-bold text-transparent md:text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse font-display">
                                Birthday Adventures
                            </h1>
                            <p className="max-w-2xl mx-auto text-lg text-gray-300 md:text-xl">
                                Choose your child's favorite character for an unforgettable celebration.
                            </p>
                        </div>
                    </div>

                    <div className="h-[calc(100vh-13rem)] md:h-[calc(100vh-16rem)] overflow-y-auto px-4 py-8 custom-scrollbar">
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {partyCharacters.map((character, index) => (
                                <div
                                    key={index}
                                    className="relative overflow-hidden transition-all duration-500 transform group bg-[#353B8C] rounded-2xl backdrop-blur-sm hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
                                    style={{
                                        animation: `fadeIn 0.5s ease-out ${index * 0.1}s backwards`
                                    }}
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={character.image}
                                            alt={character.name}
                                            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className={`absolute inset-0 bg-gradient-to-t ${character.color} mix-blend-overlay opacity-60`}></div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#1E222C] to-transparent opacity-60"></div>
                                    </div>

                                    <div className="p-6 space-y-6">
                                        <h3 className="flex items-center gap-2 text-2xl font-bold text-white transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400">
                                            <PartyPopper className="w-6 h-6 text-purple-400 animate-bounce" />
                                            {character.name}
                                        </h3>

                                        <div className="space-y-4 text-gray-300">
                                            <div className="flex items-center gap-3">
                                                <Clock className="w-5 h-5 text-purple-400" />
                                                <span>{character.duration}</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <Users className="w-5 h-5 text-purple-400" />
                                                <span>Max {character.maxParticipants} participants</span>
                                            </div>
                                            <div className="space-y-3">
                                                <div className="flex items-center gap-3">
                                                    <Star className="w-5 h-5 text-purple-400" />
                                                    <span className="font-semibold">Magical Activities:</span>
                                                </div>
                                                <ul className="pl-8 space-y-2">
                                                    {character.activities.map((activity, idx) => (
                                                        <li key={idx} className="flex items-center gap-2">
                                                            <Sparkles className="w-4 h-4 text-purple-400" />
                                                            {activity}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between pt-4 border-t border-white/10">
                                            <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                                                ${character.price}
                                            </span>
                                            <button className="flex items-center gap-2 px-6 py-3 text-white transition-all duration-300 transform bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl hover:from-purple-600 hover:to-pink-600 hover:scale-105 hover:shadow-lg group">
                                                <Rocket className="w-5 h-5 transition-transform duration-300 group-hover:-rotate-45" />
                                                Book Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    );
}

export default Heros;