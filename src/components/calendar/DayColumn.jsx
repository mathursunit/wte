"use client";

import { isToday, parseISO } from "date-fns";
import { getDayName, getDayNumber } from "@/lib/dates";
import { cn } from "@/lib/utils";
import MealSlot from "./MealSlot";

export default function DayColumn({ date, meals = {}, onAddMeal }) {
    const isDateToday = isToday(parseISO(date));
    const dayName = getDayName(date);
    const dayNumber = getDayNumber(date);

    return (
        <div
            className={cn(
                "flex flex-col gap-4 p-4 rounded-lg transition-all border",
                isDateToday
                    ? "bg-white border-primary shadow-md ring-1 ring-primary-light"
                    : "bg-transparent border-transparent"
            )}
        >
            <div className="flex flex-row md:flex-col items-baseline md:items-center gap-2 md:gap-0 mb-2">
                <span className={cn(
                    "text-xs font-bold uppercase tracking-widest",
                    isDateToday ? "text-primary" : "text-muted"
                )}>
                    {dayName}
                </span>
                <span className={cn(
                    "text-2xl font-bold",
                    isDateToday ? "text-foreground" : "text-muted"
                )}>
                    {dayNumber}
                </span>
            </div>

            <div className="flex flex-col gap-6">
                <MealSlot
                    date={date}
                    type="breakfast"
                    meal={meals.breakfast}
                    onAdd={onAddMeal}
                />
                <MealSlot
                    date={date}
                    type="lunch"
                    meal={meals.lunch}
                    onAdd={onAddMeal}
                />
                <MealSlot
                    date={date}
                    type="dinner"
                    meal={meals.dinner}
                    onAdd={onAddMeal}
                />
            </div>
        </div>
    );
}
