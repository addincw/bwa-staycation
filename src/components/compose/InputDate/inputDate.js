import React from 'react';
import propTypes from 'prop-types';
import { Calendar as IconCalendar } from 'react-feather';
import { DateRange } from 'react-date-range';

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

import Button from '../../base/Button';
import FormInput from '../../base/FormInput';
import useInputDate from './useInputDate';

const InputDate = (props) => {
    const {
        onChange,
        value,
    } = props;

    const {
        formattedValue,
        handleOnChange,
        handleOnFocusChange,
        showDateRange,
        toggleDateRange
    } = useInputDate({ onChange, value });

    return (
        <div className="relative w-full">
            <div className="rounded bg-slate-200 w-full relative">
                <Button
                    classes="bg-stay-dark-blue shadow-stay-dark-blue/50 hover:shadow-stay-dark-blue/50 px-3.5 absolute left-0 top-0 h-full"
                    onClick={toggleDateRange}
                >
                    <IconCalendar size={16} />
                </Button>
                <FormInput
                    classes="cursor-pointer"
                    align="center"
                    onClick={toggleDateRange}
                >
                    { formattedValue }
                </FormInput>
            </div>
            { showDateRange && (
                <div className="absolute top-[55px] left-0 w-full flex justify-center">
                    <DateRange
                        className="rounded shadow-lg shadow-gray-400"
                        showDateDisplay={ false }
                        editableDateInputs={true}
                        onChange={ handleOnChange }
                        onRangeFocusChange={handleOnFocusChange}
                        moveRangeOnFirstSelection={false}
                        ranges={[value]}
                    />
                </div>
            )}
        </div>
    );
};

InputDate.propsType = {
    value: propTypes.node,
};

export default InputDate;
