import React from "react";
import propTypes from "prop-types";

const Star = ({ size, percentageFill }) => {
    const fillColor = "#FFCC47";
    const baseColor = "rgb(215 215 215)";
    
    return (
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} xmlns="http://www.w3.org/2000/svg">
            <mask id="starMask">
                <path fill={fillColor} d="M14.0489 1.67705C14.3483 0.755738 15.6517 0.75574 15.9511 1.67705L18.6484 9.97847C18.7822 10.3905 19.1662 10.6695 19.5994 10.6695H28.328C29.2968 10.6695 29.6995 11.9091 28.9158 12.4785L21.8542 17.609C21.5037 17.8637 21.3571 18.315 21.4909 18.7271L24.1882 27.0285C24.4876 27.9498 23.4331 28.7159 22.6494 28.1465L15.5878 23.016C15.2373 22.7613 14.7627 22.7613 14.4122 23.016L7.3506 28.1465C6.56689 28.7159 5.51241 27.9498 5.81176 27.0285L8.50906 18.7271C8.64293 18.315 8.49627 17.8637 8.14578 17.609L1.08417 12.4785C0.300458 11.9091 0.703234 10.6695 1.67196 10.6695H10.4006C10.8338 10.6695 11.2178 10.3905 11.3516 9.97847L14.0489 1.67705Z"/>
            </mask>
            <rect width={size} height={size} style={{ fill: baseColor }} mask="url(#starMask)" />
            <rect width={percentageFill} height={size} style={{ fill: fillColor }} mask="url(#starMask)" />
        </svg>
    );
};

Star.defaultProps = {
    size: 36,
    percentageFill: 36,
};

Star.propsType = {
    size: propTypes.number,
    percentageFill: propTypes.number,
};

export default Star;
