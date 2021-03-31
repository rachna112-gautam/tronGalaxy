import React, { useState, useEffect } from "react";
import logo from "../../assets/TronGalaxyPower.png";
import Config from "./../../BlockchainProvider/Config";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import "./LandingPage.scss";
import { connect } from "react-redux";

const Header = (props) => {
  const [contract, setContract] = useState();
  const [isOpen, setIsOpen] = useState(false);
  // console.log(
  //   "contract balance in landing page header--->",
  //   props.personalData.personalData.contractBalance
  // );

  const toggle = () => setIsOpen(!isOpen);

  const enter = async () => {
    if (!props.personalData) {
      alert("not loaded");
      return;
    }

    if (props.personalData.isExist) {
      alert("user already exist");
      return;
    }

    await props.contract.contract.methods
      .enterSystem(Config.ADMIN_WALLET)
      .send({
        from: props.account,
        callValue: props.personalData.poolPrice[0],
      });
  };

  return (
    <div>
      <Navbar className="header " dark expand="md">
        <NavbarBrand href="/">
          <img src={logo} alt="logo" className="logo"></img>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} navbar-dark />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar className="header-link">
            <NavItem className="wallet-info">
              <NavLink
                href={
                  !props.account
                    ? `https://shasta.tronscan.org/#/address/`
                    : `https://shasta.tronscan.org/#/address/${props.account.address}`
                }
              >
                {props.account ? props.account.address : "-"}
                <span className="ml-3">
                  {" "}
                  {props.personalData
                    ? props.personalData.personalData.contractBalance
                    : "-"}
                </span>
              </NavLink>
            </NavItem>

            {/* <NavItem className="dream-btn-group fadeInUp login" data-wow-delay="0.4s">
              <NavLink className="btn more-btn" onClick={() => {
                enter()
              }}>
                Enter
              </NavLink>
            </NavItem> */}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    personalData: state.personalData,
    contract: state.contract,
    account: state.account,
  };
};

export default connect(mapStateToProps)(Header);
