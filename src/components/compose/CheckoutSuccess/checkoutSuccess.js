import React from 'react';
import HeaderSection from '../HeaderSection';

const CheckoutSuccess = ({ classes }) => {
    return (
        <section className={classes}>
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
        </section>
    );
};

export default CheckoutSuccess;
