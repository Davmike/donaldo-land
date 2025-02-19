import { useContext, useState } from 'react';
import { MyContext } from './Context';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Star, Calendar, MessageSquare, Clock, Phone } from 'lucide-react';

interface FormErrors {
    mobileNumber: string;
    message: string;
    dateTime: string;
}

function Contact() {
    // context
    const context = useContext(MyContext);
    const { setIsHideContact }: any = context;

    // states for only contact
    const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(new Date());
    const [message, setMessage] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [isSending, setIsSending] = useState(false);
    const [sendStatus, setSendStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [errors, setErrors] = useState<FormErrors>({
        mobileNumber: '',
        message: '',
        dateTime: ''
    });

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

    const validateForm = () => {
        const newErrors: FormErrors = {
            mobileNumber: '',
            message: '',
            dateTime: ''
        };
        let isValid = true;

        if (!mobileNumber.trim()) {
            newErrors.mobileNumber = "Mobile number can't be empty";
            isValid = false;
        } else if (!/^\+?[\d\s-]{10,}$/.test(mobileNumber.trim())) {
            newErrors.mobileNumber = "Please enter a valid mobile number";
            isValid = false;
        }

        if (!message.trim()) {
            newErrors.message = "Message can't be empty";
            isValid = false;
        }

        if (!selectedDateTime) {
            newErrors.dateTime = "Please select a date and time";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSendMessage = () => {
        if (!validateForm()) {
            return;
        }

        setIsSending(true);
        setSendStatus('sending');

        const formattedMessage = `
            Your adventure booking details:
            Date and Time: ${formatDateTime(selectedDateTime)}
            Mobile Number: ${mobileNumber}
            Message: ${message}
            We're excited to see you soon! 🚀
        `;

        // WhatsApp link to send message
        const whatsappLink = `https://wa.me/${+995579124074}?text=${encodeURIComponent(formattedMessage)}`;

        // Open WhatsApp in a new window or tab
        window.open(whatsappLink, '_blank');

        setSendStatus('success');
        setMessage('');
        setMobileNumber('');
        setTimeout(() => {
            setIsHideContact(false);
            setSendStatus('idle');
        }, 2000);

        setIsSending(false);
    };

    const inputClassName = (error: string) => `
        w-full px-4 py-2 rounded-lg bg-[#2E2A5D] 
        border ${error ? 'border-red-500' : 'border-purple-400/30'} 
        text-white focus:ring-2 
        ${error ? 'focus:ring-red-500' : 'focus:ring-purple-400'} 
        focus:border-transparent outline-none
        transition-colors duration-200
    `

    return (
        <AnimatePresence>
            {/* {isHideContact && ( */}
            <div className="bg-gradient-to-b from-[#130538] to-[#20095F] min-h-screen relative overflow-hidden pb-[50px]">
                {/* contact name */}
                <div className='flex items-center justify-center pb-[50px] mt-[150px]'>
                    <h3 className='text-xl font-bold text-white'>CONTACT</h3>
                </div>
                {/* main div for message and map */}
                <div className='flex justify-center items-start gap-8 flex-col lg:flex-row max-w-[1920px] mx-auto px-4'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(123,67,251,0.3)] relative z-20"
                    >
                        <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-purple-500/20 to-indigo-500/20"></div>
                        <iframe
                            className="w-full h-[500px] lg:h-[570px] border-0 filter contrast-125"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2981.5610293169893!2d41.61716747605459!3d41.64361897126841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406787e0ed4f4529%3A0x921a36a7a504c487!2sDONALDOLAND!5e0!3m2!1sen!2sge!4v1739880907433!5m2!1sen!2sge"
                        >
                            <a href="https://www.gps.ie/">gps vehicle tracker</a>
                        </iframe>
                        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#20095F] to-transparent pointer-events-none"></div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    // className="absolute inset-0 bg-[#1E1B4B]/80 backdrop-blur-sm"
                    // onClick={() => setIsHideContact(false)}
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
                        className="bg-gradient-to-br from-[#2E2A5D] to-[#1E1B4B] text-white rounded-2xl shadow-xl w-full lg:w-[450px] p-8 relative z-20"
                    >
                        {/* <motion.button
                        whileHover={{ rotate: 90 }}
                        whileTap={{ scale: 0.9 }}
                        className="absolute text-gray-400 transition-colors top-4 right-4 hover:text-white"
                        onClick={() => setIsHideContact(false)}
                    >
                        <X size={24} />
                    </motion.button> */}

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
                                        <Phone className="text-purple-400" size={18} />
                                        Mobile Number
                                    </label>
                                    <input
                                        type="tel"
                                        value={mobileNumber}
                                        onChange={(e) => setMobileNumber(e.target.value)}
                                        placeholder="Enter your mobile number"
                                        className={inputClassName(errors.mobileNumber)}
                                    />
                                    {errors.mobileNumber && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="mt-1 text-sm text-red-500"
                                        >
                                            {errors.mobileNumber}
                                        </motion.p>
                                    )}
                                </div>

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
                                            className={inputClassName(errors.dateTime)}
                                        />
                                        <Clock className="text-purple-400" size={20} />
                                    </div>
                                    {errors.dateTime && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="mt-1 text-sm text-red-500"
                                        >
                                            {errors.dateTime}
                                        </motion.p>
                                    )}
                                </div>

                                <div>
                                    <label className="flex items-center block gap-2 mb-2 text-sm text-purple-200">
                                        <MessageSquare className="text-purple-400" size={18} />
                                        Your Space Message
                                    </label>
                                    <textarea
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="Tell us about your dream adventure..."
                                        className={`${inputClassName(errors.message)} h-32 resize-none`}
                                    />
                                    {errors.message && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="mt-1 text-sm text-red-500"
                                        >
                                            {errors.message}
                                        </motion.p>
                                    )}
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={handleSendMessage}
                                    disabled={isSending}
                                    className={`w-full py-3 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-shadow ${isSending ? 'opacity-50 cursor-not-allowed' : ''}`}
                                >
                                    {sendStatus === 'sending' ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                            >
                                                {/* <Mail size={20} /> */}
                                            </motion.div>
                                            Sending...
                                        </span>
                                    ) : sendStatus === 'success' ? (
                                        'Message Sent! 🎉'
                                    ) : sendStatus === 'error' ? (
                                        'Error Sending Message 😢'
                                    ) : (
                                        'Send Message 🚀'
                                    )}
                                </motion.button>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
            {/* )} */}
        </AnimatePresence>
    );
}

export default Contact;
