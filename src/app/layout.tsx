"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="h-screen w-screen bg-mycolor-light-bg grid grid-cols-1 grid-rows-[auto_1fr] overflow-hidden">
          {/* Header */}
          <Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

          {/* Main content area with sidebar */}
          <div className="relative flex h-full overflow-hidden">
            {/* Sidebar - absolute positioned for slide effect */}
            <div
              className={`absolute z-10 h-full transition-transform duration-300 ease-in-out ${
                isSidebarOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <Sidebar />
            </div>

            {/* Overlay - only visible when sidebar is open */}
            {isSidebarOpen && (
              <div
                className="absolute inset-0 bg-black bg-opacity-50 z-5 transition-opacity duration-300 "
                onClick={() => setIsSidebarOpen(false)}
                aria-hidden="true"
              />
            )}

            {/* Main content */}
            <div className="flex-1 overflow-y-auto p-6">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
