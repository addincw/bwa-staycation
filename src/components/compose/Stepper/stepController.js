import React, { useMemo } from 'react';
import Button from '../../base/Button';
import useStepController from './useStepController';

const StepController = ({
    allowNextStep,
    disableOnClick,
    isFirstStep,
    isLastStep,
    onNextStep,
    onPrevStep
}) => {
    const {
        handleOnNextStep,
        handleOnPrevStep,
    } = useStepController({
        onNextStep,
        onPrevStep,
        disableOnClick
    });

    const maybeNextButton = useMemo(() => {
        if (allowNextStep && !isLastStep) {
            return (
                <Button
                    type="button"
                    onClick={ handleOnNextStep }
                    classes="absolute top-[15px] mb-5"
                    loading={disableOnClick}
                    fullwidth
                >
                    Continue to Book
                </Button>
            );
        }
    }, [
        allowNextStep,
        disableOnClick,
        isLastStep,
        handleOnNextStep
    ]);
    const maybeFinishButton = useMemo(() => {
        if (allowNextStep && isLastStep) {
            return (
                <Button
                    type={disableOnClick ? "button" : "submit"}
                    classes="absolute top-[10px] mb-5"
                    loading={disableOnClick}
                    fullwidth
                >
                    Continue to Book
                </Button>
            );
        }
    }, [
        allowNextStep,
        disableOnClick,
        isLastStep
    ]);
    
    return (
        <div className="flex justify-center">
            <div className="relative w-72 h-[135px]">
                {maybeNextButton}
                {maybeFinishButton}
                <Button
                    type="button"
                    onClick={handleOnPrevStep}
                    classes="!bg-gray-200 !shadow-gray-300 !hover:shadow-gray-400/30 !text-gray-400 absolute top-[75px]"
                    loading={disableOnClick}
                    fullwidth
                >
                    Cancel
                </Button>
            </div>
        </div>
    );
};

export default StepController;
