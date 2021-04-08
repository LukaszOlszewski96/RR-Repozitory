import React from 'react';
import "./FormulageMachine.css";
import  {IoIosArrowForward} from "react-icons/io"
import NameLine from './Line Name/NameLine';
import LineNumber from './NumberLine/LineNumber';


function FormulageMachine() {

    const [showNameLine,setShowNameLine] = React.useState(false);
    const [showNumberLine,setShowNumberLine] = React.useState(false);
<<<<<<< HEAD
    const [activeAnodeBtn,setActiveAnodeBtn] = React.useState(false);
    const [activeCathodeBtn,setActiveCathodeBtn] = React.useState(false);
=======
    const [activeAnodeBtn, setAnodeBtn] = React.useState(false);
    const [activeCathodeBtn, setCathodeBtn] = React.useState(false);

>>>>>>> Future_Product_screen
    
    const clickName =()=>{
        setShowNameLine(!showNameLine);
    } 
    const clickNumber =()=>{
        setShowNumberLine(!showNumberLine);
    }
<<<<<<< HEAD

    const clickButtonAnode =()=>{
        setActiveAnodeBtn(!activeAnodeBtn);
        setActiveCathodeBtn(false);
    }
    
    const clickButtonCathode=()=>{
        setActiveCathodeBtn(!activeCathodeBtn);
        setActiveAnodeBtn(false);
=======
    const clickAnodeBtn =()=>{
        setAnodeBtn(!activeAnodeBtn);
>>>>>>> Future_Product_screen
    }
    const clickCathodeBtn =()=>{
        setCathodeBtn(!activeCathodeBtn);
    }
  

    return (
        <div className="formulege-box-machine">
            <div className="text-polarization">
                <p>Polarization</p>
            </div>
            <div className="buttons-polarization">
<<<<<<< HEAD
                <a id="anode-button-id" href="#" onClick={clickButtonAnode} className={ activeAnodeBtn ? "Anode-button active":"Anode-button"} >Anode</a>
                <a id="cathode-button-id" href="#" onClick={clickButtonCathode} className={activeCathodeBtn ? "Cathode-button active":"Cathode-button"}>Cathode</a>
=======
                <a id="anode-button-id" href="#" className={activeAnodeBtn ? "Anode-button active":"Anode-button"} onClick={clickAnodeBtn}  >Anode</a>
                <a id="cathode-button-id" href="#" className={activeCathodeBtn ? "Cathode-button active":"Cathode-button"} onClick={clickCathodeBtn}>Cathode</a>
>>>>>>> Future_Product_screen
            </div>
            <div className="text-machine-name">
                <p >Machine Name</p>
            </div>
            <div className="machine-name-button-box">
                <div className="left-button">
                    <a className="switch-name" href="#" onClick={clickName}>Switch name <p><IoIosArrowForward/></p></a>
                </div>
                <div className="rigcht-button-box">
                    { showNameLine ? <div className="all-name-box">
                        <a value="coater" href="#" className="coater-name">Coater</a>
                        <a value="roll press" href="#" className="roll-press-name">Roll Press</a>
                        <a value="slitter" href="#" className="slitter-name">Slitter</a>
                        <a value="half slitter" href="#" className="half-slitter-name">Half Slitter</a>
                        <a value="rewinder" href="#" className="rewinder-name">Rewinder</a>
                        <a value="mixer" href="#" className="mixer-name">Mixer</a>
                        <a value="srp" href="#" className="srp-name">SRP</a>
                    </div> : <div></div> }
                </div>
            </div>
            <div className="text-machine-name">
                <p>Machine Number</p>
            </div>
            <div className="machine-name-button-box">
                <div className="left-button">
                    <a className="switch-number" href="#" onClick={clickNumber}>Switch Number<p><IoIosArrowForward/></p></a>
                </div>
                <div className="rigcht-button-box">
                    { showNumberLine ? <LineNumber/> : <div></div> }
                </div>
            </div>
        </div>
    )
}

export default FormulageMachine;
