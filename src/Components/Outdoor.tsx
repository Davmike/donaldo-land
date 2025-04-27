import { useContext } from 'react';
import { PartyPopper, GamepadIcon, Gift, Star } from 'lucide-react';
import { MyContext } from './Context';

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

const translationsOutdoor = {
    en: {
        outdoor: "Outdoor",
        title: "Outdoor Party Programs",
        duration: "Duration",
        maxParticipants: "Max Participants",
        activities: "Activities",
        bookNow: "Book Now",
        programs: [
            {
                title: "Space Adventure Party",
                description: "An out-of-this-world birthday experience with cosmic games and activities",
                activities: ["Rocket Launch Simulation", "Astronaut Training Games", "Space Costume Contest"]
            },
            {
                title: "Galactic Games Festival",
                description: "Interactive gaming party with latest console games and VR experiences",
                activities: ["VR Space Walk", "Gaming Tournaments", "Prize Ceremonies"]
            },
            {
                title: "Cosmic Carnival",
                description: "Traditional carnival games with a space twist",
                activities: ["Ring the Saturn", "Asteroid Toss", "Moon Walk Race"]
            }
        ]
    },
    ka: {
        outdoor: "გარე",
        title: "გარე პარტიების პროგრამები",
        duration: "ხანგრძლივობა",
        maxParticipants: "მაქსიმალური მონაწილეები",
        activities: "აქტივობები",
        bookNow: "დარეგისტრირდით",
        programs: [
            {
                title: "სივრცული სათამაშო წვეულება",
                description: "კოსმოსური თამაშებითა და აქტივობებით გაჯერებული ბორბალას მიცემის დაბადების დღე",
                activities: ["რაკეტა გაშვების სიმულაცია", "ასტრონავტების ტრენინგი", "კოსმოსური კოსტუმის კონკურსი"]
            },
            {
                title: "გალაქტიკური თამაშების ფესტივალი",
                description: "ინტერაქტიული გეიმინგი წვეულება უახლესი კონსოლების თამაშებითა და VR გამოცდილებებით",
                activities: ["VR კოსმოსური სეირნობა", "გეიმინგის ტურნირები", "პრიზების გადაცემა"]
            },
            {
                title: "კოსმოსური კარნავალი",
                description: "ტრადიციული კარნავალი თამაშები კოსმოსური თემატიკით",
                activities: ["ზღვა სატურნი", "ასტეროიდების გადაყრა", "მთვარის სეირნობა"]
            }
        ]
    },
    ru: {
        outdoor: "Открытый",
        title: "Программы для открытых мероприятий",
        duration: "Длительность",
        maxParticipants: "Макс. участников",
        activities: "Деятельности",
        bookNow: "Забронировать сейчас",
        programs: [
            {
                title: "Космическое приключение",
                description: "День рождения с космическими играми и активностями",
                activities: ["Симуляция запуска ракеты", "Тренировка астронавтов", "Конкурс космических костюмов"]
            },
            {
                title: "Галактический фестиваль игр",
                description: "Интерактивная игровая вечеринка с последними играми и VR-опытом",
                activities: ["VR-прогулка по космосу", "Геймерские турниры", "Церемонии награждения"]
            },
            {
                title: "Космический карнавала",
                description: "Традиционные карнавальные игры с космическим поворотом",
                activities: ["Поймай кольцо Сатурна", "Переброс астероидов", "Гонка по Луне"]
            }
        ]
    }
};

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
    const { language }: any = context;

    return (
        <div className="bg-gradient-to-b from-[#130538] to-[#20095F] min-h-screen relative overflow-hidden" id='outdoor'>
            {/* outdoor name */}
            <div className='flex items-center justify-center pb-[50px] mt-[150px]'>
                <h3 className='text-xl font-bold text-white'>{translationsOutdoor[language as keyof typeof translationsOutdoor].outdoor}</h3>
            </div>

            {/* Content */}
            <div className="p-9">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {partyPrograms.map((program) => (
                        <div
                            key={program.id}
                            className="bg-[#353B8C] z-20 rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300"
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
                                        <span>{translationsOutdoor[language as keyof typeof translationsOutdoor].duration}: {program.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-300">
                                        <Gift className="w-4 h-4" />
                                        <span>{translationsOutdoor[language as keyof typeof translationsOutdoor].maxParticipants}: {program.maxParticipants}</span>
                                    </div>
                                </div>

                                <div className="mt-4 space-y-2">
                                    <h4 className="flex items-center gap-2 font-semibold">
                                        <Star className="w-4 h-4 text-yellow-400" />
                                        {translationsOutdoor[language as keyof typeof translationsOutdoor].activities}:
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
                                        {translationsOutdoor[language as keyof typeof translationsOutdoor].bookNow}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
