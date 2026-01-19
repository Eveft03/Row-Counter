"use client";

import React, { useState } from "react";
import { Plus, Minus, RotateCcw } from "lucide-react";

/*interface HistoryEntry {
  action: "increment" | "decrement";
  timestamp: Date;
}*/

interface RowEntry {
  rowNumber: number;
  action: "increment" | "decrement";
  id: string;
}

export default function Counter() {
  const [count, setCount] = useState(0);
  //const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [row, setRow] = useState<RowEntry[]>([]);

  function incrementCount() {
    setCount((prev) => prev + 1);
    setRow((prev) => [
      ...prev,
      { action: "increment", rowNumber: count + 1, id: crypto.randomUUID() },
    ]);
  }

  function decrementCount() {
    if (count > 0) {
      setCount((prev) => prev - 1);
      setRow((prev) => [
        ...prev,
        { action: "decrement", rowNumber: count - 1 , id: crypto.randomUUID()},
      ]);
    }
  }

  function resetCount() {
    setCount(0);
    setRow([]);
  }

  return (
    <div className="w-full max-w-md mx-auto bg-gray-50 rounded-xl shadow-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-center text-2xl font-bold mb-6">
          Crochet Row Counter
        </h2>

        <div className="flex flex-col items-center gap-6">
          {/* Counter Display */}
          <div className="text-6xl font-bold text-gray-800">{count}</div>

          {/* Control Buttons */}
          <div className="flex gap-4">
            <button
              onClick={decrementCount}
              className="p-6 rounded-full bg-mycolor-light-button-bg hover:bg-mycolor-light-button-hover text-white transition-colors duration-200 flex items-center justify-center"
              aria-label="Decrease row count"
            >
              <Minus className="h-6 w-6" />
            </button>

            <button
              onClick={incrementCount}
              className="p-6 rounded-full bg-mycolor-light-button-bg hover:bg-mycolor-light-button-hover text-white transition-colors duration-200 flex items-center justify-center"
              aria-label="Increase row count"
            >
              <Plus className="h-6 w-6" />
            </button>
          </div>

          {/* Reset Button */}
          <button
            onClick={resetCount}
            className="flex items-center gap-2 px-4 py-2 text-white bg-mycolor-light-button-bg hover:bg-mycolor-light-button-hover rounded-md transition-colors duration-200"
            aria-label="Reset counter and rows"
          >
            <RotateCcw className="h-4 w-4" />
            Reset
          </button>
          
          {/* History Log */}
          {row.length > 0 && (
            <div className="w-full mt-4 p-4 bg-gray-100 rounded-lg max-h-32 overflow-y-scroll ">
              <h3 className="text-sm font-medium mb-2">Current row</h3>
              <div className="">
                {row.map((rowEntry) => (
                  <div key={rowEntry.id} className="text-sm text-gray-600 mb-1">
                    Curently at row {rowEntry.rowNumber}
                  </div>
                ))}
              </div>
            </div>
          )}
          {/*history.length > 0 && (
            <div className="w-full mt-4 p-4 bg-gray-100 rounded-lg max-h-32 overflow-y-scroll ">
              <h3 className="text-sm font-medium mb-2">Current row</h3>
              <div className="">
                {history.slice(-3).map((entry, index) => (
                  <div key={index} className="text-sm text-gray-600 mb-1">
                    Row {entry.action === "increment" ? "added" : "removed"} at{" "}
                    {entry.timestamp.toLocaleTimeString()}
                  </div>
                ))}
              </div>
            </div>
          )*/}
        </div>
      </div>
    </div>
  );
}
