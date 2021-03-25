import React from 'react';
import BottomNavbar from './BottomNavbar/BottomNavbar';
import "./Modyfication.css";
import Navbar from './Navbar/Navbar';
import Stepper from './Stepper/Stepper';
import {BsChevronRight} from "react-icons/bs";
import FormulageMachine from './Formulage/FormulageMachine';


function Modyfiaction() {
    return (
            <div className="conteiner-modyfication">
                <Navbar/>
                <div className="stepper-bar-box">
                <Stepper/>
                </div>
                <div className="formulage-conteiner">
                    <FormulageMachine/>
                </div>
                <BottomNavbar/>
            </div>
    )
}

export default Modyfiaction;
