import React from "react";
import { Link } from "react-router-dom";
import PlaceCard from "../../base/PlaceCard";

const GridGroup = () => (
    <div className="grid grid-cols-4 gap-x-7">
        { [ 1, 2, 3, 4 ].map((index) => (
            <Link key={index} to="/place">
                <PlaceCard />
            </Link>
        ))}
    </div>
);

export default GridGroup;
