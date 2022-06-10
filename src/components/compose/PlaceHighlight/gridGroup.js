import React from "react";
import {Link} from "react-router-dom";

import Grid from "@mui/material/Grid";

import PlaceCard from "../../base/PlaceCard";

const GridGroup = () => (
    <Grid container spacing={4}>
        {[1, 2, 3, 4].map((index) => (
            <Grid item md={3} key={index}>
                <Link to="/place">
                    <PlaceCard />
                </Link>
            </Grid>
        ))}
    </Grid>
);

export default GridGroup;
