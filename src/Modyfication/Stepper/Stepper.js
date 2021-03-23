import React from 'react';
import "./Stepper.css";

function Stepper() {
    return (
        <div className="stepper-conteiner">
            <div className="rectangle-1"><p>Machine</p></div>
            <div className="line 1"></div>
            <div className="line 2"></div>
            <div className="rectangle-2"><p>Part</p></div>
            <div className="line 3"></div>
            <div className="line 4"></div>
            <div className="rectangle-3"><p>Description</p></div>
        </div>
    )
}

export default Stepper;
