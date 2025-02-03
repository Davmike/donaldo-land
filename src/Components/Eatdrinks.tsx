import { useContext } from 'react';
import { MyContext } from './Context';
import { Rocket, Merge as Coffee, Sparkles, UtensilsCrossed, IceCream, X } from 'lucide-react';

function Eatdrinks() {
    const context = useContext(MyContext);
    const { isHideEat, setIsHideEat }: any = context;

    return (
        isHideEat && (
            <div className="fixed inset-0 z-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-[#1a1f47]/90 backdrop-blur-sm" onClick={() => setIsHideEat(!isHideEat)}></div>

                <div className="bg-[#2a2f6e] text-white rounded-2xl shadow-[0_0_20px_rgba(123,97,255,0.3)] w-[800px] max-w-[95%] pb-8 relative z-10 max-h-[90vh] overflow-y-auto custom-scrollbar">

                    <div className='sticky top-0 z-20 bg-[#2a2f6e] border-b border-gray-700 h-[50px] flex justify-center items-center flex-row'>
                        <div className="flex items-center justify-start gap-2 md:justify-center">
                            <Rocket className="w-6 h-6 text-[#b4a5ff]" />
                            <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-[#b4a5ff] to-[#7b61ff] text-transparent bg-clip-text">
                                Menu
                            </h2>
                        </div>
                        <button
                            className="absolute text-[#b4a5ff] top-2 right-2 p-2 transition-colors rounded-full hover:bg-white/10"
                            onClick={() => setIsHideEat(!isHideEat)}
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>
                    {/* Food Section */}
                    <div className="mb-8 px-[2rem]">
                        <div className="flex items-center gap-2 mb-4">
                            <UtensilsCrossed className="w-5 h-5 text-[#7b61ff]" />
                            <h3 className="text-xl font-semibold text-[#b4a5ff]">Cosmic Foods</h3>
                        </div>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div className="bg-[#353b8c] p-4 rounded-xl hover:scale-105 transition-transform">
                                <img
                                    src="https://images.unsplash.com/photo-1513104890138-7c749659a591"
                                    alt="Meteor Pizza"
                                    className="object-cover w-full h-48 mb-4 rounded-lg"
                                />
                                <div className="flex items-start justify-between">
                                    <h4 className="text-lg font-semibold">Meteor Pizza</h4>
                                    <span className="text-[#7b61ff] font-bold">$12</span>
                                </div>
                                <p className="text-sm text-[#b4a5ff] mt-2">Ingredients: Space-crafted dough, cosmic cheese blend, stardust pepperoni, asteroid olives</p>
                            </div>
                            <div className="bg-[#353b8c] p-4 rounded-xl hover:scale-105 transition-transform">
                                <img
                                    src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
                                    alt="Galaxy Burger"
                                    className="object-cover w-full h-48 mb-4 rounded-lg"
                                />
                                <div className="flex items-start justify-between">
                                    <h4 className="text-lg font-semibold">Galaxy Burger</h4>
                                    <span className="text-[#7b61ff] font-bold">$10</span>
                                </div>
                                <p className="text-sm text-[#b4a5ff] mt-2">Ingredients: Nebula beef patty, constellation lettuce, cosmic sauce, star-shaped bun</p>
                            </div>
                            <div className="bg-[#353b8c] p-4 rounded-xl hover:scale-105 transition-transform">
                                <img
                                    src="https://images.unsplash.com/photo-1619860860774-1e2e17343432"
                                    alt="Cosmic Sandwich"
                                    className="object-cover w-full h-48 mb-4 rounded-lg"
                                />
                                <div className="flex items-start justify-between">
                                    <h4 className="text-lg font-semibold">Cosmic Sandwich</h4>
                                    <span className="text-[#7b61ff] font-bold">$8</span>
                                </div>
                                <p className="text-sm text-[#b4a5ff] mt-2">Ingredients: Star-dusted bread, meteor cheese, aurora ham, galaxy vegetables</p>
                            </div>
                            <div className="bg-[#353b8c] p-4 rounded-xl hover:scale-105 transition-transform">
                                <img
                                    src="https://images.unsplash.com/photo-1585325701956-60dd9c8553bc"
                                    alt="Asteroid Nuggets"
                                    className="object-cover w-full h-48 mb-4 rounded-lg"
                                />
                                <div className="flex items-start justify-between">
                                    <h4 className="text-lg font-semibold">Asteroid Nuggets</h4>
                                    <span className="text-[#7b61ff] font-bold">$7</span>
                                </div>
                                <p className="text-sm text-[#b4a5ff] mt-2">Ingredients: Space chicken, cosmic breadcrumbs, meteor spices, stardust seasoning</p>
                            </div>
                        </div>
                    </div>

                    {/* Drinks Section */}
                    <div className="mb-8 px-[2rem]">
                        <div className="flex items-center gap-2 mb-4">
                            <Coffee className="w-5 h-5 text-[#7b61ff]" />
                            <h3 className="text-xl font-semibold text-[#b4a5ff]">Space Drinks</h3>
                        </div>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div className="bg-[#353b8c] p-4 rounded-xl hover:scale-105 transition-transform">
                                <img
                                    src="https://images.unsplash.com/photo-1572490122747-3968b75cc699"
                                    alt="Milky Way Shake"
                                    className="object-cover w-full h-48 mb-4 rounded-lg"
                                />
                                <div className="flex items-start justify-between">
                                    <h4 className="text-lg font-semibold">Milky Way Shake</h4>
                                    <span className="text-[#7b61ff] font-bold">$6</span>
                                </div>
                                <p className="text-sm text-[#b4a5ff] mt-2">Ingredients: Vanilla ice cream, cosmic sparkles, stardust syrup, whipped cream</p>
                            </div>
                            <div className="bg-[#353b8c] p-4 rounded-xl hover:scale-105 transition-transform">
                                <img
                                    src="https://images.unsplash.com/photo-1621263764928-df1444c5e859"
                                    alt="Alien Punch"
                                    className="object-cover w-full h-48 mb-4 rounded-lg"
                                />
                                <div className="flex items-start justify-between">
                                    <h4 className="text-lg font-semibold">Alien Punch</h4>
                                    <span className="text-[#7b61ff] font-bold">$5</span>
                                </div>
                                <p className="text-sm text-[#b4a5ff] mt-2">Ingredients: Blue raspberry juice, sprite, galaxy glitter syrup, floating stars</p>
                            </div>
                            <div className="bg-[#353b8c] p-4 rounded-xl hover:scale-105 transition-transform">
                                <img
                                    src="https://images.unsplash.com/photo-1606938527955-23803a727b3c"
                                    alt="Cosmic Cola Float"
                                    className="object-cover w-full h-48 mb-4 rounded-lg"
                                />
                                <div className="flex items-start justify-between">
                                    <h4 className="text-lg font-semibold">Cosmic Cola Float</h4>
                                    <span className="text-[#7b61ff] font-bold">$5</span>
                                </div>
                                <p className="text-sm text-[#b4a5ff] mt-2">Ingredients: Space cola, asteroid ice cream, nebula foam, shooting star sprinkles</p>
                            </div>
                            <div className="bg-[#353b8c] p-4 rounded-xl hover:scale-105 transition-transform">
                                <img
                                    src="https://images.unsplash.com/photo-1606168094336-48f205276929"
                                    alt="Galaxy Smoothie"
                                    className="object-cover w-full h-48 mb-4 rounded-lg"
                                />
                                <div className="flex items-start justify-between">
                                    <h4 className="text-lg font-semibold">Galaxy Smoothie</h4>
                                    <span className="text-[#7b61ff] font-bold">$6</span>
                                </div>
                                <p className="text-sm text-[#b4a5ff] mt-2">Ingredients: Mixed space berries, cosmic yogurt, stardust protein, meteor mango</p>
                            </div>
                        </div>
                    </div>

                    {/* Desserts Section */}
                    <div className="mb-8 px-[2rem]">
                        <div className="flex items-center gap-2 mb-4">
                            <IceCream className="w-5 h-5 text-[#7b61ff]" />
                            <h3 className="text-xl font-semibold text-[#b4a5ff]">Space Desserts</h3>
                        </div>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div className="bg-[#353b8c] p-4 rounded-xl hover:scale-105 transition-transform">
                                <img
                                    src="https://images.unsplash.com/photo-1587314168485-3236d6710814"
                                    alt="Constellation Cookies"
                                    className="object-cover w-full h-48 mb-4 rounded-lg"
                                />
                                <div className="flex items-start justify-between">
                                    <h4 className="text-lg font-semibold">Constellation Cookies</h4>
                                    <span className="text-[#7b61ff] font-bold">$4</span>
                                </div>
                                <p className="text-sm text-[#b4a5ff] mt-2">Ingredients: Star-shaped cookies, cosmic frosting, edible glitter, space sprinkles</p>
                            </div>
                            <div className="bg-[#353b8c] p-4 rounded-xl hover:scale-105 transition-transform">
                                <img
                                    src="https://images.unsplash.com/photo-1551024506-0bccd828d307"
                                    alt="Nebula Ice Cream"
                                    className="object-cover w-full h-48 mb-4 rounded-lg"
                                />
                                <div className="flex items-start justify-between">
                                    <h4 className="text-lg font-semibold">Nebula Ice Cream</h4>
                                    <span className="text-[#7b61ff] font-bold">$5</span>
                                </div>
                                <p className="text-sm text-[#b4a5ff] mt-2">Ingredients: Galaxy swirl ice cream, cosmic dust toppings, shooting star sauce</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 text-center">
                        <p className="text-sm text-[#b4a5ff] flex items-center justify-center gap-2">
                            <Sparkles className="w-4 h-4" />
                            All items come with special space-themed presentation!
                        </p>
                    </div>
                </div>
            </div>
        )
    );
}

export default Eatdrinks;