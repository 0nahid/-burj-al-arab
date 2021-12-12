import { ArrowBackOutlined } from '@material-ui/icons';
import { Button } from '@material-ui/core/';
import React from 'react';
import useAuth from '../../hooks/useAuth';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
const Login = () => {
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from.pathname || '/';
    const { signInWithGoogle } = useAuth();
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => { history.push(redirect_url) }).then(error => { console.log(error) })
    }
    return (
        <div style={{ textAlign: 'center', marginTop: '10px' }}>
            <Button onClick={handleGoogleSignIn} variant="contained" color="success">
                Sign In With Google<ArrowBackOutlined />
            </Button>
        </div>
    );
};

export default Login;