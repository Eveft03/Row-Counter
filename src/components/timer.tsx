"use client";
import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, RotateCcw, Save } from "lucide-react";

export default function Timer() {
  const [time, setTime] = useState(0); // time in seconds
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [logs, setLogs] = useState<{ time: number; message: string }[]>([]);
  const [messages, setMessages] = useState<{ [key: number]: string }>({});
  const [disabledInputs, setDisabledInputs] = useState<{
    [key: number]: boolean;
  }>({});

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
    setMessages({});
    setDisabledInputs({});
  };

  const saveTime = () => {
    if (time > 0 && !logs.some((log) => log.time === time)) {
      const newLog = { time, message: messages[time] || "" };
      setLogs((prevLogs) => [newLog, ...prevLogs]);
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

          {/* Reset and Save Buttons */}
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
              aria-label="Save time"
            >
              <Save className="h-6 w-6" />
            </button>
          </div>

          {/* Saved Time Display */}
          <div className="w-full mt-4 p-4 bg-gray-100 rounded-lg">
            <div className="text-sm text-gray-600 mt-2 max-h-32 overflow-y-scroll">
              <form action="">
                {logs.map((logEntry, index) => (
                  <div key={index} className="flex gap-2">
                    Saved at: {formatTime(logEntry.time)}
                    <input
                      type="text"
                      placeholder="Write a message"
                      value={messages[logEntry.time] || ""}
                      onChange={(e) => {
                        const newMessages = { ...messages };
                        newMessages[logEntry.time] = e.target.value;
                        setMessages(newMessages);
                      }}
                      className="w-full p-2 border rounded"
                      disabled={disabledInputs[logEntry.time] === true}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          setDisabledInputs((prev) => ({
                            ...prev,
                            [logEntry.time]: true,
                          }));
                        }
                      }}
                    />
                  </div>
                ))}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
