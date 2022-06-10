import React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import Button from "../../base/Button";
import StarRating from "../StarRating";
import {COLOR_GRAY_LIGHT, COLOR_STAY_DARK_BLUE} from "../../../const";

const TestimonialsHighlight = () => {
    return (
        <Box sx={{paddingTop: '0.5rem', paddingBottom: '4rem'}}>
            <Container maxWidth="lg" sx={{display: {sm: 'block', md: 'flex'}}}>
                <Box component="figure" sx={{maxWidth: {xs: '100%', md: '40%'}}}>
                    <img src="/images/testimonies/family-1-inframe.png" alt="family testimonials" />
                </Box>
                <Box sx={{paddingTop: '5rem', paddingLeft: {md: '3.5rem'}, color: COLOR_STAY_DARK_BLUE}}>
                    <Typography variant="h5" component="h2" sx={{fontWeight: '600', marginBottom: '2.5rem'}}>
                        Happy Family
                    </Typography>
                    <StarRating classes="mb-2" />
                    <Typography variant="h4" component="p" sx={{marginBottom: '0.5rem'}}>
                        What a great trip with my family and I should try again next time soon.
                    </Typography>
                    <Typography component="p" sx={{marginBottom: '3rem', fontWeight: 'light', color: COLOR_GRAY_LIGHT}}>
                        Angga, Product Designer
                    </Typography>

                    <Button>Read Their Story</Button>
                </Box>
            </Container>
        </Box>
    );
};

export default TestimonialsHighlight;
