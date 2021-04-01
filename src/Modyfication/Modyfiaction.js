import React from 'react';
import BottomNavbar from './BottomNavbar/BottomNavbar';
import "./Modyfication.css";
import Navbar from './Navbar/Navbar';
import Stepper from './Stepper/Stepper';
import FormulageMachine from './Formulage/FormulageMachine';
import Formulageproduct from './Formulage/product/Formulageproduct';
import Descrition from  "./Formulage/Descrition/Descrition";


function Modyfiaction() {
    
    const [showScreen, setScreen] = React.useState(0);

    const changeScreen1 = () =>{
        setScreen(1);
    }
    const changeScreen2 = () =>{
        setScreen(2);
    }
    const changeScreenBack = () =>{
        setScreen(0)
    } 
    const changeScreenBack1 = () =>{
        setScreen(1)
    }

    return (

            <div className="conteiner-modyfication">
                <Navbar/>
                <div className="stepper-bar-box">
                <Stepper/>
                </div>
                <div className="formulage-conteiner">
                   {showScreen===0 &&<FormulageMachine/>}
                   {showScreen===1 &&<Formulageproduct/>}
                   {showScreen===2 &&<Descrition/>}
                </div>
                <div className="bottom-navbar-conteiner">
                    {showScreen==0 && <a href="#" className="next-button" onClick={changeScreen1}>Next</a> }
                    {showScreen==1 && <a href="#" className="next-button" onClick={changeScreen2}>Next</a>}
                    {showScreen==1 && <a href="#" className="back-button" onClick={changeScreenBack}>Back</a>}
                    {showScreen==2 && <a href="#" className="send-button">Send</a> }
                    {showScreen==2 && <a href="#" className="back-button" onClick={changeScreenBack1}>Back</a>}
                </div>
            </div>
    )
}

export default Modyfiaction;
