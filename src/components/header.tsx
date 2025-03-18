"use client";

import Navbar from "./navbar";
import { Plus, DiamondMinus, RotateCcw } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <div className="bg-mycolor-light-display-bg w-full flex justify-between items-center p-4">
      <button
        className="p-4 text-white rounded-lg hover:bg-mycolor-light-button-hover transition-colors duration-200 flex-none"
        onClick={() => setIsNavbarOpen(true)}
      >
        <DiamondMinus size={24} />
      </button>

      <Navbar isOpen={isNavbarOpen} onClose={() => setIsNavbarOpen(false)} />

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
