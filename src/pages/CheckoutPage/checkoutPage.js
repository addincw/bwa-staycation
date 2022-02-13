import React from 'react';
import { Formik } from 'formik';
import Layout from '../../components/compose/Layout';
import CheckoutInformation from '../../components/compose/CheckoutInformation';
import CheckoutBill from '../../components/compose/CheckoutBill';
import Stepper from '../../components/compose/Stepper';
import useCheckoutPage from './useCheckoutPage';

const CheckoutPage = () => {
    const { checkoutFormProps } = useCheckoutPage();

    return (
        <Layout header="simple" footer="none">
            <Formik { ...checkoutFormProps }>
                { ({ isSubmitting, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <Stepper disableClickController={ isSubmitting }>
                            <CheckoutInformation />
                            <CheckoutBill />
                        </Stepper>
                    </form>
                )}
            </Formik>
        </Layout>
  );
};

export default CheckoutPage;
