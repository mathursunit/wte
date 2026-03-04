import WeekView from "@/components/calendar/WeekView";

export default async function CalendarPage({ searchParams }) {
    const params = await searchParams;
    return <WeekView searchParams={params} />;
}
