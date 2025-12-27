"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { MessageSquare, Send, X } from "lucide-react";

type Message = {
    role: 'bot' | 'user';
    text: string;
};

const KNOWLEDGE_BASE = [
    { keywords: ["api", "sdk", "developer", "key"], answer: "You can get API keys instantly from the Developer Portal. Check out the snippet generator there!" },
    { keywords: ["invest", "series a", "deck", "finance"], answer: "We are currently open for Series A discussions. You can download our latest Pitch Deck from the Investor Hub." },
    { keywords: ["solar", "energy", "power", "panel"], answer: "Our Solar solutions are turnkey. We handle design, supply, and grid integration. Would you like a quote?" },
    { keywords: ["price", "cost", "quote"], answer: "Pricing depends on scale. For Enterprise deployments, we recommend scheduling a site survey." },
    { keywords: ["contact", "email", "phone", "support"], answer: "You can reach our 24/7 NOC team at support@techstorelb.com or +961 1 555 000." },
];

export function ChatWidget() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Initial Greeting based on Route
    useEffect(() => {
        let greeting = "Hi! How can I help you efficiently today?";

        if (pathname?.includes('/investors')) {
            greeting = "Welcome to the Investor Hub. Interested in our Series A metrics?";
        } else if (pathname?.includes('/developers')) {
            greeting = "Hi Dev! Need help with the API key or documentation?";
        } else if (pathname?.includes('/solutions')) {
            greeting = "Looking for a specialized infrastructure solution?";
        }

        setMessages([{ role: 'bot', text: greeting }]);

        // Show widget logic
        const hasSeenChat = sessionStorage.getItem('chat_visible');
        if (hasSeenChat) {
            setTimeout(() => setIsVisible(true), 1000);
        } else {
            const timer = setTimeout(() => {
                setIsVisible(true);
                sessionStorage.setItem('chat_visible', 'true');
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [pathname]);

    // Auto-scroll
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isTyping]);

    const handleSendMessage = async (e: React.FormEvent, customText?: string) => {
        e.preventDefault();

        const text = customText || (e.target as any).message?.value;
        if (!text) return;

        // Add User Message
        setMessages(prev => [...prev, { role: 'user', text }]);

        // Reset form if submitted via event
        if (!customText) {

            (e.target as any).reset();
        }

        // Simulate AI Thinking
        setIsTyping(true);

        setTimeout(() => {
            // Simple Keyword Matching logic
            const lowerInput = text.toLowerCase();
            let response = "I'll connect you with a specialist who can answer that in detail.";

            const match = KNOWLEDGE_BASE.find(kb =>
                kb.keywords.some(k => lowerInput.includes(k))
            );

            if (match) {
                response = match.answer;
            }

            setMessages(prev => [...prev, { role: 'bot', text: response }]);
            setIsTyping(false);
        }, 1500); // 1.5s simulated delay
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-4 pointer-events-none font-sans">
            {/* Chat Window */}
            {isOpen && (
                <div className="w-[350px] h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col pointer-events-auto animate-in slide-in-from-bottom-10 fade-in duration-200 origin-bottom-right">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-4 flex items-center justify-between text-white shadow-md">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm relative">
                                <MessageSquare className="h-5 w-5 text-white" />
                                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-gray-900 rounded-full"></span>
                            </div>
                            <div>
                                <div className="font-bold text-sm">TechStore Assistant</div>
                                <div className="text-[10px] text-gray-300 uppercase tracking-wider">
                                    AI Powered
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-1 hover:bg-white/10 rounded-full transition-colors"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 bg-gray-50 p-4 overflow-y-auto space-y-4">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`
                                    max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm
                                    ${msg.role === 'user'
                                        ? 'bg-red-600 text-white rounded-br-none'
                                        : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none'}
                                `}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}

                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="bg-white border border-gray-200 p-3 rounded-2xl rounded-bl-none shadow-sm flex gap-1 items-center">
                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Quick Replies (Only if few messages) */}
                    {messages.length < 3 && (
                        <div className="px-4 pb-2 bg-gray-50 flex gap-2 overflow-x-auto no-scrollbar">
                            {["Pricing?", "Invest", "API Keys"].map(opt => (
                                <button
                                    key={opt}
                                    onClick={(e) => handleSendMessage(e, opt)}
                                    className="text-xs font-medium bg-white border border-gray-200 text-gray-600 hover:text-red-600 hover:border-red-200 px-3 py-1.5 rounded-full whitespace-nowrap transition-colors shadow-sm"
                                >
                                    {opt}
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Input Area */}
                    <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-gray-100">
                        <div className="relative flex items-center gap-2">
                            <input
                                name="message"
                                type="text"
                                placeholder="Ask about solar, APIs, or investment..."
                                autoComplete="off"
                                className="flex-1 pl-4 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500/20 focus:border-red-500 outline-none text-sm transition-all"
                            />
                            <button
                                type="submit"
                                disabled={isTyping}
                                className="p-2.5 bg-red-600 text-white rounded-xl hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
                            >
                                <Send className="h-4 w-4" />
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* Floating Trigger Button */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="h-14 w-14 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-xl shadow-red-600/20 flex items-center justify-center transition-all hover:scale-105 pointer-events-auto group relative"
                >
                    <MessageSquare className="h-6 w-6" />
                    {/* Notification Dot */}
                    <span className="absolute top-0 right-0 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-400 border-2 border-white"></span>
                    </span>
                </button>
            )}
        </div>
    );
}
