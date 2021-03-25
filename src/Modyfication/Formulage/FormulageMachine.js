import React from 'react';
import "./FormulageMachine.css";

function FormulageMachine() {
    return (
        <div className="formulege-box-machine">
            <div className="text-polarization">
                <p>Polarization</p>
            </div>
            <div className="buttons-polarization">
                <a className="Anode-button">Anode</a>
                <a className="Cathode-button">Cathode</a>
            </div>
            <div className="text-machine-name">
                <p>Machine Name</p>
            </div>
            <div className="machine-name-button-box">
                <div className="left-button">
                    <a>Switch Name</a>
                </div>
                <div className="rigcht-button-box">
                    <div className="all-name-box">
                        <a className="coater-name" >Coater</a>
                        <a className="roll-press-name">Roll Press</a>
                        <a className="slitter-name">Slitter</a>
                        <a className="half-slitter-name">Half Slitter</a>
                        <a className="rewinder-name">Rewinder</a>
                        <a className="mixer-name">Mixer</a>
                        <a className="srp-name">SRP</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FormulageMachine;
