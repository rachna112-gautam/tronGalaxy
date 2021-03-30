import React, { useState, useEffect } from 'react'
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
import './LandingPage.scss'
import { connect } from "react-redux";

const Header = (props) => {
  const [contract, setContract] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [poolsPrice, setPoolsPrice] = useState([]);

  const toggle = () => setIsOpen(!isOpen);
  useEffect(() => {
    setContract(contract);
    dollars();
  }, [props.account]);
  const dollars = async () => {
    if (!props.contract || !props.account) {
      return;
    }
    let dollars =
      (await props.contract.methods.dollars().call()).toNumber() / 10 ** 6;
    // console.log("dollar", dollars);
    let poolPrice = [];
    for (let i = 0; i < 20; i++) {
      let res = (await props.contract.poolsPrice(i).call()).toNumber();
      poolPrice[i] = res;
    }
    setPoolsPrice(poolPrice);
    // console.log("pool price", poolPrice);
  };
  const enter = async () => {
    if (!props.contract || !props.account) {
      return;
    }

    if (props.personalData.isExist) {
      alert("user already exist")
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
              <NavLink href={`https://shasta.tronscan.org/#/contract/${Config.CONTRACT_ADDRESS}`}>{Config.CONTRACT_ADDRESS}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                {props.contractData ? props.contractData.contractBalance : "-"}
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
    contractData: state.contractData
  };
};

export default connect(mapStateToProps)(Header);