"use client";

import React, { useState } from "react";
import { Plus, Check } from "lucide-react";

export function Steps() {
  const [steps, setSteps] = useState([
    { id: 1, text: "Chain 25", completed: false },
    { id: 2, text: "Single crochet in 2nd chain from hook", completed: false },
    { id: 3, text: "Single crochet across to end", completed: false },
  ]);

  const toggleStep = (id: number) => {
    setSteps(
      steps.map((step) =>
        step.id === id ? { ...step, completed: !step.completed } : step
      )
    );
  };

  const addStep = () => {
    const newId =
      steps.length > 0 ? Math.max(...steps.map((s) => s.id)) + 1 : 1;
    setSteps([...steps, { id: newId, text: "New step", completed: false }]);
  };

  return (
    <div className="w-full max-w-md mx-auto bg-gray-50 rounded-xl shadow-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-center text-2xl font-bold mb-6">Pattern Steps</h2>

        <div className="space-y-4">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex items-center p-3 bg-white rounded-lg shadow-sm"
            >
              <button
                onClick={() => toggleStep(step.id)}
                className={`flex-shrink-0 w-6 h-6 rounded-full mr-3 flex items-center justify-center ${
                  step.completed
                    ? "bg-mycolor-light-button-bg text-white"
                    : "border-2 border-gray-300"
                }`}
              >
                {step.completed && <Check size={14} />}
              </button>
              <span
                className={`flex-grow ${
                  step.completed
                    ? "line-through text-gray-500"
                    : "text-gray-800"
                }`}
              >
                {step.text}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <button
            onClick={addStep}
            className="flex items-center gap-2 px-4 py-2 text-white bg-mycolor-light-button-bg hover:bg-mycolor-light-button-hover rounded-md transition-colors duration-200"
          >
            <Plus size={18} />
            Add Step
          </button>
        </div>
      </div>
    </div>
  );
}
