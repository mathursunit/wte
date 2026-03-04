"use client";

import { useState } from "react";
import { X, Sparkles, Calendar, ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const CUISINES = [
    { id: "indian", name: "Indian", icon: "🍛" },
    { id: "italian", name: "Italian", icon: "🍝" },
    { id: "mexican", name: "Mexican", icon: "🌮" },
    { id: "mediterranean", name: "Mediterranean", icon: "🥗" },
    { id: "asian", name: "Asian", icon: "🍱" },
    { id: "american", name: "American", icon: "🍔" },
];

export default function GenerateMealsModal({ isOpen, onClose, onGenerate }) {
    const [selectedCuisines, setSelectedCuisines] = useState(["indian", "italian"]);
    const [difficulty, setDifficulty] = useState("moderate");

    if (!isOpen) return null;

    const toggleCuisine = (id) => {
        setSelectedCuisines(prev =>
            prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
        );
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-background/80 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative card w-full max-w-[440px] bg-white shadow-2xl animate-in zoom-in-95 duration-200">
                <div className="flex items-center justify-between p-6 border-b border-border-light">
                    <h2 className="text-xl font-bold">Generate Weekly Meals</h2>
                    <button onClick={onClose} className="p-1 hover:bg-background rounded-full transition-colors">
                        <X size={20} />
                    </button>
                </div>

                <div className="p-6 space-y-6">
                    {/* Week Selector Placeholder */}
                    <div className="space-y-2">
                        <label className="text-sm font-semibold">Week Starting</label>
                        <div className="flex items-center gap-3 p-3 border border-border rounded-md bg-white">
                            <Calendar size={18} className="text-muted" />
                            <span className="text-sm">Oct 28 - Nov 3, 2024</span>
                            <ChevronDown size={16} className="ml-auto text-muted" />
                        </div>
                    </div>

                    {/* Cuisine Selector */}
                    <div className="space-y-3">
                        <label className="text-sm font-semibold">Select Cuisines</label>
                        <div className="grid grid-cols-3 gap-3">
                            {CUISINES.map((cuisine) => {
                                const isSelected = selectedCuisines.includes(cuisine.id);
                                return (
                                    <button
                                        key={cuisine.id}
                                        onClick={() => toggleCuisine(cuisine.id)}
                                        className={cn(
                                            "flex flex-col items-center gap-2 p-3 rounded-xl border-2 transition-all relative",
                                            isSelected
                                                ? "bg-primary-light border-primary shadow-sm"
                                                : "bg-white border-transparent hover:border-border hover:bg-background"
                                        )}
                                    >
                                        <span className="text-2xl">{cuisine.icon}</span>
                                        <span className={cn("text-xs font-medium", isSelected ? "text-primary" : "text-muted")}>
                                            {cuisine.name}
                                        </span>
                                        {isSelected && (
                                            <div className="absolute top-1 right-1 bg-primary text-white rounded-full p-0.5">
                                                <Check size={8} strokeWidth={4} />
                                            </div>
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Difficulty Level */}
                    <div className="space-y-3">
                        <label className="text-sm font-semibold">Difficulty Level</label>
                        <div className="flex p-1 bg-background rounded-lg border border-border">
                            {['quick', 'moderate', 'advanced'].map((level) => (
                                <button
                                    key={level}
                                    onClick={() => setDifficulty(level)}
                                    className={cn(
                                        "flex-1 py-2 text-xs font-semibold rounded-md capitalize transition-all",
                                        difficulty === level
                                            ? "bg-white text-primary shadow-sm"
                                            : "text-muted hover:text-foreground"
                                    )}
                                >
                                    {level}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="p-6">
                    <button
                        onClick={onGenerate}
                        className="w-full btn btn-primary py-4 h-auto shadow-lg shadow-primary/20 flex items-center justify-center gap-2 text-base"
                    >
                        <Sparkles size={20} />
                        Generate Week
                    </button>
                </div>
            </div>
        </div>
    );
}
