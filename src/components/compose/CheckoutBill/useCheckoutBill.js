import { useEffect } from 'react';
import { useFormikContext } from 'formik';

const useCheckoutBill = ({ setAllowNextStep }) => {
    const { values: formValues, handleChange: handleFieldChange } = useFormikContext();

    useEffect(() => {
        const { transferSender, transferBank, transferNote } = formValues;
        if (transferSender && transferBank && transferNote) {
            setAllowNextStep(true);
        } else {
            setAllowNextStep(false);
        }
    }, [formValues, setAllowNextStep]);
    
    return { formValues, handleFieldChange };
};

export default useCheckoutBill;
