import {
    Avatar,
    Box,
    Button,
    Card,
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
    ThemeProvider,
    Toolbar,
    Typography,
} from '@mui/material';
import AppBarMobile from 'components/AppBarMobile';
import { styled, createTheme } from '@mui/material/styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from 'react';
import MyAppBar from '../../components/AppBar';
import { top10Users } from '../../constants/DataMock';
import HomeIcon from '@mui/icons-material/Home';
import Reports from './Reports';
import { Link } from 'react-router-dom';
import ListIcon from '@mui/icons-material/List';
import { reportAPI } from 'services/reportAPI';
import { useAppDispatch } from 'app/hooks';
const mdTheme = createTheme();

function ResolverReports() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };
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
                        height: '90vh',
                        overflow: 'auto',
                        marginTop: '60px',
                    }}
                    className='reportor__content'
                >
                    <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
                        <Grid container justifyContent='center'>
                            <Grid item>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                    }}
                                >
                                    <Reports />
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

export default ResolverReports;
