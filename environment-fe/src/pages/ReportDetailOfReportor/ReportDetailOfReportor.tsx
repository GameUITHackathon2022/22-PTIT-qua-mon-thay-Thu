import React from 'react';
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
import ReportDetail from '../../components/ReportDetail';
import './ReportDetailOfReportor.scss';
import AppBarMobile from '../../components/AppBarMobile';

type Props = {};

const ReportDetailOfReportor = (props: Props) => {
    return (
        <React.Fragment>
            <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
                <ReportDetail />
            </Container>
            <AppBarMobile />
        </React.Fragment>
    );
};

export default ReportDetailOfReportor;
