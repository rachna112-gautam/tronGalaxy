import React, {useState} from 'react'
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

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

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
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
            <NavItem className="dream-btn-group fadeInUp login" data-wow-delay="0.4s">
              <NavLink href="/dashboard" className="btn more-btn">
                Login
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
export default Header