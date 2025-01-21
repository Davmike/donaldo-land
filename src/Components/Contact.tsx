import { useContext, useState } from 'react';
import { MyContext } from './Context';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Star, Calendar, MessageSquare, X, Clock } from 'lucide-react';

function Contact() {
    const context = useContext(MyContext);
    const { isHideContact, setIsHideContact }: any = context;
    const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(new Date());
    const [message, setMessage] = useState('');

    const stars = Array(10).fill(null);

    const formatDateTime = (date: Date | null) => {
        if (!date) return '';
        return date.toLocaleString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <AnimatePresence>
            {isHideContact && (
                <div className="fixed inset-0 z-10 flex items-center justify-center overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-[#1E1B4B]/80 backdrop-blur-sm"
                        onClick={() => setIsHideContact(false)}
                    />

                    {stars.map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute text-yellow-300"
                            initial={{
                                x: Math.random() * window.innerWidth,
                                y: Math.random() * window.innerHeight
                            }}
                            animate={{
                                y: [0, -20, 0],
                                opacity: [1, 0.5, 1]
                            }}
                            transition={{
                                duration: 2 + Math.random() * 2,
                                repeat: Infinity,
                                delay: Math.random() * 2
                            }}
                        >
                            <Star size={12} fill="currentColor" />
                        </motion.div>
                    ))}

                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: 180 }}
                        transition={{ type: "spring", bounce: 0.4 }}
                        className="bg-gradient-to-br from-[#2E2A5D] to-[#1E1B4B] text-white rounded-2xl shadow-xl w-[450px] max-w-[90%] p-8 relative z-20"
                    >
                        <motion.button
                            whileHover={{ rotate: 90 }}
                            whileTap={{ scale: 0.9 }}
                            className="absolute text-gray-400 transition-colors top-4 right-4 hover:text-white"
                            onClick={() => setIsHideContact(false)}
                        >
                            <X size={24} />
                        </motion.button>

                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h2 className="flex items-center gap-2 mb-2 text-2xl font-bold">
                                <Rocket className="text-purple-400" />
                                Contact Adventure!
                            </h2>
                            <p className="mb-6 text-sm text-purple-200">
                                Ready for a space journey? Let's plan your visit! 🚀
                            </p>

                            <div className="space-y-6">
                                <div>
                                    <label className="flex items-center block gap-2 mb-2 text-sm text-purple-200">
                                        <Calendar className="text-purple-400" size={18} />
                                        Pick Your Adventure Date & Time
                                    </label>
                                    <div className="flex items-center gap-2">
                                        <DatePicker
                                            selected={selectedDateTime}
                                            onChange={(date) => setSelectedDateTime(date)}
                                            showTimeSelect
                                            dateFormat="MMMM d, yyyy h:mm aa"
                                            className="w-full px-4 py-2 rounded-lg bg-[#2E2A5D] border border-purple-400/30 text-white focus:ring-2 focus:ring-purple-400 focus:border-transparent outline-none"
                                        />
                                        <Clock className="text-purple-400" size={20} />
                                    </div>
                                </div>

                                <div>
                                    <label className="flex items-center block gap-2 mb-2 text-sm text-purple-200">
                                        <MessageSquare className="text-purple-400" size={18} />
                                        Your Space Message
                                    </label>
                                    <textarea
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder={`Tell us about your dream adventure...
                                        
Selected time: ${formatDateTime(selectedDateTime)}`}
                                        className="w-full h-32 px-4 py-2 rounded-lg bg-[#2E2A5D] border border-purple-400/30 text-white focus:ring-2 focus:ring-purple-400 focus:border-transparent outline-none resize-none"
                                    />
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full py-3 font-bold text-white transition-shadow rounded-lg shadow-lg bg-gradient-to-r from-purple-500 to-indigo-500 shadow-purple-500/30 hover:shadow-purple-500/50"
                                >
                                    Launch Message 🚀
                                </motion.button>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

export default Contact;