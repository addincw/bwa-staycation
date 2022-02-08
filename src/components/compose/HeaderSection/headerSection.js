import React from 'react';
import propTypes from 'prop-types';

const HeaderSection = ({ title, description }) => (
    <header className="text-center my-12">
        <h1 className="text-stay-dark-blue text-4xl font-semibold mb-1 capitalize">{ title }</h1>
        <p className="text-gray-400 text-lg capitalize">{ description }</p>
    </header>
);

HeaderSection.defaultProps = {
    title: "this is for title",
    description: "",
};

HeaderSection.propTypes = {
    title: propTypes.string,
    description: propTypes.string,
};

export default HeaderSection;
