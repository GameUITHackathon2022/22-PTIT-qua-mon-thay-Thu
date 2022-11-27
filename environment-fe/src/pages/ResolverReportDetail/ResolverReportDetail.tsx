import {
    Avatar,
    Box,
    Button,
    Card,
    Chip,
    Container,
    CssBaseline,
    Fab,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Paper,
    Popper,
    Stack,
    Switch,
    ThemeProvider,
    Toolbar,
    Typography,
} from '@mui/material';
import AppBarMobile from 'components/AppBarMobile';
import { styled, createTheme } from '@mui/material/styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React, { useEffect, useState } from 'react';
import { top10Users } from '../../constants/DataMock';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import ListIcon from '@mui/icons-material/List';
import Title from 'pages/ResolverReports/Title';
import MyAppBar from '../../components/AppBar';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { Status } from 'constants/Status';
import ReportDetail from 'components/ReportDetail';
const mdTheme = createTheme();

function createDate(
    id: number,
    date: string,
    title: string,
    description: string,
    author: string,
    images: string[],
    status: string
) {
    return { id, date, title, description, author, images, status };
}

const fakeData = createDate(
    1,
    '12:42 PM 26/11/2022',
    'This is a title',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita rerum modi quas blanditiis, sapiente odit maxime eligendi voluptate quasi ex ad. Doloremque veniam tenetur quae, ipsum a ad? Exercitationem, veritatis.\nLorem ipsum dolor sit amet consectetur adipisicing elit. Expedita rerum modi quas blanditiis, sapiente odit maxime eligendi voluptate quasi ex ad. Doloremque veniam tenetur quae, ipsum a ad? Exercitationem, veritatis.\nLorem ipsum dolor sit amet consectetur adipisicing elit. Expedita rerum modi quas blanditiis, sapiente odit maxime eligendi voluptate quasi ex ad. Doloremque veniam tenetur quae, ipsum a ad? Exercitationem, veritatis.\nLorem ipsum dolor sit amet consectetur adipisicing elit. Expedita rerum modi quas blanditiis, sapiente odit maxime eligendi voluptate quasi ex ad. Doloremque veniam tenetur quae, ipsum a ad? Exercitationem, veritatis.\n',
    'user1',
    [
        'https://source.unsplash.com/random/800x800/?img=1',
        'https://source.unsplash.com/random/800x800/?img=1',
        'https://source.unsplash.com/random/800x800/?img=1',
    ],
    'draft'
);

function ResolverReportDetail() {
    const images = fakeData.images;
    const report = useAppSelector((state) => state.report);
    const mystatus: string = report.data?.status || 'draft';
    const dispatch = useAppDispatch();
    const [buttonTitle, setBtnTitle] = useState('Xử lý');
    useEffect(() => {
        switch (mystatus) {
            case 'received':
                setBtnTitle('Xử lý');
                break;
            case 'handling':
                setBtnTitle('Xử lý xong');
                break;
            default:
                setBtnTitle('Đã nhận được');
        }
    }, [report.data?.status, mystatus]);

    const handleResoved = () => {
        dispatch({ type: 'report/handleResolve' });
    };
    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <MyAppBar />
                <Box
                    component='main'
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }}
                    className='reportor__content'
                >
                    <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={8} lg={9}>
                                <ReportDetail />
                            </Grid>
                            <Grid item xs={12} md={4} lg={3}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-around',
                                        height: '100px',
                                    }}
                                >
                                    <Chip label={mystatus} />
                                    <Button
                                        variant='contained'
                                        onClick={handleResoved}
                                    >
                                        {buttonTitle}
                                    </Button>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>
            <AppBarMobile />
        </ThemeProvider>
    );
}

export default ResolverReportDetail;
