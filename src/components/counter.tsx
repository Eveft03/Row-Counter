"use client";

import React, { useState } from 'react';
import { Plus, Minus, RotateCcw } from 'lucide-react';



const Counter = () => {
  const [count, setCount] = useState(0);
  

  const incrementCount = () => {
    setCount(prev => prev + 1);
    
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(prev => prev - 1);
      
    }
  };

  const resetCount = () => {
    setCount(0);
   
  };

  return (
    <div className="w-full max-w-md mx-auto bg-gray-50 rounded-xl shadow-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-center text-2xl font-bold mb-6">Crochet Row Counter</h2>
        
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
            className="flex items-center gap-2 px-4 py-2 text-gray-800 hover:text-gray-950 bg-mycolor-light-button-bg hover:bg-mycolor-light-button-hover rounded-md transition-colors duration-200"
            aria-label="Reset counter"
          >
            <RotateCcw className="h-4 w-4" />
            Reset
          </button>

          {/* History Log */}
          {history.length > 0 && (
            <div className="w-full mt-4 p-4 bg-gray-100 rounded-lg">
              <h3 className="text-sm font-medium mb-2">Current row</h3>
              <div className="max-h-32 overflow-y-auto">
               
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Counter;