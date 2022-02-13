import React from 'react';
import propTypes from 'prop-types';

const FormField = ({
    children,
    htmlFor,
    label,
    touched,
    error
}) => {
    const containerClasses = ["relative", "mb-6"];
    const labelClasses = ["block", "mb-2"];

    const maybeErrorMessage = touched && error ? (
        <div className="absolute top-[80px] left-0 w-full rounded bg-red-500 text-white px-3.5 py-1 z-10">{error}</div>
    ): null;

    return (
        <div className={containerClasses.join(" ")}>
            <label htmlFor={htmlFor} className={labelClasses.join(" ")}>{label}</label>
            {children}
            {maybeErrorMessage}
        </div>
    );
};

FormField.propsType = {
    htmlFor: propTypes.string,
    label: propTypes.string,
};

export default FormField;
