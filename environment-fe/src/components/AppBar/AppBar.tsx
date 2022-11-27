import { styled } from '@mui/material/styles';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { drawerWidth } from '../../constants/UI';
import HomeIcon from '@mui/icons-material/Home';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import PersonIcon from '@mui/icons-material/Person';

import React from 'react';
import AppBar from '@mui/material/AppBar';
import { Button, IconButton, Popper, Toolbar, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import { Link, useNavigate } from 'react-router-dom';

type Props = {};

const MyAppBar = (props: Props) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const navigate = useNavigate();
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        navigate('/login');
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };
    return (
        <AppBar position='absolute' className='toolbar'>
            <Toolbar
                sx={{
                    pr: '24px', // keep right padding when drawer closed
                }}
            >
                <Typography
                    component='h1'
                    variant='h6'
                    color='inherit'
                    noWrap
                    sx={{ flexGrow: 1 }}
                >
                    <Stack direction='row' spacing={3}>
                        <Link to='/' style={{ color: 'white' }}>
                            <HomeIcon />
                        </Link>
                        <Link to='/report-list' style={{ color: 'white' }}>
                            <FormatListBulletedIcon />
                        </Link>
                    </Stack>
                </Typography>
                <IconButton color='inherit' onClick={handleClick}>
                    <PersonIcon />
                </IconButton>
                <Popper open={Boolean(anchorEl)} anchorEl={anchorEl}>
                    <Box
                        sx={{
                            border: 0,
                            p: 1,
                            bgcolor: 'background.paper',
                            zIndex: 100,
                        }}
                    >
                        <Button variant='contained'>Logout</Button>
                    </Box>
                </Popper>
            </Toolbar>
        </AppBar>
    );
};

export default MyAppBar;
