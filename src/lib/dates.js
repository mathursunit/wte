import { format, startOfWeek, addDays, isToday, parseISO, isPast, addWeeks, startOfMonth } from "date-fns";

export const formatDate = (date) => format(date, "yyyy-MM-dd");

export const getWeekStart = (date = new Date()) => {
    // Start week on Monday
    return startOfWeek(date, { weekStartsOn: 1 });
};

export const getWeekDates = (weekStart) => {
    return Array.from({ length: 7 }, (_, i) => formatDate(addDays(weekStart, i)));
};

export const formatShort = (dateString) => {
    return format(parseISO(dateString), "EEE, MMM d");
};

export const formatLong = (dateString) => {
    return format(parseISO(dateString), "EEEE, MMMM d");
};

export const getDayName = (dateString) => {
    return format(parseISO(dateString), "EEE");
};

export const getDayNumber = (dateString) => {
    return format(parseISO(dateString), "d");
};

export const formatWeekRange = (weekStart) => {
    const weekEnd = addDays(weekStart, 6);
    if (weekStart.getMonth() === weekEnd.getMonth()) {
        return `${format(weekStart, "MMM d")} - ${format(weekEnd, "d, yyyy")}`;
    }
    return `${format(weekStart, "MMM d")} - ${format(weekEnd, "MMM d, yyyy")}`;
};
