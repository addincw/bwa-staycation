import React from "react";
import {Link} from "react-router-dom";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

import TextLink from "../../base/TextLink";
import Logo from "../../base/Logo";
import {COLOR_GRAY_LIGHT, COLOR_STAY_DARK_BLUE, FONT_BASE_STYLES, PADDING_Y_APPBAR_STYLE, PADDING_Y_SECTION_STYLE} from "../../../const";

const guideLinks = [
    {
        id: 'new-account',
        label: 'New Account',
        props: {
            to: '/new-account',
        }
    },
    {
        id: 'booking-room',
        label: 'Start Booking a Room',
        props: {
            to: '/booking-room',
        }
    },
    {
        id: 'payment',
        label: 'Use Payments',
        props: {
            to: '/payment',
        }
    },
];
const exploreUsLinks = [
    {
        id: 'careers',
        label: 'Our Careers',
        props: {
            to: '/careers',
        }
    },
    {
        id: 'privacy',
        label: 'Privacy',
        props: {
            to: '/privacy',
        }
    },
    {
        id: 'term-conditions',
        label: 'Term & Conditions',
        props: {
            to: '/term-conditions',
        }
    },
];
const connectUsLinks = [
    {
        id: 'email',
        label: 'support@staycation.id',
        props: {
            to: 'mailto:support@staycation.id',
            exlink: true
        }
    },
    {
        id: 'phone',
        label: '021 - 2208 - 1996',
        props: {
            to: 'telp:+62122081996',
            exlink: true
        }
    },
    {
        id: 'location',
        label: 'Staycation, Kemang, Jakarta',
        props: {disabled: true}
    },
];

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{...FONT_BASE_STYLES, color: COLOR_GRAY_LIGHT, borderTopWidth: 1}}
        >
            <Container
                component="section"
                maxWidth='lg'
                sx={{
                    display: {sm: 'block', md: 'flex'},
                    justifyContent: 'space-between',
                    ...PADDING_Y_SECTION_STYLE
                }}
            >
                <Box>
                    <figure>
                        <Link to="/">
                            <Logo />
                        </Link>
                        <Typography component="figcaption" sx={{maxWidth: '258px', marginTop: '1.5rem'}}>
                            We kaboom your beauty holiday instantly and memorable.
                        </Typography>
                    </figure>
                </Box>
                <Box>
                    <Typography
                        variant="h6"
                        component="h4"
                        sx={{color: COLOR_STAY_DARK_BLUE, fontWeight: 'bold', marginBottom: '1.5rem'}}
                    >
                        For Beginner
                    </Typography>
                    <Box component="nav">
                        <List disablePadding>
                            {guideLinks.map((guide) => (
                                <ListItemText
                                    key={`${ guide.id }`}
                                    sx={{marginBottom: '0.625rem'}}
                                >
                                    <TextLink {...guide.props}>
                                        {guide.label}
                                    </TextLink>
                                </ListItemText>
                            ))}
                        </List>
                    </Box>
                </Box>
                <Box>
                    <Typography
                        variant="h6"
                        component="h4"
                        sx={{color: COLOR_STAY_DARK_BLUE, fontWeight: 'bold', marginBottom: '1.5rem'}}
                    >
                        Explore Us
                    </Typography>
                    <Box component="nav">
                        <List disablePadding>
                            {exploreUsLinks.map((explore) => (
                                <ListItemText
                                    key={`${ explore.id }`}
                                    sx={{marginBottom: '0.625rem'}}
                                >
                                    <TextLink {...explore.props}>
                                        {explore.label}
                                    </TextLink>
                                </ListItemText>
                            ))}
                        </List>
                    </Box>
                </Box>
                <Box>
                    <Typography
                        variant="h6"
                        component="h4"
                        sx={{color: COLOR_STAY_DARK_BLUE, fontWeight: 'bold', marginBottom: '1.5rem'}}
                    >
                        Connect Us
                    </Typography>
                    <List disablePadding>
                        {connectUsLinks.map((connect) => (
                            <ListItemText
                                key={`${ connect.id }`}
                                sx={{marginBottom: '0.625rem'}}
                            >
                                <TextLink {...connect.props}>
                                    {connect.label}
                                </TextLink>
                            </ListItemText>
                        ))}
                    </List>
                </Box>
            </Container>
            <Container
                component="section"
                maxWidth='lg'
                sx={{...PADDING_Y_APPBAR_STYLE, textAlign: 'center'}}
            >
                Copyright 2019 • All rights reserved • Staycation
            </Container>
        </Box>
    );
};

export default Footer;
