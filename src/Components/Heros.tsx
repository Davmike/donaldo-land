import { Rocket, X, Users, Clock, Star, PartyPopper } from 'lucide-react';
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
        ]
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
        ]
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
        ]
    }
];

function Heros() {
    const context = useContext(MyContext);
    const { isHideHeros, setIsHideHeros }: any = context;

    return (
        isHideHeros && (
            <div className="fixed inset-0 z-10 flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-[#1a1f47]/90 backdrop-blur-sm"
                    onClick={() => setIsHideHeros(!isHideHeros)}
                >
                    <div className="mb-12 text-center">
                        <h1 className="mb-4 text-4xl font-bold text-transparent md:text-5xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse">
                            Birthday Party Heroes
                        </h1>
                        <p className="text-lg text-gray-300">Choose your child's favorite character for an unforgettable celebration!</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-y-auto max-h-[70vh] px-4">
                        {partyCharacters.map((character, index) => (
                            <div
                                key={index}
                                className="bg-[#2A2F3B]/50 rounded-xl overflow-hidden backdrop-blur-sm transform hover:scale-105 transition-all duration-300 border border-purple-500/20 hover:border-purple-500/40 group"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={character.image}
                                        alt={character.name}
                                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E222C] to-transparent opacity-60"></div>
                                </div>

                                <div className="p-6">
                                    <h3 className="flex items-center gap-2 mb-3 text-xl font-bold">
                                        <PartyPopper className="w-5 h-5 text-purple-400" />
                                        {character.name}
                                    </h3>

                                    <div className="mb-6 space-y-3 text-gray-300">
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-4 h-4 text-purple-400" />
                                            <span>{character.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Users className="w-4 h-4 text-purple-400" />
                                            <span>Max {character.maxParticipants} participants</span>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2">
                                                <Star className="w-4 h-4 text-purple-400" />
                                                <span className="font-semibold">Activities:</span>
                                            </div>
                                            <ul className="pl-5 space-y-1 text-sm list-disc list-inside">
                                                {character.activities.map((activity, idx) => (
                                                    <li key={idx}>{activity}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span className="text-2xl font-bold text-purple-400">${character.price}</span>
                                        <button className="flex items-center gap-2 px-4 py-2 transition-colors duration-300 bg-purple-500 rounded-lg hover:bg-purple-600">
                                            <Rocket className="w-4 h-4" />
                                            Book Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    );
}

export default Heros;