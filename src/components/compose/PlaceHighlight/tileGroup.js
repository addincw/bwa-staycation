import React from "react";
import { Link } from "react-router-dom";
import PlaceCard from "../../base/PlaceCard";

const TileGroup = () => (
    <div className="grid grid-rows-2 grid-cols-3 gap-7">
        <Link key={1 + '-tile'} to="/place" className="row-span-2">
            <PlaceCard classes="h-full" overlay />
        </Link>
        { [ 2, 3, 4, 5 ].map((index) => (
            <Link key={index + '-tile'} to="/place">
                <PlaceCard overlay />
            </Link>
        ))}
    </div>
);

export default TileGroup;
