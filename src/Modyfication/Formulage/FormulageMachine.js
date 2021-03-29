import React from 'react';
import "./FormulageMachine.css";
import  {IoIosArrowForward} from "react-icons/io"
import NameLine from './Line Name/NameLine';
import LineNumber from './NumberLine/LineNumber';


function FormulageMachine() {

    const [showNameLine,setShowNameLine] = React.useState(false);

    const clickName =()=>{
        setShowNameLine(true);
    }

    return (
        <div className="formulege-box-machine">
            <div className="text-polarization">
                <p>Polarization</p>
            </div>
            <div className="buttons-polarization">
                <a href="/" className="Anode-button">Anode</a>
                <a href="/" className="Cathode-button">Cathode</a>
            </div>
            <div className="text-machine-name">
                <p>Switch Name</p>
            </div>
            <div className="machine-name-button-box">
                <div className="left-button">
                    <a className="switch-name" href="/" onClick={clickName}>Switch Name <p><IoIosArrowForward/></p></a>
                </div>
                <div className="rigcht-button-box">
                    {showNameLine ? <NameLine/> : <div></div>}
                </div>
            </div>
            <div className="text-machine-name">
                <p>Machine Number</p>
            </div>
            <div className="machine-name-button-box">
                <div className="left-button">
                    <a className="switch-number" href="/">Switch Number<p><IoIosArrowForward/></p></a>
                </div>
                <div className="rigcht-button-box">
                    <LineNumber/>
                </div>
            </div>
        </div>
    )
}

export default FormulageMachine;
