import React from 'react';
import propTypes from 'prop-types';
import {
    Plus as IconPlus,
    Minus as IconMinus,
} from 'react-feather';
import { formatToPlural } from '../../../utils/common';
import Button from '../../base/Button';
import FormInput from '../../base/FormInput';
import useInputNumber from './useInputNumber';

const InputNumber = (props) => {
    const {
        name,
        value,
        onChange,
        prefix,
        sufix,
    } = props;

    const {
        handleOnChangeValue,
        handleOnClickDecrementButton,
        handleOnClickIncrementButton,
    } = useInputNumber({ name, value, onChange });

    return (
        <div className="rounded bg-slate-200 w-full flex">
            <Button
                classes="bg-red-600 shadow-red-600/50 hover:shadow-red-600/50 px-3.5"
                onClick={handleOnClickDecrementButton}
            >
                <IconMinus size={16} />
            </Button>
            <FormInput align="center">
                {prefix && ` ${formatToPlural(prefix, value)}`}
                <input
                    className="bg-transparent text-center focus-visible:outline-0"
                    style={{ width: `${value.toString().length + 1}ch` }}
                    type="text"
                    value={ value }
                    onChange={handleOnChangeValue}
                />
                {sufix && ` ${formatToPlural(sufix, value)}`}
            </FormInput>
            <Button
                classes="bg-teal-500 shadow-teal-500/50 hover:shadow-teal-500/50 px-3.5"
                onClick={handleOnClickIncrementButton}
            >
                <IconPlus size={16} />
            </Button>
        </div>
    );
};

InputNumber.defaultProps = {
    value: 0,
};

InputNumber.propsType = {
    value: propTypes.number,
    prefix: propTypes.string,
    sufix: propTypes.string,
};

export default InputNumber;
