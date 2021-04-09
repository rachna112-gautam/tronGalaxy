import React, { useEffect, useState } from "react";
import Logo from "./../../../assets/TronGalaxyPower.png";
import { connect } from "react-redux"
export default function TopNav(props) {

  return (
    <nav class="top-navbar">
      <div class="container-fluid header">
        <a class="navbar-logo" href="/" aria-label="Tron Galaxy Power">
          <img src={Logo} alt="" />
        </a>

        <div className="contract-bal">
          Contract Balance
        <span className="ml-3">
            {props.personalData
              ? props.personalData.personalData.contractBalance
              : "-"}
          </span>
        </div>
      </div>
    </nav>
  );
}
const mapStateToProps = (state) => {
  return {
    personalData: state.personalData,
    account: state.account,
  };
};

connect(mapStateToProps)(TopNav);
