"use client";

import { useState } from "react";
import CalendarNav from "./CalendarNav";
import DayColumn from "./DayColumn";
import GenerateMealsModal from "./GenerateMealsModal";
import { Sparkles } from "lucide-react";

export default function CalendarContainer({ weekStart, weekDates, mealsByDate }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                <CalendarNav weekStart={weekStart} />

                <button
                    onClick={() => setIsModalOpen(true)}
                    className="btn btn-primary shadow-lg shadow-primary/20 self-start md:self-auto"
                >
                    <Sparkles size={18} />
                    <span>Magic Generate</span>
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-7 gap-2 md:gap-4 md:items-start">
                {weekDates.map((date) => (
                    <DayColumn
                        key={date}
                        date={date}
                        meals={mealsByDate[date]}
                        onAddMeal={() => { }}
                    />
                ))}
            </div>

            <GenerateMealsModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onGenerate={() => {
                    alert("Generating meals securely via Server Action...");
                    setIsModalOpen(false);
                }}
            />
        </>
    );
}
