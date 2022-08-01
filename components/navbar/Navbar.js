import React, { useState } from "react";
import Image from "next/image";
import { Header, MenuItem, Nav, Logo, Menu, Hamburger } from "./NavElements";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Header>
      <Nav>
        <Logo>
          <Image
            src={"/assets/logo.svg"}
            alt={"shortly-logo"}
            height={"40px"}
            width={"130px"}
          />
        </Logo>
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <Image
            src={"/assets/menu-icon.svg"}
            alt="menuicon"
            height={"25px"}
            width={"25px"}
          />
        </Hamburger>
        <Menu isOpen={isOpen}>
          <MenuItem>Features</MenuItem>
          <MenuItem>Pricing</MenuItem>
          <MenuItem>Resources</MenuItem>
        </Menu>
      </Nav>
    </Header>
  );
};

export default Navbar;
