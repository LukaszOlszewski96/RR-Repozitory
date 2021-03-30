import React from 'react';
import BottomNavbar from './BottomNavbar/BottomNavbar';
import "./Modyfication.css";
import Navbar from './Navbar/Navbar';
import Stepper from './Stepper/Stepper';
import FormulageMachine from './Formulage/FormulageMachine';
import Formulageproduct from './Formulage/product/Formulageproduct';
import Descrition from  "./Formulage/Descrition/Descrition";


function Modyfiaction() {
    
    const [showScreen, setScreen] = React.useState(2);

    const changeScreen = () =>{
        setScreen(showScreen+1);
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
                    <a href="#" className="next-button" onClick={changeScreen}>Next</a>
                </div>
            </div>
    )
}

export default Modyfiaction;
