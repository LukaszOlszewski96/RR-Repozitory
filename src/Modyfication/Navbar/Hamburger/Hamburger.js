import React from 'react';
import './Hamburger.css';
import {AiOutlineClose} from "react-icons/ai";
import {FiMenu} from "react-icons/fi";

function Hamburger() {

    const [clickHamburger, setClicHamburger] = React.useState(false);

    const clickMenu =() =>{
        setClicHamburger(!clickHamburger);
    }

    return (
        <div className="hamburger-conteiner">
            <a href="#" className="hamburger-menu-icon" onClick={clickMenu}> {clickHamburger ? <AiOutlineClose/> : <FiMenu/>}</a>
        </div>
    )
}

export default Hamburger
