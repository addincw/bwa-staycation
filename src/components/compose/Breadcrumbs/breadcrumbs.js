import React from 'react';
import TextLink from '../../base/TextLink';

const Breadcrumbs = () => {
    return (
      <nav className="w-10/12 m-auto py-3" aria-label="Breadcrumb">
        <ol className="text-base text-gray-400 flex">
            <li className="">
                <TextLink to="/">Home</TextLink>
                <span className="mx-3.5">/</span>
            </li>
            <li aria-current="page">
                <TextLink classes="text-stay-dark-blue font-bold" disabled>Villa Angga</TextLink>
            </li>
        </ol>
    </nav>
  );
};

export default Breadcrumbs;
