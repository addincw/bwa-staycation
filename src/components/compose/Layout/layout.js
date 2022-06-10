import React, {useMemo} from 'react';
import propTypes from 'prop-types';

import Footer from './footer';
import Header from './header';
import HeaderSimple from './headerSimple';

const Layout = (props) => {
    const {
        children,
        header,
        footer,
    } = props;

    const RenderedHeader = useMemo(() => {
        if (!header || header === 'none') return <></>;

        if (header === 'simple') {
            return HeaderSimple;
        }

        return Header;
    }, [header]);

    const RenderedFooter = useMemo(() => {
        if (!footer || footer === 'none') return <></>;

        return Footer;
    }, [footer]);

    return (
        <>
            <RenderedHeader />
            <main>
                {children}
            </main>
            <RenderedFooter />
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
