import propTypes from 'prop-types';
import React from 'react';
import StepIndicator from '../../base/StepIndicator';

const StepNavigation = ({ data, currentStep, completedSteps }) => {
    return (
        <>
            <div className="flex justify-center my-12">
                <div className="flex">
                    { data.map(({ isLast }, index) => {
                        const key = index + 1;
                        return (
                            <StepIndicator
                                key={ key }
                                active={ key === currentStep }
                                complete={ completedSteps[key] }
                                last={ isLast }
                            >
                                { key }
                            </StepIndicator>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

StepNavigation.propTypes = {
    data: propTypes.arrayOf(
        propTypes.shape({
            isActive: propTypes.bool,
            isComplete: propTypes.bool,
            RenderedComponent: propTypes.node,
        }),
    ),
    currentStep: propTypes.number,
};

export default StepNavigation;
