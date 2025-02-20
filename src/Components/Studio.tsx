import { useState, useEffect } from 'react';
import { Camera, Clock, DollarSign, Send, Sparkles, Plus, Minus } from 'lucide-react';

const Studio = () => {
    const [selectedPackage, setSelectedPackage] = useState('');
    const [bookingDate, setBookingDate] = useState('');
    const [customPackage, setCustomPackage] = useState({
        photoCount: 10,
        duration: 1,
        retouching: 'basic',
        outfitChanges: 2
    });
    const [customPrice, setCustomPrice] = useState(0);

    // Calculate custom package price
    useEffect(() => {
        const basePrice = 150; // Base session price
        const photoPrice = customPackage.photoCount * 8; // $8 per photo
        const durationPrice = (customPackage.duration - 1) * 100; // $100 per additional hour
        const retouchingPrice = customPackage.retouching === 'premium' ? customPackage.photoCount * 5 : 0;
        const outfitPrice = customPackage.outfitChanges * 15; // $15 per outfit change

        setCustomPrice(basePrice + photoPrice + durationPrice + retouchingPrice + outfitPrice);
    }, [customPackage]);

    const packages = [
        {
            name: 'Essential',
            price: 199,
            duration: '1 hour',
            includes: ['10 edited photos', 'Basic retouching', '2 outfit changes'],
        },
        {
            name: 'Premium',
            price: 399,
            duration: '2 hours',
            includes: ['25 edited photos', 'Advanced retouching', '4 outfit changes', 'Digital delivery'],
        },
        {
            name: 'Ultimate',
            price: 699,
            duration: '4 hours',
            includes: ['50 edited photos', 'Premium retouching', 'Unlimited outfit changes', 'Same-day previews'],
        },
    ];

    const galleryImages = [
        'https://images.unsplash.com/photo-1621600411688-4be93cd68504',
        'https://images.unsplash.com/photo-1620315808304-66597517f188',
        'https://images.unsplash.com/photo-1621600411688-4be93cd68504',
        'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0',
    ];

    const updateCustomPackage = (field: string, value: number | string) => {
        setCustomPackage(prev => ({ ...prev, [field]: value }));
        setSelectedPackage('custom');
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#20095F] to-[#130538] text-white" id='studio'>
            {/* Hero Section */}
            <section className="h-[40vh] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]" />
                <div className="relative z-10 px-4 text-center">
                    <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-500">
                            Capture Your Moment
                        </span>
                    </h1>
                    <p className="max-w-xl mx-auto text-lg text-gray-400">
                        Professional photography studio with state-of-the-art equipment
                    </p>
                </div>
            </section>

            {/* Main Content Grid */}
            <section className="px-4 py-12 mx-auto max-w-7xl">
                <div className="grid gap-8 md:grid-cols-12">
                    {/* Left Column - Studio Info & Gallery */}
                    <div className="z-20 space-y-8 md:col-span-4">
                        {/* Studio Info */}
                        <div className="p-6 border bg-white/5 backdrop-blur-sm rounded-3xl border-white/10">
                            <h2 className="flex items-center gap-2 mb-4 text-xl font-semibold">
                                <Sparkles className="w-5 h-5 text-fuchsia-400" />
                                Studio Features
                            </h2>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <Camera className="w-5 h-5 mt-1 text-violet-400" />
                                    <div>
                                        <h3 className="font-medium">Pro Equipment</h3>
                                        <p className="text-sm text-gray-400">High-end cameras and lighting setup</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Clock className="w-5 h-5 mt-1 text-violet-400" />
                                    <div>
                                        <h3 className="font-medium">Flexible Hours</h3>
                                        <p className="text-sm text-gray-400">Available 7 days a week</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <DollarSign className="w-5 h-5 mt-1 text-violet-400" />
                                    <div>
                                        <h3 className="font-medium">Clear Pricing</h3>
                                        <p className="text-sm text-gray-400">No hidden fees or charges</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Gallery Grid */}
                        <div className="grid grid-cols-2 gap-3">
                            {galleryImages.map((image, index) => (
                                <div
                                    key={index}
                                    className="relative overflow-hidden aspect-square rounded-2xl group"
                                >
                                    <img
                                        src={`${image}?w=400&h=400&fit=crop`}
                                        alt={`Studio work ${index + 1}`}
                                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/50 to-transparent group-hover:opacity-100" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Middle Column - Pricing */}
                    <div className="md:col-span-4">
                        <div className="space-y-4">
                            {/* Custom Package Builder */}
                            <div className={`
                relative overflow-hidden
                bg-white/5 backdrop-blur-sm
                rounded-3xl p-6 border
                transition-all duration-300 z-20
                ${selectedPackage === 'custom'
                                    ? 'border-fuchsia-500/50 bg-white/10'
                                    : 'border-white/10 hover:border-white/20'}
              `}>
                                <h3 className="mb-2 text-lg font-medium">Custom Package</h3>
                                <p className="mb-3 text-2xl font-bold">
                                    ${customPrice}
                                    <span className="ml-1 text-sm font-normal text-gray-400">/ session</span>
                                </p>

                                {/* Photo Count */}
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm text-gray-400">Number of Photos</label>
                                    <div className="flex items-center gap-3">
                                        <button
                                            type="button"
                                            onClick={() => updateCustomPackage('photoCount', Math.max(5, customPackage.photoCount - 5))}
                                            className="p-1 rounded-lg bg-white/10 hover:bg-white/20"
                                        >
                                            <Minus className="w-4 h-4" />
                                        </button>
                                        <span className="flex-1 text-center">{customPackage.photoCount}</span>
                                        <button
                                            type="button"
                                            onClick={() => updateCustomPackage('photoCount', customPackage.photoCount + 5)}
                                            className="p-1 rounded-lg bg-white/10 hover:bg-white/20"
                                        >
                                            <Plus className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>

                                {/* Duration */}
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm text-gray-400">Session Duration (hours)</label>
                                    <select
                                        value={customPackage.duration}
                                        onChange={(e) => updateCustomPackage('duration', Number(e.target.value))}
                                        className="w-full px-3 py-2 border rounded-lg bg-white/10 border-white/10 focus:border-violet-500/50 focus:outline-none"
                                    >
                                        <option value={1}>1 hour</option>
                                        <option value={2}>2 hours</option>
                                        <option value={3}>3 hours</option>
                                        <option value={4}>4 hours</option>
                                    </select>
                                </div>

                                {/* Retouching Level */}
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm text-gray-400">Retouching Level</label>
                                    <select
                                        value={customPackage.retouching}
                                        onChange={(e) => updateCustomPackage('retouching', e.target.value)}
                                        className="w-full px-3 py-2 border rounded-lg bg-white/10 border-white/10 focus:border-violet-500/50 focus:outline-none"
                                    >
                                        <option value="basic">Basic</option>
                                        <option value="premium">Premium (+$5/photo)</option>
                                    </select>
                                </div>

                                {/* Outfit Changes */}
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm text-gray-400">Outfit Changes</label>
                                    <div className="flex items-center gap-3">
                                        <button
                                            type="button"
                                            onClick={() => updateCustomPackage('outfitChanges', Math.max(0, customPackage.outfitChanges - 1))}
                                            className="p-1 rounded-lg bg-white/10 hover:bg-white/20"
                                        >
                                            <Minus className="w-4 h-4" />
                                        </button>
                                        <span className="flex-1 text-center">{customPackage.outfitChanges}</span>
                                        <button
                                            type="button"
                                            onClick={() => updateCustomPackage('outfitChanges', customPackage.outfitChanges + 1)}
                                            className="p-1 rounded-lg bg-white/10 hover:bg-white/20"
                                        >
                                            <Plus className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>

                                <button
                                    onClick={() => setSelectedPackage('custom')}
                                    className={`
                    w-full py-2.5 rounded-xl text-sm font-medium
                    transition-colors duration-300
                    ${selectedPackage === 'custom'
                                            ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white'
                                            : 'bg-white/10 hover:bg-white/20 text-white'}
                  `}
                                >
                                    Select Custom Package
                                </button>
                            </div>

                            {/* Pre-made Packages */}
                            {packages.map((pkg) => (
                                <div
                                    key={pkg.name}
                                    className={`
                    relative overflow-hidden
                    bg-white/5 backdrop-blur-sm
                    rounded-3xl p-6 border
                    transition-all duration-300 z-20
                    ${selectedPackage === pkg.name
                                            ? 'border-fuchsia-500/50 bg-white/10'
                                            : 'border-white/10 hover:border-white/20'}
                  `}
                                >
                                    <h3 className="mb-2 text-lg font-medium">{pkg.name}</h3>
                                    <p className="mb-3 text-2xl font-bold">
                                        ${pkg.price}
                                        <span className="ml-1 text-sm font-normal text-gray-400">/ session</span>
                                    </p>
                                    <p className="mb-3 text-sm text-gray-400">
                                        <Clock className="inline-block w-4 h-4 mr-1" />
                                        {pkg.duration}
                                    </p>
                                    <ul className="mb-4 space-y-2 text-sm text-gray-300">
                                        {pkg.includes.map((feature, index) => (
                                            <li key={index}>• {feature}</li>
                                        ))}
                                    </ul>
                                    <button
                                        onClick={() => setSelectedPackage(pkg.name)}
                                        className={`
                      w-full py-2.5 rounded-xl text-sm font-medium
                      transition-colors duration-300
                      ${selectedPackage === pkg.name
                                                ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white'
                                                : 'bg-white/10 hover:bg-white/20 text-white'}
                    `}
                                    >
                                        Select Package
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Booking Form */}
                    <div className="md:col-span-4">
                        <form className="sticky z-20 p-6 space-y-4 border bg-white/5 backdrop-blur-sm rounded-3xl border-white/10 top-4">
                            <h2 className="mb-6 text-xl font-semibold">Book Your Session</h2>

                            <div>
                                <label className="block mb-1 text-sm text-gray-400">Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 text-sm border rounded-xl bg-white/5 border-white/10 focus:border-violet-500/50 focus:outline-none"
                                    placeholder="Your full name"
                                />
                            </div>

                            <div>
                                <label className="block mb-1 text-sm text-gray-400">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 text-sm border rounded-xl bg-white/5 border-white/10 focus:border-violet-500/50 focus:outline-none"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div>
                                <label className="block mb-1 text-sm text-gray-400">Date</label>
                                <input
                                    type="date"
                                    value={bookingDate}
                                    onChange={(e) => setBookingDate(e.target.value)}
                                    className="w-full px-4 py-3 text-sm border rounded-xl bg-white/5 border-white/10 focus:border-violet-500/50 focus:outline-none"
                                />
                            </div>

                            <div>
                                <label className="block mb-1 text-sm text-gray-400">Selected Package</label>
                                <div className="w-full px-4 py-3 text-sm border rounded-xl bg-white/5 border-white/10">
                                    {selectedPackage === 'custom' ? (
                                        <div>
                                            <p className="font-medium">Custom Package</p>
                                            <p className="mt-1 text-xs text-gray-400">
                                                {customPackage.photoCount} photos, {customPackage.duration}h session,{' '}
                                                {customPackage.retouching} retouching, {customPackage.outfitChanges} outfit changes
                                            </p>
                                            <p className="mt-1 text-violet-400">${customPrice}</p>
                                        </div>
                                    ) : selectedPackage ? (
                                        <div>
                                            <p className="font-medium">{selectedPackage}</p>
                                            <p className="mt-1 text-violet-400">
                                                ${packages.find(p => p.name === selectedPackage)?.price}
                                            </p>
                                        </div>
                                    ) : (
                                        <p className="text-gray-400">No package selected</p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label className="block mb-1 text-sm text-gray-400">Special Requests</label>
                                <textarea
                                    className="w-full px-4 py-3 text-sm border rounded-xl bg-white/5 border-white/10 focus:border-violet-500/50 focus:outline-none"
                                    rows={3}
                                    placeholder="Any special requirements..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="flex items-center justify-center w-full py-3 space-x-2 text-sm font-medium transition-all duration-300 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-xl hover:from-violet-700 hover:to-fuchsia-700"
                            >
                                <Send className="w-4 h-4" />
                                <span>Book Now</span>
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Studio;