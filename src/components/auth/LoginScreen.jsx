"use client";

import { signIn } from "next-auth/react";
import { UtensilsCrossed } from "lucide-react";

export default function LoginScreen({ error }) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background px-4">
            <div className="card w-full max-w-[400px] p-8 text-center bg-white">
                <div className="flex justify-center mb-6">
                    <div className="p-4 bg-primary-light rounded-full text-primary">
                        <UtensilsCrossed size={48} />
                    </div>
                </div>

                <h1 className="text-2xl font-bold mb-2">SunSar Menu Planner</h1>
                <p className="text-muted mb-8">Weekly meal planning for Sara & Sunit</p>

                {error && (
                    <div className="mb-6 p-3 bg-danger-light text-danger text-sm rounded-md border border-danger/20">
                        {error === "AccessDenied"
                            ? "Sorry, this app is only for Sara and Sunit."
                            : "An error occurred during sign in."}
                    </div>
                )}

                <button
                    onClick={() => signIn("google", { callbackUrl: "/calendar" })}
                    className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-border rounded-md font-medium text-foreground hover:bg-background transition-colors"
                >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path
                            fill="#EA4335"
                            d="M12 5.04c1.64 0 3.11.56 4.27 1.67l3.2-3.2C17.51 1.64 14.96 1 12 1 7.64 1 3.94 3.53 2.18 7.21l3.75 2.91C6.81 7.02 9.21 5.04 12 5.04z"
                        />
                        <path
                            fill="#4285F4"
                            d="M23.49 12.27c0-.81-.07-1.59-.2-2.34H12v4.43h6.44c-.28 1.47-1.11 2.71-2.36 3.55l3.68 2.85c2.15-1.99 3.39-4.91 3.39-8.49z"
                        />
                        <path
                            fill="#FBBC05"
                            d="M5.93 14.88c-.23-.69-.36-1.43-.36-2.21 0-.78.13-1.52.36-2.21L2.18 7.55C1.19 9.5 1 11.5 1 12.67c0 1.17.19 3.17 1.18 5.12l3.75-2.91z"
                        />
                        <path
                            fill="#34A853"
                            d="M12 23c3.04 0 5.6-.99 7.47-2.69l-3.68-2.85c-1.03.69-2.35 1.1-3.79 1.1-2.79 0-5.18-1.89-6.03-4.43l-3.75 2.91C3.94 20.47 7.64 23 12 23z"
                        />
                    </svg>
                    Sign in with Google
                </button>

                <div className="mt-8 pt-4 border-t border-border">
                    <a
                        href="/privacy.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-muted hover:text-primary transition-colors"
                    >
                        Privacy Policy
                    </a>
                </div>
            </div>
        </div>
    );
}
