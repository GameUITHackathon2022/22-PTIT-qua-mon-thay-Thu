import React from 'react';
import { styled } from '@mui/material/styles';
import {
    Container,
    Grid,
    Box,
    AppBar,
    Toolbar,
    Fab,
    IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import AddReportIcon from '../AddReportIcon';
import './AppBarMobile.scss';
type Props = {};

function AppBarMobile({}: Props) {
    return (
        <Grid container spacing={0} className='rp-detail-of-rptor__mobile-bar'>
            <Grid item xs={12} sm={0}>
                <AppBar
                    position='fixed'
                    color='primary'
                    sx={{ top: 'auto', bottom: 0 }}
                >
                    <Toolbar>
                        <IconButton color='inherit' aria-label='open drawer'>
                            <HomeIcon />
                        </IconButton>
                        {/* <StyledFab color='secondary' aria-label='add'>
                            <AddIcon />
                        </StyledFab> */}
                        <AddReportIcon top={-30} />
                        <Box sx={{ flexGrow: 1 }} />
                        <IconButton color='inherit'>
                            <PersonIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Grid>
        </Grid>
    );
}

export default AppBarMobile;
