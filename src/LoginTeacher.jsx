import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import LoginIcon from '@mui/icons-material/Login';

export default function LoginTeacher(props){
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return(
        <Container maxWidth="sm">
            <CssBaseline />
            <Box
                sx={{ marginTop: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                <Avatar sx={{ mb: 2 }}>
                    <LoginOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">教職員 ログインページ</Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField margin="normal"
                        fullWidth
                        id="email"
                        label="Eメールアドレス"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        name="password"
                        label="パスワード"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="ログイン状態を保存する" className="pt-2"
                    />
                    <div className="button01 row pt-3">
                        <Link to="/Home_Teacher">
                            <p className="col-9 py-1">ログインする</p>
                            <div className="col-1" />
                            <LoginIcon className="col-2" />
                        </Link>
                    </div>
                </Box>
            </Box>
        </Container>
    )
}