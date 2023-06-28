import React, { useState } from "react";

export const useMultiStep = (steps: React.ReactNode[]) => {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);

  function next() {
    setCurrentStepIndex((index: number) => {
      if (index >= steps.length - 1) return index;
      return index + 1;
    });
  }

  function back() {
    setCurrentStepIndex((index: number) => {
      if (index <= 0) return index;
      return index - 1;
    });
  }

  function goTo(index: number) {
    setCurrentStepIndex(index);
  }

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    goTo,
    next,
    back,
  };
};
