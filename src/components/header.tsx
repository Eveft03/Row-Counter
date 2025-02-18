"use client";

import React, { useState } from "react";
import { Plus, Minus, RotateCcw } from "lucide-react";

export default function Header() {
  return (
    <div className=" bg-mycolor-light-display-bg">
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
