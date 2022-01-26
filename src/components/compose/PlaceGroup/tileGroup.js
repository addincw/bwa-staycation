import React from "react";
import PlaceCard from "../../base/PlaceCard";

const TileGroup = () => (
    <div className="grid grid-rows-2 grid-cols-3 gap-7">
        <PlaceCard classes="row-span-2" overlay />
        <PlaceCard overlay />
        <PlaceCard overlay />
        <PlaceCard overlay />
        <PlaceCard overlay />
    </div>
);

export default TileGroup;
