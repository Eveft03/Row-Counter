"use client";

import React from "react";
import { DiamondMinus, X } from "lucide-react";

interface HeaderProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

export default function Header({ isSidebarOpen, toggleSidebar }: HeaderProps) {
  return (
    <div className="bg-mycolor-light-display-bg w-full flex justify-between items-center p-2">
      <button
        className="p-4 text-white rounded-lg hover:bg-mycolor-light-button-hover transition-colors duration-200 flex-none"
        onClick={toggleSidebar}
        aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
      >
        {isSidebarOpen ? <X size={24} /> : <DiamondMinus size={24} />}
      </button>

      <header className="w-full max-w-md mx-auto overflow-hidden">
        <div className="flex justify-between items-center p-4">
          <h1 className="text-4xl font-bold text-center text-white flex align-center justify-center w-full">
            Row Counter
          </h1>
        </div>
      </header>
    </div>
  );
}