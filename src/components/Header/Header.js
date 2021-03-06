import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import header from '../../images/header.png';
import logo from '../../images/icons/logo.png';
import './Header.css';


const Header = () => {
    const { user, logout } = useAuth()
    return (
        <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${header})` }} className="header">
            <nav className="nav">
                <ul>
                    <li>
                        <img className="logo" src={logo} alt="" />
                    </li>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>

                    {user?.email && <li>
                        <Link className="btn-book" to="/book">Book</Link>
                    </li>}
                    {user?.email && <li>
                        <span style={{ color: 'white' }}>{user.displayName}</span>
                    </li>}
                    {user?.email ?<li>
                        <button onClick={logout} style={{ padding: '6px 15px', borderRadius: '4px', border: 'none', cursor: 'pointer' }}>Logout</button>
                    </li> : <li>
                        <Link to="/login">Login</Link>
                    </li>}
                </ul>
            </nav>
            <div className="title-container">
                <h1>Burj Al Arab</h1>
                <h2>A global icon of Arabian luxury</h2>
            </div>
        </div>
    );
};

export default Header;