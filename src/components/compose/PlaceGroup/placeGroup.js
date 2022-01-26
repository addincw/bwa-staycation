import React, { useMemo } from "react";
import propTypes from "prop-types";

import TileGroup from "./tileGroup";
import GridGroup from "./gridGroup";

const PlaceGroup = ({ title, layout }) => {
    const maybeTitle = useMemo(() => {
        if (title) {
            return (
                <header className="mb-5">
                    <h2 className="text-stay-dark-blue text-2xl font-medium">{title}</h2>
                </header>
            );
        }

        return null;
    }, [title]);

    const ContainerPlace = layout === 'grid'
        ? GridGroup
        : TileGroup;

    return (
        <section className="w-10/12 mx-auto mb-16 pt-2">
            {maybeTitle}
            {<ContainerPlace />}
        </section>
    );
};

PlaceGroup.defaultProps = {
    layout: "grid"
};

PlaceGroup.propTypes = {
    title: propTypes.string,
    layout: propTypes.oneOf(["grid", "tile"])
};

export default PlaceGroup;
