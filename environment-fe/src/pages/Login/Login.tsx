import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { User, userAPI } from 'services/userAPI';
import { Alert, Snackbar } from '@mui/material';
import { useNavigate } from 'react-router';

function Copyright(props: any) {
    return (
        <Typography
            variant='body2'
            color='text.secondary'
            align='center'
            {...props}
        >
            {'Copyright © '}
            <Link color='inherit' href='https://mui.com/'>
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function SignIn() {
    const dispatch = useDispatch();
    const [user_name, setUsername] = React.useState('');
    const [pass_word, setPassword] = React.useState('');
    const [alert, setAlert] = React.useState(false);
    const navigate = useNavigate();

    const handleSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault();
        const submit = async () => {
            try {
                const data: any = await userAPI.login({
                    user_name: user_name,
                    pass_word: pass_word,
                });
                dispatch({ type: 'user/setUser', payload: data.Users[0] });

                navigate('/');
            } catch {
                setAlert(true);
                console.log('err');
            }
        };
        submit();
    };
    return (
        <ThemeProvider theme={theme}>
            <Container component='main' maxWidth='xs'>
                <CssBaseline />
                <Snackbar open={alert} autoHideDuration={6000}>
                    <Alert severity='warning' sx={{ width: '100%' }}>
                        Sai thông tin đăng nhập
                    </Alert>
                </Snackbar>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component='h1' variant='h5'>
                        Sign in
                    </Typography>
                    <Box
                        component='form'
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{ mt: 1 }}
                    >
                        <TextField
                            margin='normal'
                            required
                            fullWidth
                            id='username'
                            label='Username'
                            name='username'
                            autoComplete='nhan'
                            autoFocus
                            onChange={(e) => setUsername(e.target.value)}
                            value={user_name}
                        />
                        <TextField
                            margin='normal'
                            required
                            fullWidth
                            name='password'
                            label='Password'
                            type='password'
                            id='password'
                            autoComplete='nhan'
                            onChange={(e) => setPassword(e.target.value)}
                            value={pass_word}
                        />
                        {/* <FormControlLabel
                            control={
                                <Checkbox value='remember' color='primary' />
                            }
                            label='Remember me'
                        /> */}
                        <Button
                            type='submit'
                            fullWidth
                            variant='contained'
                            sx={{ mt: 3, mb: 2 }}
                            onClick={handleSubmit}
                        >
                            Sign In
                        </Button>
                        {/* <Grid container>
                            <Grid item xs>
                                <Link href='#' variant='body2'>
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href='#' variant='body2'>
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid> */}
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}
function useAppDispatch() {
    throw new Error('Function not implemented.');
}
