import { IconButton } from '@material-ui/core';
import { ArrowBackOutlined } from '@material-ui/icons';
import React from 'react';
import useFirebase from './../../hooks/useFirebase';

const Login = () => {
    const { signInWithGoogle } = useFirebase()
    return (
        <div style={{ textAlign: 'center' }}>
            <IconButton onClick={signInWithGoogle} aria-label="" color="primary">
                Sign In With Google<ArrowBackOutlined />
            </IconButton>
        </div>
    );
};

export default Login;