import React from 'react';
import BottomNavbar from './BottomNavbar/BottomNavbar';
import Button from './Button/Button';
import "./Modyfication.css";
import Navbar from './Navbar/Navbar';
import Stepper from './Stepper/Stepper';



function Modyfiaction() {
    return (
            <div className="conteiner-modyfication">
                <Navbar/>
                <div className="stepper-bar-box">
                <Stepper/>
                </div>
                <div className="formulage-conteiner">
                    <p>Polarization</p>
                    <div className="button-box">
                        <a href="/">Anode</a>
                        <a href="/">Cathode</a>
                    </div>
                </div>
                <BottomNavbar/>
            </div>
    )
}

export default Modyfiaction;
