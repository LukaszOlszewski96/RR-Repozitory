import React from 'react';
import "./Descrition.css";
import  {FaRegCalendarAlt} from "react-icons/fa";

function Descrition() {

    const [showCalendar, setCalendarStatus] = React.useState(false);

    const clickCalendar = () =>{
        setCalendarStatus(!showCalendar);
    }

    return (
        <div className="formulege-box-machine">
            <p className="calendar-data">31.03.2021</p>
            <a href="#" onClick={clickCalendar} className= { showCalendar ? "calendar-button active" : "calendar-button"}>
                <FaRegCalendarAlt/>
            </a>
            <div className="text-description-name">
                <p >Topic</p>
                <form className="form-text">
                    <input type="text"/>
                </form>
            </div>
            <div className="text-description-name">
                <p>Description</p>
                <form className="form-text-description">
                    <input type="text-description"/>
                </form>
            </div>
        </div>
    )
}

export default Descrition;