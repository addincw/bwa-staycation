import propTypes from 'prop-types';
import React from 'react';
import Footer from './footer';
import Header from './header';
import HeaderSimple from './headerSimple';

const Layout = (props) => {
    const {
        children,
        header,
        footer,
    } = props;

    let RenderedHeader;
    switch (header) {
        case "simple":
            RenderedHeader = HeaderSimple;
            break;
        default:
            RenderedHeader = Header;
            break;
    }

    return (
        <>
            <RenderedHeader />
            <main>
                {children}
            </main>
            {["default"].includes(footer) && <Footer />}
        </>
    );
};

Layout.defaultProps = {
    header: "default",
    footer: "default",
};

Layout.propsType = {
    header: propTypes.oneOf(["simple", "default", "none"]),
    footer: propTypes.oneOf(["default", "none"]),
};

export default Layout;
