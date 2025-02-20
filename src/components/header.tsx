"use client";

import Navbar from "./navbar";
import { Plus, DiamondMinus, RotateCcw } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <div className="bg-mycolor-light-display-bg flex flex-row">
      <button
        className="p-3 text-white"
        onClick={() => setIsNavbarOpen(!isNavbarOpen)}
      >
        <DiamondMinus size={24} />
      </button>
      <Navbar isOpen={isNavbarOpen} onClose={() => setIsNavbarOpen(false)} />

      <header className="w-full max-w-md mx-auto rounded-xl shadow-lg overflow-hidden">
        <div className="flex justify-between items-center p-4">
          <h1 className="text-4xl font-bold text-center text-white flex align-center justify-center rounded-xl w-full">
            Row Counter
          </h1>
        </div>
      </header>
    </div>
  );
}
