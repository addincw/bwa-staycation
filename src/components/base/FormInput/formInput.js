import propTypes from 'prop-types';
import React from 'react';

const FormInput = ({ classes, align, onClick, children }) => {
    const cssClasses = [
        "rounded",
        "bg-slate-100",
        "w-full",
        "h-11",
        "text-base",
        "text-stay-dark-blue",
        "px-3.5",
        "flex",
        "items-center",
        classes.split(" ")
    ];

    switch (align) {
        case "left":
            cssClasses.push("justify-start");
            break;
        case "right":
            cssClasses.push("justify-end");
            break;
        default:
            cssClasses.push("justify-center");
            break;
    }

    return (
        <div className={cssClasses.join(" ")} onClick={onClick}>
            { children }
        </div>
    );
};

FormInput.defaultProps = {
    align: "left",
    classes: ""
};

FormInput.propsType = {
    align: propTypes.oneOf(["left", "center", "right"])
};

export default FormInput;
