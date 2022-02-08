const useCheckoutPage = () => {
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
        onSubmit: (values) => {
            console.log({ formValues: values });
        }
    };
    
    return { checkoutFormProps };
};

export default useCheckoutPage;
