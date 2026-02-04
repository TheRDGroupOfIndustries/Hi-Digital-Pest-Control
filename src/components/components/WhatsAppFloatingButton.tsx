"use client";

import { X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WhatsAppFloatingButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const whatsappUrl = `https://wa.me/918707751161?text=Hi! I am interested in Hi Digital's Pest Control services.`;

    const handleChatClick = () => {
        window.open(whatsappUrl, "_blank");
    };

    return (
        <div className="fixed bottom-6 right-6 z-[999999] flex flex-col items-end">
            {/* Click Outside Backdrop */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 z-[-1] bg-transparent cursor-default"
                    />
                )}
            </AnimatePresence>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20, transformOrigin: "bottom right" }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        className="mb-4 w-[320px] md:w-[350px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-neutral-100 relative z-10"
                    >
                        {/* Header */}
                        <div className="bg-[#25D366] p-6 text-white relative">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg leading-tight">Start a Conversation</h3>
                                    <p className="text-sm opacity-90">Hi! Click one of our member below to chat on WhatsApp</p>
                                </div>
                            </div>
                        </div>
                        {/* Body */}
                        <div className="p-4 bg-[#f0f2f5]">
                            <div
                                className="bg-white p-4 rounded-xl flex items-center justify-between group cursor-pointer hover:bg-neutral-50 transition-colors shadow-sm"
                                onClick={handleChatClick}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="relative">
                                        <div className="w-12 h-12 bg-neutral-200 rounded-full flex items-center justify-center overflow-hidden border-2 border-neutral-100">
                                            <img
                                                src="https://pps.whatsapp.net/v/t61.24694-24/491876918_772748358608371_3202435974893338420_n.jpg?ccb=11-4&oh=01_Q5Aa3gGM8w6_z8j5B9APIe5dcJP70-LUMlpi7Ke6gXBIPsJ2JA&oe=6986E826&_nc_sid=5e03e0&_nc_cat=102"
                                                alt="Hi Digital Pest Control"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-neutral-800">Hi Digital Pest Control</h4>
                                    </div>
                                </div>
                                <div className="text-[#25D366] transition-transform group-hover:scale-110">
                                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                </div>
                            </div>
                            <p className="text-[10px] text-neutral-400 text-center mt-4 uppercase font-medium">
                                The team typically replies in a few minutes.
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group relative
          ${isOpen ? "bg-white text-neutral-800" : "bg-[#25D366] text-white"}`}
                aria-label={isOpen ? "Close chat" : "Chat on WhatsApp"}
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                        >
                            <X className="w-7 h-7" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="chat"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            className="flex items-center justify-center"
                        >
                            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Tooltip (only when closed) */}
                {!isOpen && (
                    <span className="absolute right-full mr-3 bg-white text-black text-sm font-medium px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none border border-neutral-100">
                        Chat with us
                    </span>
                )}
            </button>
        </div>
    );
};

export default WhatsAppFloatingButton;