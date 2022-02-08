import React from 'react';
import propTypes from 'prop-types';

const IconStat = (props) => {
    const {
        classes,
        icon, 
        label, 
        value
    } = props;

    return (
        <figure className={classes}>
            <img
                className="w-8 h-8 mb-2.5"
                src={icon}
                alt={`${label}-icon`}
            />
            <figcaption className="text-base text-gray-400">
                <span className="text-stay-dark-blue font-bold">{value}</span> {label}
            </figcaption>
        </figure>
    );
};

IconStat.propsType = {
    icon: propTypes.string,
    label: propTypes.string,
    value: propTypes.number
};

export default IconStat;
