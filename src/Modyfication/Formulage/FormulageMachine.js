import React from 'react';
import "./FormulageMachine.css";

function FormulageMachine() {
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
                <p>Machine Name</p>
            </div>
            <div className="machine-name-button-box">
                <div className="left-button">
                    <a href="/">Switch Name</a>
                </div>
                <div className="rigcht-button-box">
                    <div className="all-name-box">
                        <a href="/" className="coater-name" >Coater</a>
                        <a href="/" className="roll-press-name">Roll Press</a>
                        <a href="/" className="slitter-name">Slitter</a>
                        <a href="/" className="half-slitter-name">Half Slitter</a>
                        <a href="/" className="rewinder-name">Rewinder</a>
                        <a href="/" className="mixer-name">Mixer</a>
                        <a href="/" className="srp-name">SRP</a>
                    </div>
                </div>
            </div>
            <div className="text-machine-name">
                <p>Machine Number</p>
            </div>
            <div className="machine-name-button-box">
                <div className="left-button">
                    <a href="/">Switch Number</a>
                </div>
                <div className="rigcht-button-box">
                    <div className="all-name-box">
                        <a href="/" className="coater-name" >3-1</a>
                        <a href="/" className="roll-press-name">3-2</a>
                        <a href="/" className="slitter-name">3-3</a>
                        <a href="/" className="half-slitter-name">3-4</a>
                        <a href="/" className="rewinder-name">3-5</a>
                        <a href="/" className="mixer-name">3-6</a>
                        <a href="/" className="srp-name">3-7</a>
                    </div>
                </div>
            </div>
            

        </div>
    )
}

export default FormulageMachine;
