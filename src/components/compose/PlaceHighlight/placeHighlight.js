import React, { forwardRef, useMemo } from "react";
import propTypes from "prop-types";

import TileGroup from "./tileGroup";
import GridGroup from "./gridGroup";

// TODO: each placeCard wrap with link component
const PlaceHighlight = forwardRef(({ title, layout }, ref) => {
    const maybeTitle = useMemo(() => {
        if (title) {
            return (
                <header className="mb-5">
                    <h2 className="text-stay-dark-blue text-2xl font-medium">{ title }</h2>
                </header>
            );
        }

        return null;
    }, [ title ]);

    const ContainerPlace = layout === 'grid'
        ? GridGroup
        : TileGroup;

    return (
        <section ref={ ref } className="w-10/12 mx-auto mb-16 pt-2">
            { maybeTitle }
            { <ContainerPlace /> }
        </section>
    );
});

PlaceHighlight.defaultProps = {
    layout: "grid"
};

PlaceHighlight.propTypes = {
    title: propTypes.string,
    layout: propTypes.oneOf(["grid", "tile"])
};

export default PlaceHighlight;
