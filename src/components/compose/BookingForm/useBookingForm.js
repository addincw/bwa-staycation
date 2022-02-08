import { useState } from 'react';

const useBookingForm = () => { 
    const defaultNight = 1;
    const defaultStartDate = new Date();
    const copyDefaultStartDate = new Date();
    
    const startDateAdded = copyDefaultStartDate.setDate(defaultStartDate.getDate() + defaultNight);
    const defaultEndDate = new Date(startDateAdded);

    const [bookingFormValues, setBookingFormValues] = useState({
        night: defaultNight,
        date: {
            startDate: defaultStartDate,
            endDate: defaultEndDate,
            key: "selection"
        },
    });

    const handleNightOnChange = (value) => {
        const { date: { startDate } } = bookingFormValues;
        const oldStartDate = new Date(startDate);
        const oldStartDateAdded = oldStartDate.setDate(oldStartDate.getDate() + value);
        const updatedDate = {
            ...bookingFormValues.date,
            endDate: new Date(oldStartDateAdded),
        };

        setBookingFormValues({
            ...bookingFormValues,
            date: updatedDate,
            night: value
        });
    };    
    const handleDateOnChange = (value) => {
        const newBookingDate = value;
        const newStartDate = new Date(newBookingDate.startDate);
        const newEndDate = new Date(newBookingDate.endDate);
        const newNight = new Date(newEndDate - newStartDate).getDate();

        setBookingFormValues({
            ...bookingFormValues,
            night: (newNight - 1),
            date: value,
        });
    };
    
    
    return {
        bookingFormValues,
        handleNightOnChange,
        handleDateOnChange
    };
};

export default useBookingForm;
