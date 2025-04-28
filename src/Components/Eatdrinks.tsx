import { useContext } from 'react';
import { Merge as Coffee, UtensilsCrossed, IceCream } from 'lucide-react';
import { MyContext } from './Context';

interface MenuItem {
    name: string;
    price: string;
    img?: string;  // ეს მნიშვნელობა არის optional
    ingredients: string;
}

const translationsMenu = {
    en: {
        menu: "MENU",
        sections: [
            {
                title: 'Cosmic Foods',
                icon: <UtensilsCrossed className="w-5 h-5 text-[#7b61ff]" />,
                items: [
                    { name: 'Meteor Pizza', price: '$12', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591', ingredients: 'Space-crafted dough, cosmic cheese blend, stardust pepperoni, asteroid olives' },
                    { name: 'Galaxy Burger', price: '$10', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd', ingredients: 'Nebula beef patty, constellation lettuce, cosmic sauce, star-shaped bun' },
                    { name: 'Cosmic Sandwich', price: '$8', img: 'https://images.unsplash.com/photo-1619860860774-1e2e17343432', ingredients: 'Star-dusted bread, meteor cheese, aurora ham, galaxy vegetables' },
                    { name: 'Asteroid Nuggets', price: '$7', img: 'https://images.unsplash.com/photo-1585325701956-60dd9c8553bc', ingredients: 'Space chicken, cosmic breadcrumbs, meteor spices, stardust seasoning' }
                ] as MenuItem[]
            },
            {
                title: 'Space Drinks',
                icon: <Coffee className="w-5 h-5 text-[#7b61ff]" />,
                items: [
                    { name: 'Milky Way Shake', price: '$6', img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699', ingredients: 'Vanilla ice cream, cosmic sparkles, stardust syrup, whipped cream' },
                    { name: 'Alien Punch', price: '$5', img: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859', ingredients: 'Blue raspberry juice, sprite, galaxy glitter syrup, floating stars' },
                    { name: 'Cosmic Cola Float', price: '$5', img: 'https://images.unsplash.com/photo-1606938527955-23803a727b3c', ingredients: 'Space cola, asteroid ice cream, nebula foam, shooting star sprinkles' },
                    { name: 'Galaxy Smoothie', price: '$6', img: 'https://images.unsplash.com/photo-1606168094336-48f205276929', ingredients: 'Mixed space berries, cosmic yogurt, stardust protein, meteor mango' }
                ] as MenuItem[]
            },
            {
                title: 'Space Desserts',
                icon: <IceCream className="w-5 h-5 text-[#7b61ff]" />,
                items: [
                    { name: 'Constellation Cookies', price: '$4', img: 'https://images.unsplash.com/photo-1587314168485-3236d6710814', ingredients: 'Star-shaped cookies, cosmic frosting, edible glitter, space sprinkles' }
                ] as MenuItem[]
            }
        ]
    },
    ka: {
        menu: "მენიუ",
        sections: [
            {
                title: 'კოსმიკური საჭმელები',
                items: [
                    { name: 'მეტეორიტის პიცა', price: '$12', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591', ingredients: 'კოსმოსური ცომი, კოსმოსური ყველის ნაზავი, სტარდასტ პეპერონი, ასტეროიდი ზეთი' },
                    { name: 'გალაქტიკური ბურგერი', price: '$10', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591', ingredients: 'ნიბულას ხორცი, კოსმოსური სალათა, კოსმოსური სოუსი, ვარსკვლავური კეკი' },
                    { name: 'კოსმოსური სენდვიჩი', price: '$8', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591', ingredients: 'ვარსკვლავური პური, მეტეორიტის ყველი, ავორა ham, გალაქტიური ბოსტნეული' },
                    { name: 'ასტეროიდის ნუგეტები', price: '$7', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591', ingredients: 'კოსმოსური ქათამი, კოსმოსური პურები, მეტეორიტის სანელებლები, სტარდასტ სუნელი' }
                ] as MenuItem[]
            },
            {
                title: 'კოსმოსური სასმელები',
                items: [
                    { name: 'მილკი უეი შეიკი', price: '$6', img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699', ingredients: 'ვანილის აის კრემი, კოსმოსური სინათლე, სტარდასტ სიროფი, დაბერილი კრემი' },
                    { name: 'უცხოელი პანჩი', price: '$5', img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699', ingredients: 'ლურჯი რასბერი წვენი, სპრაიტი, გალაქტიკური გლიტერი სიროფი, მცურავი ვარსკვლავები' },
                    { name: 'კოსმოსური კოლა ფლოტი', price: '$5', img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699', ingredients: 'კოსმოსური კოლა, ასტეროიდი აის კრემი, ნებულას ქაფი, სროტეი ვარსკვლავები' },
                    { name: 'გალაქტიკური სმუთი', price: '$6', img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699', ingredients: 'მშობლიური კოსმოსური მარცვლები, კოსმოსური იოგურტი, სტარდასტ ცილები, მეტეორიტის მანგო' }
                ]
            },
            {
                title: 'კოსმოსური დესერტები',
                items: [
                    { name: 'კონსტელაციის კუკი', price: '$4', ingredients: 'ვარსკვლავური ფორმის კუკი, კოსმოსური კრემის ნაყინი, მორთულობა, ციური მწვანილი' }
                ]
            }
        ]
    },
    ru: {
        menu: "Меню",
        sections: [
            {
                title: 'Космическая еда',
                items: [
                    { name: 'Пицца Метеор', price: '$12', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591', ingredients: 'Космическое тесто, космическая смесь сыра, стардст пепперони, астероидные оливки' },
                    { name: 'Галактический бургер', price: '$10', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591', ingredients: 'Небулярная говяжья котлета, космическая листва, космический соус, булочка в форме звезды' },
                    { name: 'Космический сэндвич', price: '$8', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591', ingredients: 'Хлеб с космическим покрытием, сыр метеорит, авора ветчина, галактические овощи' },
                    { name: 'Астероидные наггетсы', price: '$7', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591', ingredients: 'Космическая курица, космическая панировка, метеорные специи, стардст приправа' }
                ]
            },
            {
                title: 'Космические напитки',
                items: [
                    { name: 'Молочный коктейль Млечный Путь', price: '$6', img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699', ingredients: 'Ванильное мороженое, космические искры, стардст сироп, взбитые сливки' },
                    { name: 'Инопланетный пунш', price: '$5', img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699', ingredients: 'Голубой малина сок, спрайт, галактический глиттер сироп, плавающие звезды' },
                    { name: 'Космический кола-флоат', price: '$5', img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699', ingredients: 'Космическая кола, астероидное мороженое, облако из Небулы, звездные посыпки' },
                    { name: 'Галактический смузи', price: '$6', img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699', ingredients: 'Смесь космических ягод, космический йогурт, стардст белок, манго метеорит' }
                ]
            },
            {
                title: 'Космические десерты',
                items: [
                    { name: 'Печенье созвездий', price: '$4', img: 'https://images.unsplash.com/photo-1587314168485-3236d6710814', ingredients: 'Печенье в форме звезды, космический крем, съедобный блеск, космическая посыпка' }
                ]
            }
        ]
    }
};

function Eatdrinks() {
    const context = useContext(MyContext);
    const { language }: any = context;

    return (
        <div className="bg-gradient-to-b from-[#20095F] to-[#130538] min-h-screen relative overflow-hidden" id='menu'>
            <div className='flex items-center justify-center pb-[50px] mt-[150px]'>
                <h3 className='text-xl font-bold text-white'>{translationsMenu[language as keyof typeof translationsMenu].menu}</h3>
            </div>
            {translationsMenu[language as keyof typeof translationsMenu].sections.map((section, index) => (
                <div key={index} className="mb-8 px-[2rem]">
                    <div className="flex items-center gap-2 mb-4">
                        {/* {section.icon} */}
                        <h3 className="text-xl font-semibold text-[#b4a5ff]">{section.title}</h3>
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        {section.items.map((item, idx) => (
                            <div key={idx} className="bg-[#353b8c] p-4 rounded-xl hover:scale-105 transition-transform z-20">
                                <img src={item.img} alt={item.name} className="object-cover w-full h-48 mb-4 rounded-lg" />
                                <div className="flex items-start justify-between">
                                    <h4 className="text-lg font-semibold">{item.name}</h4>
                                    <span className="text-[#7b61ff] font-bold">{item.price}</span>
                                </div>
                                <p className="text-sm text-[#b4a5ff] mt-2">Ingredients: {item.ingredients}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Eatdrinks;
