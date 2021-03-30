import React from 'react';
import "./Formulageproduct.css";
import  {IoIosArrowForward} from "react-icons/io"


function Formulageroduct() {

    return (
        <div className="formulege-box-machine">
            <div className="text-parts">
                <p>Part</p>
            </div>
            <div className="buttons-parts">
                <a href="/" className="PLC-button">PLC</a>
                <a href="/" className="HMI-button">HMI</a>
                <a href="/" className="Inverter-button">Inverter</a>
            </div>
            <div className="text-product-name">
                <p >Backup name</p>
                <form className="form-text">
                    <input type="text"/>
                </form>
            </div>
            <div className="text-product-name">
                <p>Catalog name</p>
                <form className="form-text">
                    <input type="text"/>
                </form>
            </div>
            <div className="text-product-name">
                <p>Electrical cabinet number</p>
                <form className="form-text">
                    <input type="text"/>
                </form>
            </div>
        </div>
    )
}

export default Formulageroduct;
