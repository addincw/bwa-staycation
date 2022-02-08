import React, { useMemo, useState } from 'react';

const useStepper = ({ children }) => {
  const firstStep = 1;
  const lastStep = React.Children.count(children);
  const [ currentStep, setCurrentStep ] = useState(firstStep);
  const [ allowNextStep, setAllowNextStep ] = useState(false);
  const [ completedSteps, setCompletedSteps ] = useState({});

  const steps = useMemo(() => {
    return React.Children.map(children, (child, index) => ({
      component: React.cloneElement(child, {
        compIndex: index+1,
        setAllowNextStep,
        setCompletedSteps
      }),
      isLast: index+1 === lastStep
    }))
  }, [children, lastStep]);;

  const handleNextStep = () => {
    if (currentStep < lastStep) setCurrentStep(currentStep+1);
  };
  const handlePrevStep = () => {
    if (currentStep > firstStep) setCurrentStep(currentStep-1);
  };

  return {
    allowNextStep,
    currentStep,
    completedSteps,
    firstStep,
    handleNextStep,
    handlePrevStep,
    lastStep,
    steps,
    setCurrentStep,
  };
};

export default useStepper;
