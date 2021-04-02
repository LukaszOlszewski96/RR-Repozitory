import React from 'react';
import "./Formulageproduct.css";
import  {IoIosArrowForward} from "react-icons/io"


function Formulageroduct() {

    const [btnActivePLC, setBtnActivePLC] = React.useState(false);
    const [btnActiveHMI, setBtnActiveHMI] = React.useState(false);
    const [btnAvtiveInv, setBtnActiveInv] = React.useState(false);

    const clickPLCbtn = () => {
        setBtnActivePLC(!btnActivePLC);
        setBtnActiveHMI(false);
        setBtnActiveInv(false);
    }
    const clickHMIbtn = () => {
        setBtnActiveHMI(!btnActiveHMI);
        setBtnActivePLC(false);
        setBtnActiveInv(false);
    }
    const clickInvBtn = () => {
        setBtnActiveInv(!btnAvtiveInv);
        setBtnActiveHMI(false);
        setBtnActivePLC(false);
    }

    return (
        <div className="formulege-box-machine">
            <div className="text-parts">
                <p>Part</p>
            </div>
            <div className="buttons-parts">
                <a href="#" onClick={clickPLCbtn} className={btnActivePLC ? "PLC-button active":"PLC-button"}>PLC</a>
                <a href="#" onClick={clickHMIbtn} className={btnActiveHMI ? "HMI-button active":"HMI-button"}>HMI</a>
                <a href="#" onClick={clickInvBtn} className={btnAvtiveInv ? "Inverter-button active":"Inverter-button"}>Inverter</a>
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
