import React from 'react';
import './Hamburger.css';
import {AiOutlineClose} from "react-icons/ai";
import {FiMenu} from "react-icons/fi";
import {MdDashboard} from "react-icons/md";
import {HiFolderAdd} from "react-icons/hi";

function Hamburger() {

    const [clickHamburger, setClicHamburger] = React.useState(false);
    const [showMenu,setMenu] = React.useState(false);

    const clickMenu =() =>{
        setClicHamburger(!clickHamburger);
        setMenu(!showMenu);
    }



    return (
        <div className="hamburger-conteiner">
            <a href="#" className={clickHamburger ?"hamburger-menu-icon active":"hamburger-menu-icon"} onClick={clickMenu}> {clickHamburger ? <AiOutlineClose/> : <FiMenu/>}</a>
            <div className= {showMenu ? "menu-link-box active" : "menu-link-box"}>
                <div className="link-conteiner">
                    <div className="link-box"><a href="/"><div className="icon-link"><MdDashboard/></div>Dashboard</a></div>
                    <div className="link-box"><a href="/"><div className="icon-link"><HiFolderAdd/></div>Modyfication</a></div>
                </div>
            </div>
        </div>
    )
}

export default Hamburger;