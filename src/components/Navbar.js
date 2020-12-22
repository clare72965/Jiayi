import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.scss'
import logo from '../asset/logo.png'


function Navbar({ fixNavBar }) {


    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <div className={fixNavBar ? "nav_box fix" : "nav_box"}>
            <div>
                <img src={logo} alt="logo" width="70%" />
            </div>
            <div className="nav_box_mobile" onClick={handleClick}>
                <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>

            <div className={click ? "nav_box_link active" : "nav_box_link inactive"}>
                <Link to="/" onClick={closeMobileMenu} >首頁</Link>
                <Link to="/achievement-display" onClick={closeMobileMenu}>成果展示</Link>
                <Link to="/contact" onClick={closeMobileMenu}>聯絡我們</Link>
            </div>
        </div >
    )
}

export default Navbar
