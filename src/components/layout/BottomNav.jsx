"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarDays, UtensilsCrossed, ShoppingCart, ChefHat } from "lucide-react";
import { cn } from "@/lib/utils";

export default function BottomNav() {
    const pathname = usePathname();

    const navItems = [
        { label: "Calendar", href: "/calendar", icon: CalendarDays },
        { label: "Recipes", href: "/recipes", icon: UtensilsCrossed },
        { label: "Shopping", href: "/shopping", icon: ShoppingCart },
        { label: "Stats", href: "/stats", icon: ChefHat },
    ];

    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-border-light h-[64px] pb-[env(safe-area-inset-bottom)] z-50 md:hidden flex items-center justify-around">
            {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname.startsWith(item.href);

                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                            "flex flex-col items-center justify-center gap-1 w-full h-full text-xs transition-colors",
                            isActive ? "text-primary font-medium" : "text-muted hover:text-foreground"
                        )}
                    >
                        <Icon size={20} />
                        <span>{item.label}</span>
                    </Link>
                );
            })}
        </nav>
    );
}
