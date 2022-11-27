import { Box } from '@mui/material';
import Map from 'pages/Map';
import React from 'react';
import MyAppBar from '../../components/AppBar';

type Props = {};

const Home = (props: Props) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <MyAppBar />
            <div
                style={{ height: '60px', width: '100vw', display: 'block' }}
            ></div>
            <Map />
        </Box>
    );
};

export default Home;
