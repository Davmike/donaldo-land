// import React from 'react';
// import { Home, Users, Briefcase, Mail, Settings, LogOut } from 'lucide-react';

// interface SidebarProps {
//     isOpen: boolean;
//     onClose: () => void;
// }

// const menuItems = [
//     { icon: Home, label: 'Home', delay: 100 },
//     { icon: Users, label: 'About Us', delay: 200 },
//     { icon: Briefcase, label: 'Our Work', delay: 300 },
//     { icon: Mail, label: 'Contact', delay: 400 },
//     { icon: Settings, label: 'Settings', delay: 500 },
// ];

// const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
//     return (
//         <>
//             {/* Backdrop */}
//             <div
//                 onClick={onClose}
//                 className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
//                     }`}
//             />

//             {/* Sidebar */}
//             <aside
//                 className={`fixed top-0 left-0 h-full w-80 bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-2xl transform transition-all duration-500 ease-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
//                     }`}
//             >
//                 {/* Profile Section */}
//                 <div className="p-8 border-b border-slate-700/50">
//                     <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500">
//                         <span className="text-3xl font-bold">JD</span>
//                     </div>
//                     <h2 className="text-xl font-bold text-center">John Doe</h2>
//                     <p className="mt-1 text-sm text-center text-slate-400">Premium Member</p>
//                 </div>

//                 {/* Navigation */}
//                 <nav className="p-6">
//                     <ul className="space-y-2">
//                         {menuItems.map((item, index) => (
//                             <li
//                                 key={item.label}
//                                 style={{
//                                     opacity: isOpen ? 1 : 0,
//                                     transform: isOpen ? 'translateX(0)' : 'translateX(-20px)',
//                                     transition: `all 0.4s ease-out ${item.delay}ms`,
//                                 }}
//                             >
//                                 <a
//                                     href="#"
//                                     className="flex items-center gap-4 px-4 py-3 transition-colors rounded-lg text-slate-300 hover:text-white hover:bg-white/10 group"
//                                 >
//                                     <item.icon
//                                         size={20}
//                                         className="transition-transform group-hover:scale-110"
//                                     />
//                                     <span className="font-medium">{item.label}</span>
//                                 </a>
//                             </li>
//                         ))}
//                     </ul>
//                 </nav>

//                 {/* Footer */}
//                 <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-slate-700/50">
//                     <button
//                         onClick={onClose}
//                         className="flex items-center w-full gap-4 px-4 py-3 transition-colors rounded-lg text-slate-300 hover:text-white hover:bg-white/10"
//                     >
//                         <LogOut size={20} />
//                         <span className="font-medium">Logout</span>
//                     </button>
//                 </div>
//             </aside>
//         </>
//     );
// };

// export default Sidebar;