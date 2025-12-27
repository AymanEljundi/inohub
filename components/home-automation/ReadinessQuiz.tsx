"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const questions = [
    {
        id: 1,
        text: "How strong is your WiFi signal in the furthest rooms?",
        options: [
            { text: "Strong everywhere", score: 3 },
            { text: "Spotty in some rooms", score: 2 },
            { text: "Weak / Dead zones", score: 1 },
        ],
    },
    {
        id: 2,
        text: "Do you currently have a neutral wire in your light switches?",
        options: [
            { text: "Yes", score: 3 },
            { text: "No / Not sure", score: 1 },
            { text: "I have smart bulbs already", score: 2 },
        ],
    },
    {
        id: 3,
        text: "How fast is your internet connection?",
        options: [
            { text: "High Speed Fiber (>50Mbps)", score: 3 },
            { text: "Standard DSL/4G", score: 2 },
            { text: "Slow / Unstable", score: 1 },
        ],
    },
];

export function ReadinessQuiz() {
    const [currentStep, setCurrentStep] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const handleAnswer = (optionScore: number) => {
        const newScore = score + optionScore;
        if (currentStep < questions.length - 1) {
            setScore(newScore);
            setCurrentStep(currentStep + 1);
        } else {
            setScore(newScore);
            setShowResult(true);
        }
    };

    const resetQuiz = () => {
        setCurrentStep(0);
        setScore(0);
        setShowResult(false);
    };

    if (showResult) {
        let resultMessage = "";
        let resultColor = "";

        if (score >= 8) {
            resultMessage = "Excellent! Your home is 100% Ready.";
            resultColor = "text-green-600";
        } else if (score >= 5) {
            resultMessage = "Good! Minor upgrades might be needed.";
            resultColor = "text-yellow-600";
        } else {
            resultMessage = "Needs Infrastructure Upgrade.";
            resultColor = "text-red-600";
        }

        return (
            <div className="text-center bg-gray-50 rounded-xl p-8 h-full flex flex-col justify-center items-center">
                <CheckCircle2 className={`w-16 h-16 ${resultColor} mb-4`} />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Readiness Score</h3>
                <p className={`text-xl font-semibold ${resultColor} mb-4`}>{resultMessage}</p>
                <p className="text-gray-600 mb-8">
                    Based on your answers, we can determine the best starting point for your smart home journey.
                </p>
                <div className="flex gap-4">
                    <a href="#consultation" className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors">
                        Book Consultation
                    </a>
                    <button onClick={resetQuiz} className="text-gray-500 hover:text-gray-900 underline">
                        Retake Quiz
                    </button>
                </div>

            </div>
        );
    }

    const question = questions[currentStep];

    return (
        <div className="h-full flex flex-col justify-between">
            <div>
                <div className="flex items-center justify-between mb-6">
                    <span className="text-sm font-medium text-gray-500">Question {currentStep + 1} of {questions.length}</span>
                    <div className="h-2 flex-1 bg-gray-100 ml-4 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-primary transition-all duration-300"
                            style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                        ></div>
                    </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-6">{question.text}</h3>

                <div className="space-y-3">
                    {question.options.map((option, idx) => (
                        <button
                            key={idx}
                            onClick={() => handleAnswer(option.score)}
                            className="w-full text-left p-4 rounded-xl border border-gray-200 hover:border-primary hover:bg-primary/5 transition-all flex justify-between items-center group"
                        >
                            <span className="font-medium text-gray-700 group-hover:text-primary">{option.text}</span>
                            <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-primary opacity-0 group-hover:opacity-100 transition-all" />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
