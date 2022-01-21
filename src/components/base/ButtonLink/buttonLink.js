import React from 'react';
import { NavLink } from 'react-router-dom';
import propTypes from 'prop-types';

// import Spinner from '../Spinner';

export const ButtonLink = ({
    classes,
    children,
    // fullwidth,
    loading,
    ...restProps
}) => {
    const cssClasses = [
        "disabled:text-stay-blue/50",
        "disabled:cursor-not-allowed",
        "hover:underline",
        "hover:underline-offset-1",
        "hover:text-stay-blue",
        "relative",
        "text-stay-dark-blue",
        ...classes,
    ];

    // if (fullwidth) cssClasses.push("w-full");

    // if (restProps.disabled || loading) { 
    if (restProps.disabled) { 
        cssClasses.splice(cssClasses.indexOf("hover:underline"), 1);
        cssClasses.splice(cssClasses.indexOf("hover:underline-offset-1"), 1);
        cssClasses.splice(cssClasses.indexOf("hover:text-stay-blue"), 1);

        // if (loading) {
        //     cssClasses.push("text-stay-dark-blue/50", "cursor-progress");
        // }
    }

    const getCssClasses = ({ isActive }) => {
        if (isActive) {
            cssClasses.push("text-stay-blue");
        } else {
            cssClasses.splice(cssClasses.indexOf("text-stay-blue"), 1);
        }

        return cssClasses.join(" ");
    }

    return (
        <NavLink
            className={getCssClasses}
            {...restProps}
        >
            {children}
            {/* {loading && (
                <div className="absolute bg-white/50 flex h-full items-center justify-center left-0 top-0 w-full">
                    <Spinner />
                </div>
            )} */}
        </NavLink>
    );
};

ButtonLink.defaultProps = {
    classes: [],
};

ButtonLink.propTypes = {
    classes: propTypes.array,
    children: propTypes.node,
    // fullwidth: propTypes.bool,
    loading: propTypes.bool,
}

export default ButtonLink;
