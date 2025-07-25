"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Plus, RotateCcw, Pause  } from 'lucide-react';
import { setHeapSnapshotNearHeapLimit } from 'v8';


export default function StopWatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null); 
  const startRef = useRef(0);

function start(){
  startRef.current = Date.now() - time * 100;
  intervalRef.current = setInterval(() => {
  setTime(Math.floor((Date.now() - startRef.current) / 1000));
},1000);
setRunning(true);


}

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
              <Pause className="h-6 w-6" />
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
            aria-label="Reset counter"
          >
            <RotateCcw className="h-4 w-4" />
            Reset
          </button>

          {/* History Log */}
         {history.length > 0 && (
             <div className="w-full mt-4 p-4 bg-gray-100 rounded-lg ">
              <h3 className="text-sm font-medium mb-2">Current row</h3>
              <div className="max-h-32 overflow-y-scroll">
                {history.slice(-3).map((entry, index) => (
                  <div key={index} className="text-sm text-gray-600 mb-1">
                    Row {entry.action === 'increment' ? 'added' : 'removed'} at{' '}
                    {entry.timestamp.toLocaleTimeString()}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

