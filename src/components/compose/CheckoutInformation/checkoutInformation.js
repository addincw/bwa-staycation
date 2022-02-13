import React from 'react';
import propTypes from 'prop-types';
import PlaceCard from '../../base/PlaceCard';
import FormField from '../../base/FormField';
import HeaderSection from '../HeaderSection';
import InputText from '../InputText/inputText';
import useCheckoutInformation from './useCheckoutInformation';

const CheckoutInformation = ({
    classes,
    compIndex,
    setAllowNextStep,
    setCompletedSteps,
}) => {
    const {
        formValues,
        formTouched,
        formErrors,
        handleFieldChange
    } = useCheckoutInformation({
        compIndex,
        setAllowNextStep,
        setCompletedSteps
    });

    return (
        <section className={classes}>
            <HeaderSection
                title="Booking Information"
                description="Please fill up the blank fields below"
            />

            <div className="w-10/12 m-auto flex">
                <div className="w-1/2 border-r flex justify-center pt-7">
                    <div className="relative w-96 h-fit">
                        <PlaceCard />
                        <div className="absolute right-0 bottom-3.5 text-base text-gray-400">
                            <span className="text-stay-dark-blue font-semibold">$480</span> per <span className="text-stay-dark-blue font-semibold">night</span>
                        </div>
                    </div>
                </div>
                <div className="w-1/2  pt-7 pl-20">
                    <FormField 
                        htmlFor="firstname" 
                        label="First Name"
                        touched={formTouched["firstname"]}
                        error={formErrors["firstname"]}
                    >
                        <InputText 
                            id="firstname"
                            name="firstname"
                            value={formValues.firstname || ''}
                            onChange={handleFieldChange}
                        />
                    </FormField>
                    <FormField 
                        htmlFor="lastname" 
                        label="Last Name"
                        touched={formTouched["lastname"]}
                        error={formErrors["lastname"]}
                    >
                        <InputText 
                            id="lastname"
                            name="lastname"
                            value={formValues.lastname || ''}
                            onChange={handleFieldChange}
                        />
                    </FormField>
                    <FormField 
                        htmlFor="email" 
                        label="Email Address"
                        touched={formTouched["email"]}
                        error={formErrors["email"]}
                    >
                        <InputText 
                            id="email"
                            name="email"
                            value={formValues.email || ''}
                            onChange={handleFieldChange}
                            />
                    </FormField>
                    <FormField 
                        htmlFor="phone" 
                        label="Phone Number"
                        touched={formTouched["phone"]}
                        error={formErrors["phone"]}
                    >
                        <InputText
                            id="phone"
                            name="phone"
                            value={formValues.phone || ''}
                            onChange={ (e) => {
                                if (e.target.value && !/\d$/.test(e.target.value)) return; 
                                handleFieldChange(e);
                            }}
                        />
                    </FormField>
                </div>
            </div>
        </section>
    );
};

CheckoutInformation.defaultProps = {
    classes: "",
};

CheckoutInformation.propsType = {
    classes: propTypes.string,
};

export default CheckoutInformation;
