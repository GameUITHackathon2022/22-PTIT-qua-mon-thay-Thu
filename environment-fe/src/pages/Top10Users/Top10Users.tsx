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
import { Link } from 'react-router-dom';
import ListIcon from '@mui/icons-material/List';
const mdTheme = createTheme();
export default function Top10Users() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };
    const data = top10Users.map((user) => (
        <ListItem key={user.id}>
            <ListItemAvatar>
                <Avatar>{user.avatar}</Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={
                    user.username + ' - ' + user.num_reports + ' lần báo cáo'
                }
            />
        </ListItem>
    ));
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
                        height: 'fit-content',
                        overflow: 'auto',
                    }}
                    className='reportor__content'
                >
                    {/* <Toolbar /> */}
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
                                    <Typography variant='h4'>
                                        Top 10 người dùng
                                    </Typography>
                                    <List sx={{ maxWidth: 500 }}>{data}</List>
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
