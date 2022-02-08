import { useEffect } from 'react';
import { useFormikContext } from 'formik';
 
const useCheckoutInformation = ({ compIndex, setAllowNextStep, setCompletedSteps }) => {
    const {
        values: formValues,
        handleChange: handleFieldChange
    } = useFormikContext();

    useEffect(() => {
        const { firstname, lastname, email, phone } = formValues;
        
        if (firstname && lastname && email && phone) {
            setAllowNextStep(true);
            setCompletedSteps((oldCompletedSteps) =>  ({...oldCompletedSteps, [compIndex]: true}));
        } else {
            setAllowNextStep(false);
            setCompletedSteps((oldCompletedSteps) => ({ ...oldCompletedSteps, [compIndex]: false}));
        }
    }, [
        compIndex,
        formValues,
        setAllowNextStep,
        setCompletedSteps
    ]);
    
    return { formValues, handleFieldChange };
};

export default useCheckoutInformation;
