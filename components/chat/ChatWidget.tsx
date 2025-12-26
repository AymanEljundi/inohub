"use client";

import { useState, useEffect } from "react";
import { MessageSquare, X, Send, Minus } from "lucide-react";

export function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [messages, setMessages] = useState<{ role: 'bot' | 'user', text: string }[]>([
        { role: 'bot', text: 'Hi! Have a question about solar, EV charging or security systems? We’re here to help.' }
    ]);

    // Show widget after delay, persist across navigation
    useEffect(() => {
        const hasSeenChat = sessionStorage.getItem('chat_visible');

        if (hasSeenChat) {
            setTimeout(() => setIsVisible(true), 0);
        } else {
            const timer = setTimeout(() => {
                setIsVisible(true);
                sessionStorage.setItem('chat_visible', 'true');
            }, 15000); // 15s delay for first-time visitors
            return () => clearTimeout(timer);
        }
    }, []);

    if (!isVisible) return null;

    const toggleChat = () => setIsOpen(!isOpen);

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, this would send to backend
        alert("This is a demo chat. In production, this would connect to your support team.");
    };

    return (
        <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-4 pointer-events-none">
            {/* Chat Window */}
            {isOpen && (
                <div className="w-[350px] h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col pointer-events-auto animate-in slide-in-from-bottom-10 fade-in duration-200 origin-bottom-right">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-4 flex items-center justify-between text-white">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                                <MessageSquare className="h-5 w-5 text-white" />
                            </div>
                            <div>
                                <div className="font-bold">TechStore Support</div>
                                <div className="text-xs text-gray-300 flex items-center gap-1">
                                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                    Online
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-1">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-1 hover:bg-white/10 rounded transition-colors"
                                aria-label="Minimize Chat"
                            >
                                <Minus className="h-5 w-5" />
                            </button>
                        </div>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 bg-gray-50 p-4 overflow-y-auto space-y-4">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`
                                    max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed
                                    ${msg.role === 'user'
                                        ? 'bg-blue-600 text-white rounded-tr-none'
                                        : 'bg-white text-gray-800 border border-gray-200 rounded-tl-none shadow-sm'}
                                `}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}

                        {/* Quick Replies */}
                        {messages.length === 1 && (
                            <div className="flex flex-wrap gap-2 mt-4">
                                {["Get a quote", "Find EV Charging", "Academy Info"].map((opt) => (
                                    <button
                                        key={opt}
                                        onClick={() => setMessages([...messages, { role: 'user', text: opt }])}
                                        className="text-xs bg-white border border-blue-200 text-blue-600 hover:bg-blue-50 px-3 py-1.5 rounded-full transition-colors"
                                    >
                                        {opt}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Input Area */}
                    <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-gray-100">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Type a message..."
                                className="w-full pl-4 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm transition-all"
                            />
                            <button
                                type="submit"
                                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                aria-label="Send Message"
                            >
                                <Send className="h-5 w-5" />
                            </button>
                        </div>
                        <div className="text-[10px] text-center text-gray-400 mt-2">
                            Powered by TechStore AI
                        </div>
                    </form>
                </div>
            )}

            {/* Toggle Button */}
            {!isOpen && (
                <button
                    onClick={toggleChat}
                    className="h-16 w-16 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg shadow-blue-600/30 flex items-center justify-center transition-all hover:scale-110 pointer-events-auto group"
                    aria-label="Chat with us"
                >
                    <div className="relative">
                        <MessageSquare className="h-7 w-7 transition-transform group-hover:rotate-12" />
                        <span className="absolute -top-1 -right-1 flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 border-2 border-blue-600"></span>
                        </span>
                    </div>
                </button>
            )}
        </div>
    );
}
