import React from 'react'

const useStepController = ({ onNextStep, onLastStep, disableOnClick }) => {
    const handleOnNextStep = (e) => {
        if (disableOnClick) return;
        onNextStep(e);
    }
    const handleOnPrevStep = (e) => {
        if (disableOnClick) return;
        onLastStep(e);
    }

    return {
      handleOnNextStep,
      handleOnPrevStep,
    };
}

export default useStepController