"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { formatWeekRange, formatDate, getWeekStart } from "@/lib/dates";
import { addDays } from "date-fns";

export default function CalendarNav({ weekStart }) {
    const prevWeek = formatDate(addDays(weekStart, -7));
    const nextWeek = formatDate(addDays(weekStart, 7));
    const today = formatDate(getWeekStart(new Date()));

    return (
        <div className="flex items-center gap-1 md:gap-4">
            <Link
                href={`/calendar?week=${prevWeek}`}
                className="p-2 hover:bg-white rounded-full transition-colors"
            >
                <ChevronLeft size={24} />
            </Link>

            <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
                <h2 className="text-lg md:text-xl font-semibold">
                    {formatWeekRange(weekStart)}
                </h2>
                <Link
                    href={`/calendar?week=${today}`}
                    className="text-xs bg-primary-light text-primary px-3 py-1 rounded-full font-medium hover:bg-primary hover:text-white transition-all w-fit"
                >
                    Today
                </Link>
            </div>

            <Link
                href={`/calendar?week=${nextWeek}`}
                className="p-2 hover:bg-white rounded-full transition-colors"
            >
                <ChevronRight size={24} />
            </Link>
        </div>
    );
}
