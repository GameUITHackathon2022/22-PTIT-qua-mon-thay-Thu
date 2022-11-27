import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import {
    CssBaseline,
    Toolbar,
    IconButton,
    Typography,
    Popper,
    Button,
    Fab,
} from '@mui/material';

import Box from '@mui/material/Box';
import MyAppBar from '../../components/AppBar';
import Report from './components/Report';
import Reports from './components/Reports';
import AddReportIcon from '../../components/AddReportIcon';
import AddIcon from '@mui/icons-material/Add';
import CardItem from './components/CardItem';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AppBarMobile from 'components/AppBarMobile';
import './Reportor.scss';
import AddReportModal from 'components/AddReportModal';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { reportAPI } from 'services/reportAPI';
const mdTheme = createTheme();
const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
});

const Reportor: React.FC = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [openModal, setOpenModal] = React.useState(false);

    const carddata = useAppSelector((state) => state.carddata);
    const dispatch = useAppDispatch();

    React.useEffect(() => {
        const fetchRpData = async () => {
            try {
                const data: any = await reportAPI.getReports();
                console.log('data.Reports', data.Reports);
                dispatch({ type: 'reports/setReports', payload: data.Reports });
            } catch {
                console.log('err');
            }
        };
        fetchRpData();
    }, []);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <MyAppBar />

                <AddReportModal open={openModal} setOpen={setOpenModal} />
                <Box
                    component='main'
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: 'fit-content',
                        overflow: 'auto',
                    }}
                    className='reportor__content'
                >
                    {/* <Toolbar /> */}
                    <Container
                        maxWidth='lg'
                        sx={{ mt: 4, mb: 4, overflowY: 'scroll' }}
                    >
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Grid container spacing={3}>
                                    <Grid item xs={6} sm={3}>
                                        <CardItem
                                            title='Phản hồi của tôi'
                                            number={carddata.draft + ''}
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={3}>
                                        <CardItem
                                            title='Phản hồi đang xử lý'
                                            number={carddata.handling + ''}
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={3}>
                                        <CardItem
                                            title='Phản hồi đã xử lý'
                                            number={carddata.resolved + ''}
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={3}>
                                        <CardItem
                                            title='Phản hồi bị từ chối'
                                            number={carddata.rejected + ''}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={4}>
                                <Reports />
                            </Grid>
                            <Grid item xs={8}>
                                <Report />
                            </Grid>
                        </Grid>
                    </Container>
                    <Fab
                        color='primary'
                        className='add-report__btn'
                        aria-label='add'
                        onClick={() => setOpenModal(true)}
                    >
                        <AddIcon />
                    </Fab>
                </Box>
            </Box>
            <AppBarMobile />
        </ThemeProvider>
    );
};

export default Reportor;
