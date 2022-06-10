import React from 'react';
import {Link} from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Toolbar from '@mui/material/Toolbar';

import Logo from '../../base/Logo';
import TextLink from '../../base/TextLink';
import {COLOR_STAY_DARK_BLUE, PADDING_Y_APPBAR_STYLE} from '../../../const';

const navigationList = [
    {title: 'Home', to: '/'},
    {title: 'Browse by', to: '/browse-by'},
    {title: 'Stories', to: '/stories'},
    {title: 'Agents', to: '/agents'},
];

const Header = () => {
    return (
        <AppBar
            role='rowheader'
            variant='outlined'
            position='sticky'
            sx={{
                background: '#FFFFFF',
                borderTopWidth: 0,
                borderLeftWidth: 0,
                borderRightWidth: 0,
                borderBottomWidth: 1,
                ...PADDING_Y_APPBAR_STYLE
            }}
        >
            <Container maxWidth='lg'>
                <Toolbar disableGutters sx={{justifyContent: 'space-between', minHeight: 'unset !important'}}>
                    <Box>
                        <Link to="/">
                            <Logo />
                        </Link>
                    </Box>
                    <Box sx={{display: {xs: 'none', md: 'block'}}}>
                        <Box component='nav' role='navigation'>
                            <List disablePadding sx={{display: 'flex', color: COLOR_STAY_DARK_BLUE}}>
                                {navigationList.map(({title, to}) => (
                                    <ListItem key={to} sx={{padding: '0 17.5px', width: 'auto'}}>
                                        <TextLink to={to}>{title}</TextLink>
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
