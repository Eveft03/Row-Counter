"use client";
import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, RotateCcw, Save } from "lucide-react";

export default function Timer() {
  const [time, setTime] = useState(0); // time in seconds
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [logs, setLogs] = useState<number[]>([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTime(0);
    setLogs([]);
  };

  const saveTime = () => {
    if (time > 0 && !logs.includes(time)) {
      setLogs((prevLogs) => [time, ...prevLogs]);
      setIsRunning(false);
    }
  };
  // Format time as mm:ss
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="w-full max-w-md mx-auto bg-gray-50 rounded-xl shadow-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-center text-2xl font-bold mb-6">Stopwatch</h2>
        <div className="flex flex-col items-center gap-6">
          {/* Timer Display */}
          <div className="text-6xl font-bold text-gray-800">
            {formatTime(time)}
          </div>

          {/* Control Buttons */}
          <div className="flex gap-4">
            {!isRunning ? (
              <button
                onClick={startTimer}
                className="p-6 rounded-full bg-mycolor-light-button-bg hover:bg-mycolor-light-button-hover text-white transition-colors duration-200 flex items-center justify-center"
                aria-label="Start timer"
              >
                <Play className="h-6 w-6" />
              </button>
            ) : (
              <button
                onClick={stopTimer}
                className="p-6 rounded-full bg-mycolor-light-button-bg hover:bg-mycolor-light-button-hover text-white transition-colors duration-200 flex items-center justify-center"
                aria-label="Stop timer"
              >
                <Pause className="h-6 w-6" />
              </button>
            )}
          </div>

          {/* Reset Button */}
          <div className="flex gap-4">
            <button
              onClick={resetTimer}
              className="flex items-center gap-2 px-4 py-2 text-white hover:text-gray-950 bg-mycolor-light-button-bg hover:bg-mycolor-light-button-hover rounded-md transition-colors duration-200"
              aria-label="Reset timer"
            >
              <RotateCcw className="h-4 w-4" />
              Reset
            </button>
            <button
              onClick={saveTime}
              className="p-3 rounded-md bg-mycolor-light-button-bg hover:bg-mycolor-light-button-hover text-white transition-colors duration-200 flex items-center justify-center"
              aria-label="Stop timer"
            >
              <Save className="h-6 w-6" />
            </button>
          </div>
          {/* Saved Time Display */}
          {
            <div className="w-full mt-4 p-4 bg-gray-100 rounded-lg ">
              <div className="text-sm text-gray-600 mt-2">
                <div className="max-h-32 overflow-y-scroll">
                  <form action="">
                    {logs.map((logTime, index) => (
                      <div key={index}>
                        {" "}
                        Last saved at: {formatTime(logTime)}
                      </div>
                    ))}
                  </form>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  );
}
