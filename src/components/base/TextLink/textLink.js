import React from 'react';
import { NavLink } from 'react-router-dom';
import propTypes from 'prop-types';

export const TextLink = ({
    classes,
    children,
    disabled,
    exlink,
    loading,
    ...restProps
}) => {
    const cssClasses = [
        "hover:underline",
        "hover:underline-offset-1",
        "hover:text-stay-blue",
        ...classes.split(" "),
    ];

    const getCssClasses = (navProps = {}) => {
        cssClasses.splice(cssClasses.indexOf("text-stay-blue"), 1);
        
        if (navProps.isActive) cssClasses.push("text-stay-blue");

        return cssClasses.join(" ");
    }

    if (disabled || !restProps.to) { 
        cssClasses.splice(cssClasses.indexOf("hover:underline"), 1);
        cssClasses.splice(cssClasses.indexOf("hover:underline-offset-1"), 1);
        cssClasses.splice(cssClasses.indexOf("hover:text-stay-blue"), 1);

        return <span className={getCssClasses()}>{children}</span>;
    }

    if (exlink) {        
        return (
            <a className={getCssClasses()} href={restProps.to}>
                {children}
            </a>
        );
    }

    // FIXME: last css class not show in rendered NavLink
    return (
        <NavLink className={getCssClasses} {...restProps}>
            {children}
        </NavLink>
    );
};

TextLink.defaultProps = {
    classes: "",
    exlink: false,
    disabled: false,
    loading: false,
};

TextLink.propTypes = {
    classes: propTypes.string,
    children: propTypes.node,
    exlink: propTypes.bool,
    disabled: propTypes.bool,
    loading: propTypes.bool,
}

export default TextLink;
