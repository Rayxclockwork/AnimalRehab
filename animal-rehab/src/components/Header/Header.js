import React from "react";
import logo from './Xlogo.jpg'
import { Link } from "react-router-dom"

class Header extends React.Component {
    render() {
        return <>
        <Link to="/"><img src={logo} width = '240' height= '150'alt="Logo" /></Link>
        </>

    }
}

export default Header;