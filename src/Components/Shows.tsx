// import { useContext } from "react";
// import { MyContext } from "./Context";
import { Sparkles, Droplets, SettingsIcon as Confetti, Wand2, IceCream } from "lucide-react";
import { useContext } from "react";
import { MyContext } from "./Context";

const translationsShows = {
    en: {
        show: "Shows",
        show1: {
            name: "Magic Galaxy Show",
            description: "Amazing magic tricks with space theme",
            price: "$299",
            duration: "1 hour",
            features: [
                "Professional magician",
                "Space costume",
                "Interactive tricks",
                "Magic props for kids"
            ]
        },
        show2: {
            name: "Cosmic Bubble Show",
            description: "Giant bubble performance with LED effects",
            price: "$249",
            duration: "45 minutes",
            features: [
                "Giant bubbles",
                "LED lights",
                "Smoke effects",
                "Interactive games"
            ]
        },
        show3: {
            name: "Star Balloon Show",
            description: "Amazing balloon art and decorations",
            price: "$199",
            duration: "30 minutes",
            features: [
                "Balloon sculptures",
                "Party decorations",
                "Take-home balloons",
                "Interactive creation"
            ]
        },
        show4: {
            name: "Cosmic Ice Cream Party",
            description: "Liquid nitrogen ice cream experience",
            price: "$349",
            duration: "1 hour",
            features: [
                "Live ice cream making",
                "Multiple flavors",
                "Smoke effects",
                "Unlimited servings"
            ]
        },
        show5: {
            name: "Space Confetti Show",
            description: "Spectacular paper and confetti show",
            price: "$199",
            duration: "30 minutes",
            features: [
                "Confetti cannons",
                "Paper sculptures",
                "Interactive games",
                "Clean-up included"
            ]
        }
    },
    ka: {
        show: "შოუ",
        show1: {
            name: "მאגიური გალაქტიკის შოუ",
            description: "დახვეწილი მაგიური ხრიკები კოსმოსის თემატიკით",
            price: "₾299",
            duration: "1 საათი",
            features: [
                "პროფესიონალი ჯადოქარი",
                "კოსმოსური კოსტიუმი",
                "ინტერაქტიული ხრიკები",
                "ჯადოსნური აქსესუარები ბავშვებისთვის"
            ]
        },
        show2: {
            name: "კოსმოსური ბუშტების შოუ",
            description: "ბუშტების გრანდიოზული წარმოდგენა LED ეფექტებით",
            price: "₾249",
            duration: "45 წუთი",
            features: [
                "გიგანტური ბუშტები",
                "LED განათებები",
                "ბოლოსწინა ეფექტები",
                "ინტერაქტიული თამაშები"
            ]
        },
        show3: {
            name: "ვარსკვლავური ბალონის შოუ",
            description: "დახვეწილი ბალონების ხელოვნება და დეკორაციები",
            price: "₾199",
            duration: "30 წუთი",
            features: [
                "ბალონების სკულპტურები",
                "파티 დეკორაციები",
                "მეორე ბალონები",
                "ინტერაქტიული შექმნა"
            ]
        },
        show4: {
            name: "კოსმოსური ნაყინის პარტი",
            description: "ლიკვიდურ აზოტზე დაფუძნებული ნაყინის გამოცდილება",
            price: "₾349",
            duration: "1 საათი",
            features: [
                "სიცოცხლოვანი ნაყინის დამზადება",
                "მრავალი გემო",
                "ბოლოსწინა ეფექტები",
                "უკანასკნელი ნაწილი"
            ]
        },
        show5: {
            name: "კოსმოსური კონფეტი შოუ",
            description: "შესანიშნავი ქაღალდის კონფეტი შოუ",
            price: "₾199",
            duration: "30 წუთი",
            features: [
                "კონფეტი კორნები",
                "ქაღალდის სკულპტურები",
                "ინტერაქტიული თამაშები",
                "წარმოუდგენელი საქმიანობანი"
            ]
        }
    },
    ru: {
        show: "Показывать",
        show1: {
            name: "Магическое шоу Галактики",
            description: "Потрясающие магические фокусы с космической темой",
            price: "₽299",
            duration: "1 час",
            features: [
                "Профессиональный маг",
                "Космический костюм",
                "Интерактивные фокусы",
                "Магические аксессуары для детей"
            ]
        },
        show2: {
            name: "Космическое шоу с пузырями",
            description: "Выступление с гигантскими пузырями и LED-эффектами",
            price: "₽249",
            duration: "45 минут",
            features: [
                "Гигантские пузыри",
                "LED-освещение",
                "Дымовые эффекты",
                "Интерактивные игры"
            ]
        },
        show3: {
            name: "Шариковое шоу Звезды",
            description: "Потрясающее искусство из воздушных шаров и украшения",
            price: "₽199",
            duration: "30 минут",
            features: [
                "Скульптуры из шаров",
                "Декорации для вечеринок",
                "Шары на память",
                "Интерактивное создание"
            ]
        },
        show4: {
            name: "Космическая вечеринка с мороженым",
            description: "Опыт с жидким азотом для создания мороженого",
            price: "₽349",
            duration: "1 час",
            features: [
                "Живое приготовление мороженого",
                "Несколько вкусов",
                "Дымовые эффекты",
                "Неограниченные порции"
            ]
        },
        show5: {
            name: "Конфетти шоу Космоса",
            description: "Великолепное шоу с бумагой и конфетти",
            price: "₽199",
            duration: "30 минут",
            features: [
                "Пушки с конфетти",
                "Скульптуры из бумаги",
                "Интерактивные игры",
                "Уборка включена"
            ]
        }
    }
};


const shows = [
    {
        id: 1,
        name: "Magic Galaxy Show",
        icon: <Wand2 className="w-8 h-8 text-purple-400" />,
        price: "$299",
        duration: "1 hour",
        description: "Amazing magic tricks with space theme",
        image: "https://images.unsplash.com/photo-1492176273113-2d51f47b23b0?auto=format&fit=crop&q=80&w=800",
        features: ["Professional magician", "Space costume", "Interactive tricks", "Magic props for kids"]
    },
    {
        id: 2,
        name: "Cosmic Bubble Show",
        icon: <Droplets className="w-8 h-8 text-blue-400" />,
        price: "$249",
        duration: "45 minutes",
        description: "Giant bubble performance with LED effects",
        image: "https://images.unsplash.com/photo-1531845116688-48819b3b68d9?auto=format&fit=crop&q=80&w=800",
        features: ["Giant bubbles", "LED lights", "Smoke effects", "Interactive games"]
    },
    {
        id: 3,
        name: "Star Balloon Show",
        icon: <Sparkles className="w-8 h-8 text-yellow-400" />,
        price: "$199",
        duration: "30 minutes",
        description: "Amazing balloon art and decorations",
        image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=800",
        features: ["Balloon sculptures", "Party decorations", "Take-home balloons", "Interactive creation"]
    },
    {
        id: 4,
        name: "Cosmic Ice Cream Party",
        icon: <IceCream className="w-8 h-8 text-pink-400" />,
        price: "$349",
        duration: "1 hour",
        description: "Liquid nitrogen ice cream experience",
        image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&q=80&w=800",
        features: ["Live ice cream making", "Multiple flavors", "Smoke effects", "Unlimited servings"]
    },
    {
        id: 5,
        name: "Space Confetti Show",
        icon: <Confetti className="w-8 h-8 text-green-400" />,
        price: "$199",
        duration: "30 minutes",
        description: "Spectacular paper and confetti show",
        image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800",
        features: ["Confetti cannons", "Paper sculptures", "Interactive games", "Clean-up included"]
    }
];

function Shows() {
    const context = useContext(MyContext);
    const { language }: any = context;

    return (
        // isHideShows && (
        <div className="bg-gradient-to-b from-[#130538] to-[#20095F] min-h-screen relative overflow-hidden" id="shows">
            {/* shows name */}
            <div className='flex items-center justify-center pb-[50px] mt-[150px]'>
                <h3 className='text-xl font-bold text-white'>{translationsShows[language as keyof typeof translationsShows].show}</h3>
            </div>
            {/* <div
                    className="absolute inset-0 bg-gradient-to-br bg-[#1a1f47]/90  backdrop-blur-sm"
                    onClick={() => setIsHideShows(!isHideShows)}
                /> */}

            {/* <div className="relative z-10 w-full max-w-6xl mx-4 max-h-[90vh] bg-gradient-to-br bg-[#2a2f6e] rounded-2xl shadow-2xl overflow-hidden group"> */}
            {/* header */}
            {/* <div className="sticky top-0 z-20 p-6 border-b bg-gradient-to-br bg-[#2a2f6e] border-white/10">
                    
                    <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Star className="w-8 h-8 text-yellow-300 animate-pulse" />
                                <h2 className="text-2xl font-bold text-transparent md:text-3xl bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text">
                                    Party Shows
                                </h2>
                            </div>
                            <button
                                onClick={() => setIsHideShows(!isHideShows)}
                                className="p-2 transition-colors rounded-full hover:bg-white/10"
                            >
                                <X className="w-6 h-6 text-gray-300" />
                            </button>
                        </div>
                </div> */}

            {/* <div className="overflow-y-auto max-h-[calc(90vh-5rem)] custom-scrollbar"> */}
            <div className="p-9">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {shows.map((show) => (
                        <div
                            key={show.id}
                            className="group z-20 bg-[#353B8C] rounded-xl overflow-hidden hover:bg-white/15 transition-all duration-300 hover:scale-[1.02]"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={show.image}
                                    alt={show.name}
                                    className="object-cover w-full h-full transition-transform duration-500 transform group-hover:scale-110"
                                />
                                <div className="absolute px-3 py-1 rounded-full top-4 right-4 bg-black/50">
                                    <span className="font-semibold text-white">{show.price}</span>
                                </div>
                            </div>

                            <div className="p-5">
                                <div className="flex items-center gap-3 mb-3">
                                    {show.icon}
                                    <h3 className="text-xl font-bold text-white">{show.name}</h3>
                                </div>

                                <p className="mb-4 text-gray-300">{show.description}</p>

                                <div className="space-y-2">
                                    {show.features.map((feature, index) => (
                                        <div key={index} className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                                            <span className="text-sm text-gray-300">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-4 mt-4 border-t border-white/10">
                                    <button className="w-full py-2 font-semibold text-white transition-colors rounded-lg bg-white/20 hover:bg-white/30">
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* </div> */}
            {/* </div> */}
        </div>
    )
}

export default Shows;