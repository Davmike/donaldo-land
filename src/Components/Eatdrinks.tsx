import { Merge as Coffee, UtensilsCrossed, IceCream } from 'lucide-react';

const menuSections = [
    {
        title: 'Cosmic Foods',
        icon: <UtensilsCrossed className="w-5 h-5 text-[#7b61ff]" />,
        items: [
            { name: 'Meteor Pizza', price: '$12', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591', ingredients: 'Space-crafted dough, cosmic cheese blend, stardust pepperoni, asteroid olives' },
            { name: 'Galaxy Burger', price: '$10', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd', ingredients: 'Nebula beef patty, constellation lettuce, cosmic sauce, star-shaped bun' },
            { name: 'Cosmic Sandwich', price: '$8', img: 'https://images.unsplash.com/photo-1619860860774-1e2e17343432', ingredients: 'Star-dusted bread, meteor cheese, aurora ham, galaxy vegetables' },
            { name: 'Asteroid Nuggets', price: '$7', img: 'https://images.unsplash.com/photo-1585325701956-60dd9c8553bc', ingredients: 'Space chicken, cosmic breadcrumbs, meteor spices, stardust seasoning' }
        ]
    },
    {
        title: 'Space Drinks',
        icon: <Coffee className="w-5 h-5 text-[#7b61ff]" />,
        items: [
            { name: 'Milky Way Shake', price: '$6', img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699', ingredients: 'Vanilla ice cream, cosmic sparkles, stardust syrup, whipped cream' },
            { name: 'Alien Punch', price: '$5', img: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859', ingredients: 'Blue raspberry juice, sprite, galaxy glitter syrup, floating stars' },
            { name: 'Cosmic Cola Float', price: '$5', img: 'https://images.unsplash.com/photo-1606938527955-23803a727b3c', ingredients: 'Space cola, asteroid ice cream, nebula foam, shooting star sprinkles' },
            { name: 'Galaxy Smoothie', price: '$6', img: 'https://images.unsplash.com/photo-1606168094336-48f205276929', ingredients: 'Mixed space berries, cosmic yogurt, stardust protein, meteor mango' }
        ]
    },
    {
        title: 'Space Desserts',
        icon: <IceCream className="w-5 h-5 text-[#7b61ff]" />,
        items: [
            { name: 'Constellation Cookies', price: '$4', img: 'https://images.unsplash.com/photo-1587314168485-3236d6710814', ingredients: 'Star-shaped cookies, cosmic frosting, edible glitter, space sprinkles' }
        ]
    }
];

function Eatdrinks() {
    return (
        <div className="bg-gradient-to-b from-[#20095F] to-[#130538] min-h-screen relative overflow-hidden" id='menu'>
            <div className='flex items-center justify-center pb-[50px] mt-[150px]'>
                <h3 className='text-xl font-bold text-white'>MENU</h3>
            </div>
            {menuSections.map((section, index) => (
                <div key={index} className="mb-8 px-[2rem]">
                    <div className="flex items-center gap-2 mb-4">
                        {section.icon}
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