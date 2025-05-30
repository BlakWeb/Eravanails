import React from 'react'
import "./Header.css";
import pedicure_man from "../../assets/pedicure-man.jpg"

const Header = () => {
    return (
        <div className="header">
            <h1>Welcome to Rivaan on Nails</h1>
            <img src={pedicure_man} alt="Nail Tech" className="header-image" />
        </div>
    )
}

export default Header
