import React from "react";
import logo from './logo.jpg'
import { Link } from "react-router-dom"

class Header extends React.Component {
    render() {
        return <>
        
        <Link to="/"><img src={logo} align="middle" height= '130'alt="Logo" /></Link>
        </>

    }
}

export default Header;