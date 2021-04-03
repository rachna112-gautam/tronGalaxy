import React,{useEffect,useState} from "react";
import Logo from "./../../../assets/TronGalaxyPower.png";
import '../Dashboard.css'
import { connect } from "react-redux"

 function Header(props) {
  const [personalData,setPersonalData]=useState(0)

  useEffect(() => {
    setPersonalData(props.personalData)
    
  }, [props.personalData])
  

  return (
    <nav class="navbar navbar-expand-lg navbar-dark">
      <a class="navbar-logo" href="/" aria-label="Tron Galaxy Power">
        <img src={Logo} alt="" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item contract-bal ">
            Contract Balance
            <span className="ml-3">
              {props.personalData
                ? props.personalData.personalData.contractBalance
                : "-"}
            </span>
          </li>
        </ul>
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

export default connect(mapStateToProps)(Header);