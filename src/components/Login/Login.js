import { IconButton } from '@material-ui/core';
import { ArrowBackOutlined } from '@material-ui/icons';
import React from 'react';


const Login = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <IconButton aria-label="" color="primary">
                Sign In With Google<ArrowBackOutlined />
            </IconButton>
        </div>
    );
};

export default Login;