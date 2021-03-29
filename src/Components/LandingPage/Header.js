import React, { useState } from 'react'
import logo from "../../assets/TronGalaxyPower.png";
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
import './LandingPage.scss'
import { connect } from "react-redux";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [poolsPrice, setPoolsPrice] = useState([]);

  const toggle = () => setIsOpen(!isOpen);
  const enter = async () => {
    if (!props.contract) {
      alert("contract not loaded");
      return;
    }

    if (props.personalData.isExist) {
      alert("user already exists");
      return;
    }
    await props.contract.methods
      .enterSystem("TYPGbv47eFGBCDvjrPZNgXs3JfrqPMTWS9")
      .send({ from: props.account, callValue: poolsPrice[0] });
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
            <NavItem>
              <NavLink href="/components/">Contract</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                Total Balance
              </NavLink>
            </NavItem>
            <NavItem className="dream-btn-group fadeInUp login" data-wow-delay="0.4s">
              <NavLink className="btn more-btn" onClick={() => {
                enter()
              }}>
                Enter
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    personalData: state.personalData,
    contract: state.contract,
    account: state.account,
  };
};

export default connect(mapStateToProps)(Header);