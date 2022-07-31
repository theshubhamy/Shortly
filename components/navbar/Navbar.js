import React, { useState } from "react";
import Image from "next/image";
import { MenuLink, Nav, Logo, Menu, Hamburger } from "./NavElements";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
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
        <MenuLink href="">Our Work</MenuLink>
        <MenuLink href="">About</MenuLink>
        <MenuLink href="">Careers</MenuLink>
        <MenuLink href="">Contact</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
