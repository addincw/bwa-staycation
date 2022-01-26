import React from "react";
import propTypes from "prop-types";

import Star from "../../base/Star";

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
    const renderedStars = [];

    let unRenderedRate = rate;

    for (let index = 1; index <= range; index++) {
        // percentage value is 0 - 1
        const percentage = unRenderedRate > 1 ? 1 : unRenderedRate;
        const percentageFill = starSize * percentage;
        renderedStars.push(<Star size={starSize} percentageFill={percentageFill} />);

        if (unRenderedRate >= 1) {
            unRenderedRate -= 1;
        } else if (unRenderedRate > 0 && unRenderedRate < 1) {
            unRenderedRate = 0;
        }
    }

    return (
        <div className={cssClasses.join(" ")}>
            {renderedStars}
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
