import { Gift, Timer, Users, Star } from 'lucide-react';

const partyPackages = [
    {
        title: "Superhero Adventure",
        description: "Epic superhero-themed party with costume activities and games",
        duration: 3,
        maxParticipants: 15,
        price: 299,
        image: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&q=80",
        activities: [
            "Spider-Man Meet & Greet",
            "Superhero Training Camp",
            "Face Painting",
            "McDonald's Happy Meals",
            "Karaoke Heroes Session"
        ]
    },
    {
        title: "Magical Wonderland",
        description: "Enchanting party experience with magic shows and fantasy activities",
        duration: 4,
        maxParticipants: 12,
        price: 349,
        image: "https://images.unsplash.com/photo-1520808663317-647b476a81b9?auto=format&fit=crop&q=80",
        activities: [
            "Professional Magic Show",
            "Balloon Art Workshop",
            "Princess/Wizard Makeover",
            "Themed Snack Buffet",
            "Interactive Story Time"
        ]
    },
    {
        title: "Space Explorer",
        description: "Out-of-this-world cosmic adventure with stellar activities",
        duration: 3,
        maxParticipants: 20,
        price: 249,
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
        activities: [
            "Rocket Launch Simulation",
            "Astronaut Training Games",
            "Space Costume Contest",
            "Galactic Snack Station",
            "Star Gazing Activity"
        ]

    },
    {
        title: "Space Explorer",
        description: "Out-of-this-world cosmic adventure with stellar activities",
        duration: 3,
        maxParticipants: 20,
        price: 249,
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
        activities: [
            "Rocket Launch Simulation",
            "Astronaut Training Games",
            "Space Costume Contest",
            "Galactic Snack Station",
            "Star Gazing Activity"
        ]

    },

];

function Programs() {

    return (
        <div className="bg-gradient-to-b from-[#20095F] to-[#130538] min-h-screen relative overflow-hidden">
            {/* programs name */}
            <div className='flex items-center justify-center pb-[50px]'>
                <h3 className='text-xl font-bold text-white'>PROGRAMS</h3>
            </div>
            {/* content */}
            <div className="p-9">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {partyPackages.map((pkg, index) => (
                        <div
                            key={index}
                            className="bg-[#353B8C] z-20 backdrop-blur-sm rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 border border-purple-500/20 hover:border-purple-500/40"
                            style={{
                                animation: `fadeIn 0.5s ease-out ${index * 0.1}s backwards`
                            }}
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={pkg.image}
                                    alt={pkg.title}
                                    className="object-cover w-full h-full"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1E222C] to-transparent" />
                            </div>

                            <div className="p-6">
                                <h3 className="mb-2 text-xl font-bold text-purple-400">{pkg.title}</h3>
                                <p className="mb-4 text-sm text-gray-300">{pkg.description}</p>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-2 text-gray-300">
                                        <Timer className="w-4 h-4" />
                                        <span className="text-sm">Duration: {pkg.duration} hours</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-300">
                                        <Users className="w-4 h-4" />
                                        <span className="text-sm">Max Participants: {pkg.maxParticipants}</span>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <Star className="w-4 h-4 text-yellow-400" />
                                            <span className="text-sm font-semibold text-purple-300">Activities:</span>
                                        </div>
                                        <ul className="ml-4 space-y-1 text-sm text-gray-300 list-disc list-inside">
                                            {pkg.activities.map((activity, i) => (
                                                <li key={i}>{activity}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="flex items-center justify-between mt-6">
                                        <span className="text-2xl font-bold text-purple-400">${pkg.price}</span>
                                        <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 bg-purple-500 rounded-lg hover:bg-purple-600">
                                            <Gift className="w-4 h-4" />
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
    )
}
export default Programs;
