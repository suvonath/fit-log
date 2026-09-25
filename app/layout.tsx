import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FitLogProvider } from "@/context/FitLogContext";

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
      <body className="min-h-screen bg-[#111111] text-white">
     

        <FitLogProvider>
             <Navbar />
          <main>{children}</main>
        </FitLogProvider>

        <Footer />
      </body>
    </html>
  );
}
