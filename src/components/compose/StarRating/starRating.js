import React from "react";
import propTypes from "prop-types";

import Rating from "@mui/material/Rating";

const StarRating = ({
    classes,
    rate,
    range,
    starSize,
}) => {
    const cssClasses = [
        "flex",
        ...classes.split(" ")
    ];

    return (
        <div className={cssClasses.join(" ")}>
            <Rating
                name="read-only"
                value={rate}
                size="large"
                max={range}
                readOnly
            />
        </div>
    );
};

StarRating.defaultProps = {
    classes: '',
    rate: 3.2,
    range: 5,
    starSize: 36,
};

StarRating.propsType = {
    classes: propTypes.string,
    rate: propTypes.number,
    range: propTypes.number,
    starSize: propTypes.number,
};

export default StarRating;
