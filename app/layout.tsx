import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Toast from "@/components/Toast";
import { FitLogProvider } from "@/context/FitLogContext";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  title: "FitLog | Workout Library",
  description:
    "FitLog is a dark, no-nonsense gym companion for planning and tracking workouts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} min-h-screen text-white`}>
        <FitLogProvider>
          <Navbar />
          <main>{children}</main>
          <Toast />
          <Footer />
        </FitLogProvider>
      </body>
    </html>
  );
}