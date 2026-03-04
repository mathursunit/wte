import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/components/providers/AuthProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "SunSar Menu Planner",
  description: "Weekly meal planning for Sara and Sunit",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "SunSar Menu",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="warm">
      <body className={`${inter.variable} font-inter`}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
