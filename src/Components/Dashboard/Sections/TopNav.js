import React, { useEffect, useState } from "react";
import Logo from "./../../../assets/TronGalaxyPower.png";
import { connect } from "react-redux"
function TopNav(props) {
  console.log("props in header", props)
  const [contractBal, setContractBal] = useState("-");
  useEffect(() => {
    if (props.personalData) {

      setContractBal(props.personalData.personalData.contractBalance);

    }
  }, [contractBal, props.personalData])
  return (
    <nav class="top-navbar">
      <div class="container-fluid header">
        <a class="navbar-logo" href="/landing" aria-label="Tron Galaxy Power">
          <img src={Logo} alt="" />
        </a>

        <div className="contract-bal">
          Contract Balance
        <span className="ml-3">
            {contractBal}
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

export default connect(mapStateToProps)(TopNav);
