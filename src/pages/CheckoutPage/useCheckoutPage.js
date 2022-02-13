import { useNavigate } from "react-router-dom";
import { emailValidation, phoneValidation } from "../../utils/formValidation";

const useCheckoutPage = () => {
    const navigate = useNavigate();
    const checkoutFormProps = {
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            transferSender: '',
            transferBank: '',
            transferNote: ''
        },
        validate: (values) => { 
            const errors = {};

            // Object.keys(values).forEach((field) => {
            //     if (!values[field]) {
            //         errors[field] = `${field} cannot empty`;
            //     }
            // });
            // if (Object.keys(errors).length > 0) return errors;
            
            const resultEmailValidation = emailValidation(values.email);
            const resultPhoneValidation = phoneValidation(values.phone);

            if (resultEmailValidation) errors.email = (resultEmailValidation);
            if (resultPhoneValidation) errors.phone = (resultPhoneValidation);

            return errors;
        },
        onChange: (values) => {
            console.log({ values })
        },
        onSubmit: (values) => {
            console.log({ formValues: values });
            setTimeout(() => navigate('/checkout-success', { replace: true }), 2000);
        }
    };
    
    return { checkoutFormProps };
};

export default useCheckoutPage;
