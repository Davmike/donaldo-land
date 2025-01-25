import { useContext } from 'react';
import { MyContext } from './Context';
import { Rocket, PartyPopper, GamepadIcon, Gift, Star, X } from 'lucide-react';

interface Program {
    id: number;
    title: string;
    description: string;
    price: number;
    duration: string;
    maxParticipants: number;
    image: string;
    activities: string[];
}

const partyPrograms: Program[] = [
    {
        id: 1,
        title: "Space Adventure Party",
        description: "An out-of-this-world birthday experience with cosmic games and activities",
        price: 299,
        duration: "3 hours",
        maxParticipants: 15,
        image: "https://images.unsplash.com/photo-1545134969-8debd725b007?auto=format&fit=crop&q=80&w=800",
        activities: ["Rocket Launch Simulation", "Astronaut Training Games", "Space Costume Contest"]
    },
    {
        id: 2,
        title: "Galactic Games Festival",
        description: "Interactive gaming party with latest console games and VR experiences",
        price: 349,
        duration: "4 hours",
        maxParticipants: 12,
        image: "https://images.unsplash.com/photo-1511882150382-421056c89033?auto=format&fit=crop&q=80&w=800",
        activities: ["VR Space Walk", "Gaming Tournaments", "Prize Ceremonies"]
    },
    {
        id: 3,
        title: "Cosmic Carnival",
        description: "Traditional carnival games with a space twist",
        price: 249,
        duration: "3 hours",
        maxParticipants: 20,
        image: "https://images.unsplash.com/photo-1470509037663-253afd7f0f51?auto=format&fit=crop&q=80&w=800",
        activities: ["Ring the Saturn", "Asteroid Toss", "Moon Walk Race"]
    }
];

export default function Outdoor() {
    const context = useContext(MyContext);
    const { isHideOutdoor, setIsHideOutdoor }: any = context;

    return (
        isHideOutdoor && (
            <div className="fixed inset-0 z-10 flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-[#1a1f47]/90 backdrop-blur-sm"
                    onClick={() => setIsHideOutdoor(!isHideOutdoor)}
                />

                <div className="relative z-10 w-[90%] max-w-[1200px] max-h-[90vh] bg-[#2A2F6E] text-white rounded-2xl shadow-xl overflow-hidden">
                    {/* Header */}
                    <div className="sticky top-0 z-20 bg-[#2A2F6E] border-b border-gray-700 p-6 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <Rocket className="w-8 h-8 text-purple-400" />
                            <h2 className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
                                Outdoor Party Programs
                            </h2>
                        </div>
                        <button
                            className="p-2 transition-colors rounded-full hover:bg-gray-700"
                            onClick={() => setIsHideOutdoor(!isHideOutdoor)}
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {partyPrograms.map((program) => (
                                <div
                                    key={program.id}
                                    className="bg-[#353B8C] rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300"
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={program.image}
                                            alt={program.title}
                                            className="object-cover w-full h-full"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#1E222C] to-transparent" />
                                    </div>

                                    <div className="p-6">
                                        <div className="flex items-center gap-2 mb-3">
                                            <PartyPopper className="w-5 h-5 text-purple-400" />
                                            <h3 className="text-xl font-semibold">{program.title}</h3>
                                        </div>

                                        <p className="mb-4 text-gray-400">{program.description}</p>

                                        <div className="space-y-3">
                                            <div className="flex items-center gap-2 text-sm text-gray-300">
                                                <GamepadIcon className="w-4 h-4" />
                                                <span>Duration: {program.duration}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-gray-300">
                                                <Gift className="w-4 h-4" />
                                                <span>Max Participants: {program.maxParticipants}</span>
                                            </div>
                                        </div>

                                        <div className="mt-4 space-y-2">
                                            <h4 className="flex items-center gap-2 font-semibold">
                                                <Star className="w-4 h-4 text-yellow-400" />
                                                Activities:
                                            </h4>
                                            <ul className="space-y-1 text-sm text-gray-300 list-disc list-inside">
                                                {program.activities.map((activity, index) => (
                                                    <li key={index}>{activity}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="flex items-center justify-between mt-6">
                                            <span className="text-2xl font-bold text-purple-400">${program.price}</span>
                                            <button className="px-4 py-2 transition-colors bg-purple-500 rounded-lg hover:bg-purple-600">
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