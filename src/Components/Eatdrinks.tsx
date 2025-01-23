import { useContext } from 'react';
import { MyContext } from './Context';

function Eatdrinks() {
    const context = useContext(MyContext);
    const {
        isHideEat,
        setIsHideEat,
    }: any = context;

    return (
        isHideEat && (
            <div className="fixed inset-0 z-10 flex items-center justify-center" id="sign">
                <div className="absolute inset-0 bg-black/20 backdrop-blur-[0.1px] grayscale-[100%]" onClick={() => setIsHideEat(!isHideEat)}></div>

                <div className="bg-[#1E222C] text-white rounded-lg shadow-lg w-[400px] max-w-[90%] p-6 relative z-10">
                    <button
                        className="absolute text-gray-400 top-4 right-4 hover:text-white cursor-none"
                        onClick={() => setIsHideEat(!isHideEat)}
                    >
                        &times;
                    </button>
                    <h2 className="mb-2 text-[18px] font-semibold text-center animate-pulse">Our Food & Drinks</h2>
                    <p className="mb-4 text-gray-400 text-[11px]">
                        Here is the list of our delicious food and refreshing drinks.
                    </p>
                    <p className="pl-3 mb-6 text-gray-400 border-l-2 border-blue-500 text-[12px]">
                        Explore the options and enjoy the fun colors and surprises!
                    </p>
                    <div className="space-y-4">
                        <div className="food-item">
                            <div className="p-3 bg-red-500 rounded-md animate-bounce">
                                <h3 className="text-xl font-semibold text-white">Pizza</h3>
                                <p className="text-gray-300 text-[12px]">Price: $8</p>
                            </div>
                        </div>
                        <div className="food-item">
                            <div className="p-3 bg-yellow-500 rounded-md animate-bounce">
                                <h3 className="text-xl font-semibold text-white">Burger</h3>
                                <p className="text-gray-300 text-[12px]">Price: $5</p>
                            </div>
                        </div>
                        <div className="drink-item">
                            <div className="p-3 bg-green-500 rounded-md animate-bounce">
                                <h3 className="text-xl font-semibold text-white">Lemonade</h3>
                                <p className="text-gray-300 text-[12px]">Price: $3</p>
                            </div>
                        </div>
                        <div className="drink-item">
                            <div className="p-3 bg-blue-500 rounded-md animate-bounce">
                                <h3 className="text-xl font-semibold text-white">Coca-Cola</h3>
                                <p className="text-gray-300 text-[12px]">Price: $2</p>
                            </div>
                        </div>
                    </div>
                    <p className="mt-4 text-[10px] text-center text-gray-500">
                        Click on the items to see more details and add to your cart!
                    </p>
                </div>
            </div>
        )
    );
}

export default Eatdrinks;
