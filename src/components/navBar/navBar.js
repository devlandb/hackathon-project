import React from "react";
import './navBar.css'
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";



const Navbar = ({logOutOfApp}) => {
    /*
    const navigate = useNavigate();

    const handleLogoutClick = () => {
        navigate('');
        logOutOfApp();
    }
    const handleHomeClick = () => {
        navigate('');
        window.location.reload();
    }
    */

    return (
        <div className="navbar-container">
            {/*
            <Button disableRipple onClick={handleHomeClick}>Home Page</Button>
            <div style={{flex: 1}}/>
            <Button disableRipple onClick={handleLogoutClick}>log out</Button>
            */}
            <Button>Home Page</Button>
            <div style={{flex: 1}}/>
            <Button className="profile">Profile</Button>

            
        </div>
    )
};

export default Navbar;