import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/base/Button';
import Layout from '../components/compose/Layout';
import HeaderSection from '../components/compose/HeaderSection';

const CheckoutSuccessPage = () => {
    return (
        <Layout header="simple" footer="none">
            <section>
                <HeaderSection title="Yay! Complete" />

                <div className="w-10/12 m-auto text-base text-gray-400">
                    <figure className="mr-5 flex justify-center">
                        <img
                            className="w-[362px] bg-cover"
                            src="illustrations/checkout-success.png"
                            alt="checkout success illustration"
                        />
                    </figure>
                    <p className="text-center">We will inform you via email later <br/> once the transaction has been accepted</p>
                </div>

                <div className="flex justify-center my-12">
                    <div className="relative w-72">
                        <Link to="/">
                            <Button type="button" fullwidth>
                                Back to Home
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </Layout>
  );
};

export default CheckoutSuccessPage;
