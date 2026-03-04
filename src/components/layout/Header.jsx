"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { UtensilsCrossed, LogOut, Palette } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {
    const pathname = usePathname();
    const { data: session } = useSession();

    const navLinks = [
        { label: "Calendar", href: "/calendar" },
        { label: "Recipes", href: "/recipes" },
        { label: "Shopping", href: "/shopping" },
        { label: "Tracker", href: "/stats" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full h-[60px] bg-white border-b border-border-light flex items-center justify-between px-4 md:px-8">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 text-primary font-semibold text-lg">
                <UtensilsCrossed size={24} />
                <span className="hidden md:block">SunSar Menu</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
                {navLinks.map((link) => {
                    const isActive = pathname.startsWith(link.href);
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "px-4 py-2 rounded-md text-sm font-medium transition-all",
                                isActive
                                    ? "bg-primary-light text-primary"
                                    : "text-muted hover:text-foreground hover:bg-background"
                            )}
                        >
                            {link.label}
                        </Link>
                    );
                })}
            </nav>

            {/* Profile & Actions */}
            <div className="flex items-center gap-3">
                {/* Placeholder for Theme Switcher */}
                <button className="p-2 text-muted hover:text-foreground bg-background rounded-full transition-colors">
                    <Palette size={20} />
                </button>

                {session?.user && (
                    <>
                        <img
                            src={session.user.image}
                            alt={session.user.name}
                            className="w-8 h-8 rounded-full border border-border"
                        />
                        <button
                            onClick={() => signOut()}
                            className="p-2 text-muted hover:text-danger hover:bg-danger-light rounded-full transition-colors"
                            title="Logout"
                        >
                            <LogOut size={20} />
                        </button>
                    </>
                )}
            </div>
        </header>
    );
}
