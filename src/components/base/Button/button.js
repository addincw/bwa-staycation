import React from 'react';
import propTypes from 'prop-types';

import Spinner from '../Spinner';

export const Button = ({
    classes,
    children,
    fullwidth,
    loading,
    ...restProps
}) => {
    const cssClasses = [
        "bg-stay-blue",
        "disabled:bg-stay-blue/50",
        "disabled:cursor-not-allowed",
        "flex",
        "flex-row",
        "hover:shadow-lg",
        "hover:shadow-stay-blue/50",
        "items-center",
        "text-white",
        "pt-2",
        "px-7",
        "pb-2.5",
        "rounded",
        "shadow-md",
        "shadow-stay-blue/30",
        ...classes.split(" ")
    ];

    if (fullwidth) cssClasses.push("w-full", "justify-center");

    if (restProps.disabled || loading) { 
        cssClasses.splice(cssClasses.indexOf("hover:shadow-lg"), 1);
        cssClasses.splice(cssClasses.indexOf("hover:shadow-stay-blue/50"), 1);

        if (loading) {
            cssClasses.push("bg-stay-blue/75", "cursor-progress");
        }
    }

    return (
        <button
            className={cssClasses.join(" ")}
            {...restProps}
        >
            {children}
            {loading && <Spinner />}
        </button>
    );
};

Button.defaultProps = {
    classes: ""
};

Button.propTypes = {
    classes: propTypes.string,
    children: propTypes.node,
    fullwidth: propTypes.bool,
    loading: propTypes.bool,
}

export default Button;
