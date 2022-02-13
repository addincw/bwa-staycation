import { useEffect } from 'react';
import { useFormikContext } from 'formik';
 
const useCheckoutInformation = ({ setAllowNextStep }) => {
    const {
        handleChange: handleFieldChange,
        values: formValues,
        touched: formTouched,
        errors: formErrors,
    } = useFormikContext();

    useEffect(() => {    
        const hasErrors = [ "firstname", "lastname", "email", "phone" ].filter((field) => {
            return !formValues[field] || formErrors[field];
        });
        setAllowNextStep(hasErrors.length === 0);        
    }, [
        formValues,
        formErrors,
        setAllowNextStep,
    ]);
    
    return { 
        formValues, 
        formTouched, 
        formErrors,
        handleFieldChange 
    };
};

export default useCheckoutInformation;
