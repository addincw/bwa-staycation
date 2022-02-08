import React from 'react';
import propTypes from 'prop-types';
import FormInput from '../../base/FormInput';

const InputText = (props) => {
    const {
        initialValue,
        placeholder,
        ...fieldProps
    } = props;

    return (
        <div className="rounded bg-slate-200 w-full flex">
            <FormInput>
                <input
                    className="bg-transparent focus-visible:outline-0 w-full text-stay-dark-blue"
                    type="text"
                    value={initialValue}
                    placeholder={ placeholder }
                    {...fieldProps}
                />
            </FormInput>
        </div>
    );
};

InputText.defaultProps = {
    placeholder: "Please type here"
};

InputText.propsType = {
    initialValue: propTypes.string,
    placeholder: propTypes.string
};

export default InputText;
