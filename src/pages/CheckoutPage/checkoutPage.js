import React from 'react';
import { Formik } from 'formik';
import Layout from '../../components/compose/Layout';
import CheckoutInformation from '../../components/compose/CheckoutInformation';
import CheckoutBill from '../../components/compose/CheckoutBill';
// import CheckoutSuccess from '../../components/compose/CheckoutSuccess';
import Stepper from '../../components/compose/Stepper';
import useCheckoutPage from './useCheckoutPage';

const CheckoutPage = () => {
    const { checkoutFormProps } = useCheckoutPage();

    return (
        <Layout header="simple" footer="none">
            <Formik { ...checkoutFormProps }>
                <form>
                    <Stepper>
                        <CheckoutInformation />
                        <CheckoutBill />
                        {/* <CheckoutSuccess /> */}
                    </Stepper>
                </form>
            </Formik>
        </Layout>
  );
};

export default CheckoutPage;
