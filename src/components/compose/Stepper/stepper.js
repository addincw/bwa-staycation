import propTypes from 'prop-types';
import React from 'react';
import StepController from './stepController';
import StepNavigation from './stepNavigation';
import useStepper from './useStepper';

const Stepper = ({ children }) => {
    const {
        allowNextStep,
        currentStep,
        completedSteps,
        firstStep,
        handleNextStep,
        handlePrevStep,
        lastStep,
        steps
    } = useStepper({ children });
    const { component } = steps[ currentStep - 1 ];

    return (
        <>
            <StepNavigation
                currentStep={ currentStep }
                completedSteps={ completedSteps }
                data={ steps }
            />

            {component}
            
            <StepController
                allowNextStep={ allowNextStep }
                isFirstStep={ firstStep === currentStep }
                isLastStep={ lastStep === currentStep }
                onNextStep={ handleNextStep }
                onPrevStep={ handlePrevStep }
            />
        </>
    );
};

Stepper.propTypes = {
    data: propTypes.arrayOf(
        propTypes.shape({
            isActive: propTypes.bool,
            isComplete: propTypes.bool,
            RenderedComponent: propTypes.node,
        }),
    ),
};

export default Stepper;
