import { IconButton } from '@material-ui/core';
import { ArrowBackOutlined } from '@material-ui/icons';
import React from 'react';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInWithGoogle } = useAuth()
    return (
        <div style={{ textAlign: 'center' }}>
            <IconButton onClick={signInWithGoogle} aria-label="" color="primary">
                Sign In With Google<ArrowBackOutlined />
            </IconButton>
        </div>
    );
};

export default Login;