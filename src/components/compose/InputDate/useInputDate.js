import { useMemo, useState } from 'react';
import { formatToStringDate } from '../../../utils/common';

const useInputDate = ({ onChange, value }) => {
    const [ showDateRange, setShowDateRange ] = useState(false);

    const formattedValue = useMemo(() => {
        let formatted = "";

        if (value.startDate) formatted += formatToStringDate(value.startDate);

        if (value.endDate) {
            if (formatted) formatted += " - ";
            formatted += formatToStringDate(value.endDate);
        }

        return formatted;
    }, [value]);

    const toggleDateRange = () => setShowDateRange(!showDateRange);

    const handleOnChange = (value) => {       
        if (onChange) {
            onChange(value.selection);
        }
    }

    const handleOnFocusChange = (focus) => {
        // check if have selected start and end date
        if (focus.indexOf(1) < 0) setShowDateRange(false);
    }
    
    // TODO: add listener to check if user click outside component
    
    return {
        formattedValue,
        handleOnChange,
        handleOnFocusChange,
        showDateRange,
        toggleDateRange
    };
};

export default useInputDate;
