import React, { useMemo } from 'react';
import Button from '../../base/Button';

const StepController = ({
    allowNextStep,
    isFirstStep,
    isLastStep,
    onNextStep,
    onPrevStep
}) => {
    const maybeNextButton = useMemo(() => {
        if (allowNextStep && !isLastStep) {
            return (
                <Button
                    type="button"
                    onClick={ onNextStep }
                    classes="mb-5"
                    fullwidth
                >
                    Continue to Book
                </Button>
            );
        }
    }, [
        allowNextStep,
        isLastStep,
        onNextStep
    ]);
    const maybeFinishButton = useMemo(() => {
        if (allowNextStep && isLastStep) {
            return (
                <Button
                    type="submit"
                    classes="mb-5"
                    fullwidth
                >
                    Continue to Book
                </Button>
            );
        }
    }, [
        allowNextStep,
        isLastStep
    ]);
    
    return (
        <div className="flex justify-center my-12">
            <div className="w-72">
                {maybeNextButton}
                {maybeFinishButton}
                <Button
                    type="button"
                    onClick={onPrevStep}
                    classes="!bg-gray-200 !shadow-gray-300 !hover:shadow-gray-400/30 !text-gray-400"
                    fullwidth
                >
                    Cancel
                </Button>
            </div>
        </div>
    );
};

export default StepController;
