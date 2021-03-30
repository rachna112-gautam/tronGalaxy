import React from "react";
import "./../Dashboard.css";
import Logo from './../../../assets/tron.png';
export default function Box(props) {
    return (
        <div>
            <div className={`box box-${props.number}`}>
                <div className="box-top">
                    {props.icon === "0" ? <div className="icon-box"><img src={Logo} alt="dhb" /></div> : <i className={`fa fa-${props.icon}`}></i>}

                    <span className="box-value">{props.value}</span>
                </div>
            </div>
            <div className="box-btm">
                <h5>{props.title}</h5>
            </div>
        </div>
    );
}
