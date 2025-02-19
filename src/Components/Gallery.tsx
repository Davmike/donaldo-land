import { useState } from 'react';
import { Camera, Video, Camera as Camera2 } from 'lucide-react';

function Gallery() {
    const [activeTab, setActiveTab] = useState('photos');

    const photos = [
        { id: 1, url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32', title: 'Family Portrait', vertical: false },
        { id: 2, url: 'https://images.unsplash.com/photo-1519741497674-611481863552', title: 'Wedding Photography', vertical: true },
        { id: 3, url: 'https://images.unsplash.com/photo-1524117074681-31bd4de22ad3', title: 'Nature Photography', vertical: false },
        { id: 4, url: 'https://images.unsplash.com/photo-1524117074681-31bd4de22ad3', title: 'Event Coverage', vertical: true },
        { id: 5, url: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e', title: 'Portrait Photography', vertical: true },
        { id: 6, url: 'https://images.unsplash.com/photo-1551216223-37c8d1dbec5c', title: 'Street Photography', vertical: false },
    ];

    const videos = [
        {
            id: 1,
            thumbnail: 'https://images.unsplash.com/photo-1583795128727-6ec3642408f8',
            preview: 'https://i.giphy.com/media/3o7TKtsBMu4xzIV808/giphy.webp',
            title: 'Wedding Highlights',
            vertical: false
        },
        {
            id: 2,
            thumbnail: 'https://images.unsplash.com/photo-1601506521937-0121a7fc2a6d',
            preview: 'https://i.giphy.com/media/3ohhweiVB36rAlqVCE/giphy.webp',
            title: 'Corporate Events',
            vertical: true
        },
        {
            id: 3,
            thumbnail: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb',
            preview: 'https://i.giphy.com/media/l0HlPwMAzh13pcZ20/giphy.webp',
            title: 'Music Videos',
            vertical: false
        },
        {
            id: 4,
            thumbnail: 'https://images.unsplash.com/photo-1578022761797-b8636ac1773c',
            preview: 'https://i.giphy.com/media/3o7TKtsBMu4xzIV808/giphy.webp',
            title: 'Documentary',
            vertical: true
        },
    ];

    const studioPhotos = [
        { id: 1, url: 'https://images.unsplash.com/photo-1600607686527-6fb886090705', title: 'Professional Headshots', vertical: true },
        { id: 2, url: 'https://images.unsplash.com/photo-1621784563330-caee0b138a00', title: 'Product Photography', vertical: false },
        { id: 3, url: 'https://images.unsplash.com/photo-1600607686527-6fb886090705', title: 'Fashion Photography', vertical: true },
        { id: 4, url: 'https://images.unsplash.com/photo-1554941829-202a0b2403b8', title: 'Model Portfolio', vertical: false },
        { id: 5, url: 'https://images.unsplash.com/photo-1600607686527-6fb886090705', title: 'Commercial Photography', vertical: true },
    ];

    return (
        <div className="px-4 py-8 md:px-8 lg:px-16 bg-gradient-to-b from-[#130538] to-[#20095F] min-h-screen relative overflow-hidden pb-[50px]">
            {/* contact name */}
            <div className='flex items-center justify-center pb-[50px] mt-[150px] z-20'>
                <h3 className='text-xl font-bold text-white'>CONTACT</h3>
            </div>

            {/* Navigation Tabs */}
            <div className="flex justify-center mb-8 space-x-4">
                <button
                    onClick={() => setActiveTab('photos')}
                    className={`flex items-center px-6 py-3 rounded-lg transition-all z-20 ${activeTab === 'photos'
                        ? 'bg-purple-600 text-white'
                        : 'bg-white text-gray-600 hover:bg-purple-50'
                        }`}
                >
                    <Camera className="w-5 h-5 mr-2" />
                    Photos
                </button>
                <button
                    onClick={() => setActiveTab('videos')}
                    className={`flex items-center px-6 py-3 rounded-lg transition-all z-20 ${activeTab === 'videos'
                        ? 'bg-purple-600 text-white'
                        : 'bg-white text-gray-600 hover:bg-purple-50'
                        }`}
                >
                    <Video className="w-5 h-5 mr-2" />
                    Videos
                </button>
                <button
                    onClick={() => setActiveTab('studio')}
                    className={`flex items-center px-6 py-3 rounded-lg transition-all z-20 ${activeTab === 'studio'
                        ? 'bg-purple-600 text-white'
                        : 'bg-white text-gray-600 hover:bg-purple-50'
                        }`}
                >
                    <Camera2 className="w-5 h-5 mr-2" />
                    Photo Studio
                </button>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {activeTab === 'photos' &&
                    photos.map((photo) => (
                        <div
                            key={photo.id}
                            className={`group z-20 relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all ${photo.vertical ? 'row-span-2' : 'col-span-1'
                                }`}
                            style={{ aspectRatio: photo.vertical ? '2/3' : '4/3' }}
                        >
                            <img
                                src={photo.url}
                                alt={photo.title}
                                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 transition-opacity opacity-0 bg-gradient-to-t from-black/70 to-transparent group-hover:opacity-100">
                                <p className="absolute font-semibold text-white bottom-4 left-4">{photo.title}</p>
                            </div>
                        </div>
                    ))}

                {activeTab === 'videos' &&
                    videos.map((video) => (
                        <div
                            key={video.id}
                            className={`group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all ${video.vertical ? 'row-span-2' : 'col-span-1'
                                }`}
                            style={{ aspectRatio: video.vertical ? '9/16' : '16/9' }}
                        >
                            <img
                                src={video.thumbnail}
                                alt={video.title}
                                className="absolute inset-0 object-cover w-full h-full opacity-0"
                            />
                            <img
                                src={video.preview}
                                alt={`${video.title} preview`}
                                className="object-cover w-full h-full"
                            />
                            <div className="absolute inset-0 transition-opacity opacity-0 bg-gradient-to-t from-black/70 to-transparent group-hover:opacity-100">
                                <p className="absolute font-semibold text-white bottom-4 left-4">{video.title}</p>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm">
                                    <Video className="w-8 h-8 text-white" />
                                </div>
                            </div>
                        </div>
                    ))}

                {activeTab === 'studio' &&
                    studioPhotos.map((photo) => (
                        <div
                            key={photo.id}
                            className={`group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all ${photo.vertical ? 'row-span-2' : 'col-span-1'
                                }`}
                            style={{ aspectRatio: photo.vertical ? '2/3' : '4/3' }}
                        >
                            <img
                                src={photo.url}
                                alt={photo.title}
                                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 transition-opacity opacity-0 bg-gradient-to-t from-black/70 to-transparent group-hover:opacity-100">
                                <p className="absolute font-semibold text-white bottom-4 left-4">{photo.title}</p>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default Gallery;