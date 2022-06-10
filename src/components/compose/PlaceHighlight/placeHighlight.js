import React, {forwardRef, useMemo} from "react";
import propTypes from "prop-types";

import Container from "@mui/material/Container";

import TileGroup from "./tileGroup";
import GridGroup from "./gridGroup";

// TODO: each placeCard wrap with link component
const PlaceHighlight = forwardRef(({title, layout}, ref) => {
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
        <Container
            component="section"
            ref={ref}
            maxWidth="lg"
            sx={{paddingTop: '0.5rem', paddingBottom: '4rem'}}
        >
            {maybeTitle}
            {<ContainerPlace />}
        </Container>
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
