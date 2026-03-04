import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function AuthenticatedLayout({ children }) {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/login");
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-6 md:px-8 md:py-8 mb-[70px] md:mb-0">
                {children}
            </main>
            <BottomNav />
        </div>
    );
}
