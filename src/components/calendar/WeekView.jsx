import { getWeekStart, getWeekDates } from "@/lib/dates";
import CalendarContainer from "./CalendarContainer";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

export default async function WeekView({ searchParams }) {
    const session = await getServerSession(authOptions);
    const weekParam = searchParams?.week;
    const weekStart = weekParam ? new Date(weekParam) : getWeekStart();
    const weekDates = getWeekDates(weekStart);

    // Fetch meal plans for the week
    const mealPlans = await prisma.mealPlan.findMany({
        where: {
            userId: session.user.id,
            date: { in: weekDates },
        },
        include: {
            recipe: true,
        },
    });

    // Group meals by date
    const mealsByDate = weekDates.reduce((acc, date) => {
        const dayMeals = mealPlans.filter((mp) => mp.date === date);
        acc[date] = {
            breakfast: dayMeals.find((m) => m.mealType === "breakfast"),
            lunch: dayMeals.find((m) => m.mealType === "lunch"),
            dinner: dayMeals.find((m) => m.mealType === "dinner"),
        };
        return acc;
    }, {});

    return (
        <div className="animate-in fade-in duration-500">
            <CalendarContainer
                weekStart={weekStart}
                weekDates={weekDates}
                mealsByDate={mealsByDate}
            />
        </div>
    );
}
