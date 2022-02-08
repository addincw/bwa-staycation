import React from 'react';
import propTypes from 'prop-types';

const FormField = ({ children, htmlFor, label }) => {
    return (
        <div className="mb-6">
            <label htmlFor={htmlFor} className="block mb-2">{label}</label>
            {children}
        </div>
    );
};

FormField.propsType = {
    htmlFor: propTypes.string,
    label: propTypes.string,
};

export default FormField;
