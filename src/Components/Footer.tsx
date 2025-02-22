import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin, Phone } from 'lucide-react';

function Footer() {
    return (
        <footer className="bg-gradient-to-b from-[#130538] to-[#20095F] text-white py-12">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* Company Info */}
                    <div className='z-20'>
                        <h3 className="mb-4 text-2xl font-bold">DonaldoLand</h3>
                        <p className="text-gray-300">Where dreams come true and adventures begin!</p>
                    </div>

                    {/* Contact Info */}
                    <div className='z-20'>
                        <h4 className="mb-4 text-xl font-semibold">Contact Us</h4>
                        <div className="space-y-2">
                            <p className="flex items-center gap-2">
                                <MapPin size={18} />
                                88 Zurab Gorgiladze St, Batumi
                            </p>
                            <p className="flex items-center gap-2">
                                <Phone size={18} />
                                +995 555 123 456
                            </p>
                            <p className="flex items-center gap-2">
                                <Mail size={18} />
                                info@donaldoland.ge
                            </p>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className='z-20'>
                        <h4 className="mb-4 text-xl font-semibold">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="transition-colors hover:text-purple-400">
                                <Facebook size={24} />
                            </a>
                            <a href="#" className="transition-colors hover:text-purple-400">
                                <Instagram size={24} />
                            </a>
                            <a href="#" className="transition-colors hover:text-purple-400">
                                <Twitter size={24} />
                            </a>
                            <a href="#" className="transition-colors hover:text-purple-400">
                                <Youtube size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Website Builder */}
                    <div className='z-20'>
                        <h4 className="mb-4 text-xl font-semibold">Created By</h4>
                        <p className="text-gray-300">
                            Website designed and developed by
                            <span className="block mt-1 font-bold text-purple-400">David Mikeladze</span>
                        </p>
                    </div>
                </div>

                {/* Copyright */}
                <div className="z-20 pt-8 mt-8 text-center text-gray-400 border-t border-gray-700">
                    <p>© {new Date().getFullYear()} DonaldoLand. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;