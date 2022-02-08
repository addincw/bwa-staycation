import React from 'react';
import { Link } from 'react-router-dom';
import { formatToCurrency, formatToPlural } from '../../../utils/common';
import Button from '../../base/Button';
import FormField from '../../base/FormField';
import InputDate from '../InputDate';
import InputNumber from '../InputNumber';
import useBookingForm from './useBookingForm';

const BookingForm = () => {
    const { bookingFormValues, handleDateOnChange, handleNightOnChange } = useBookingForm();

    return (
        <div className="border border-slate-200 rounded-[15px] px-20 py-14 text-base text-stay-dark-blue">
            <header className="mb-3.5">
                <h2 className="text-xl font-medium">Start Booking</h2>
            </header>

            <div className="mb-3.5 text-4xl text-slate-300 font-extralight">
                <span className="text-teal-500 font-semibold">$280</span> per night
            </div>

            <FormField htmlFor="night" label="How long you will stay?">
                <InputNumber
                    name="night"
                    value={ bookingFormValues.night }
                    sufix="night"
                    onChange={handleNightOnChange}
                    />
            </FormField>

            <FormField htmlFor="date" label="Pick a Date">
                <InputDate
                    name="date"
                    value={ bookingFormValues.date }
                    onChange={handleDateOnChange}
                />
            </FormField>

            <p className="text-gray-400 text-light mb-10">
                You will pay { ' ' }
                <span className="text-stay-dark-blue font-semibold">
                    ${ formatToCurrency(280 * bookingFormValues.night) }
                </span>
                { ' ' } per { ' ' }
                <span className="text-stay-dark-blue font-semibold">
                    { bookingFormValues.night }{ ' ' }
                    { formatToPlural('night', bookingFormValues.night) }
                </span>
            </p>

            <Link to="/checkout">
                <Button fullwidth>Continue to Book</Button>
            </Link>
        </div>
    );
};

export default BookingForm;
