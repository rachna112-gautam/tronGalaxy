import React from "react";
import "./../Dashboard.css";
import Logo from './../../../assets/logo.png';
export default function Box(props) {
    return (
        <div>
            <div className={`box box-${props.number}`}>
                <div className="box-top">
                    {props.icon === "0" ? <div><img src={Logo} alt="dhb" /></div> : <i className={`fa fa-${props.icon}`}></i>}

                    <span>{props.value}</span>
                </div>
            </div>
            <div className="box-btm">
                <h5>{props.title}</h5>
            </div>
        </div>
    );
}
