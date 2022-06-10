import React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import {formatToCurrency} from "../../utils/common";

import Button from "../../components/base/Button";
import IconStat from "../../components/base/IconStat";
import Layout from "../../components/compose/Layout";
import PlaceHighlight from "../../components/compose/PlaceHighlight";
import TestimonialsHighlight from "../../components/compose/TestimonialsHighlight";
import useLandingPage from "./useLandingPage";
import {COLOR_GRAY_LIGHT, COLOR_STAY_DARK_BLUE} from "../../const";

const welcomeStatistics = [
    {
        icon: "/icons/ic_traveler.png",
        value: 80409,
        label: 'travelers',
    },
    {
        icon: "/icons/ic_treasure.png",
        value: 80409,
        label: 'treasures',
    },
    {
        icon: "/icons/ic_cities.png",
        value: 80409,
        label: 'cities',
    },
];

const LandingPage = () => {
    const {
        handleWelcomeButtonOnClick,
        mostPickedRef,
    } = useLandingPage();

    return (
        <Layout>
            {/* welcome section */}
            <Box component="section" sx={{paddingTop: '4rem', paddingBottom: '3.5rem'}}>
                <Container sx={{display: {md: 'flex'}, justifyContent: 'space-between'}}>
                    <Box sx={{width: {md: '40%'}}}>
                        <Typography
                            component="h1"
                            sx={{
                                color: COLOR_STAY_DARK_BLUE,
                                fontSize: 42,
                                fontWeight: 'bold',
                                marginBottom: '1.25rem'
                            }}
                        >
                            Forget Busy Work, Start Next Vacation
                        </Typography>
                        <Typography
                            sx={{
                                color: COLOR_GRAY_LIGHT,
                                fontSize: '1.175rem',
                                whiteSpace: 'pre-line',
                                marginBottom: '1.75rem'
                            }}
                        >
                            We provide what you need to enjoy your holiday with family. Time to make another memorable moments.
                        </Typography>
                        <Button classes="mb-20" onClick={handleWelcomeButtonOnClick}>
                            Show Me Now
                        </Button>
                        <Stack direction="row" spacing={4}>
                            {welcomeStatistics.map(({value, ...stat}, index) => (
                                <IconStat key={index} value={formatToCurrency(value)} {...stat} />
                            ))}
                        </Stack>
                    </Box>
                    <figure>
                        <img src="/images/banner.png" alt="banner" />
                    </figure>
                </Container>
            </Box>

            {/* place by group section */}
            <PlaceHighlight
                ref={mostPickedRef}
                layout="tile"
                title="Most Picked"
            />

            <PlaceHighlight title="House with Beauty Backyard" />

            <PlaceHighlight title="Hotels with large living room" />

            <PlaceHighlight title="Apartments with kitchen set" />
            {/* highlight testimonials section */}
            <TestimonialsHighlight />
        </Layout>
    );
};

export default LandingPage;
