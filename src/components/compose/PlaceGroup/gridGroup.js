import React from "react";
import PlaceCard from "../../base/PlaceCard";

const GridGroup = () => (
    <div className="grid grid-cols-4 gap-x-7">
        <PlaceCard />
        <PlaceCard />
        <PlaceCard />
        <PlaceCard />
    </div>
);

export default GridGroup;
