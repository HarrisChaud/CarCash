import { Button } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react"
import {Link as ReactLink} from "react-router-dom"
import React from "react";
import NavbarStyled from "./NavbarStyled";
import { useColorMode } from "@chakra-ui/react";


const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <NavbarStyled>
      <h1 className="Car-Cash-header">Valley Auto Traders</h1>
      <div className="navigation-links-div">
        <Link to="/" as={ReactLink}>
        <Button>Home</Button>
        </Link>
        <Link to="/inventory" as={ReactLink}>
          <Button>Inventory</Button>
        </Link>
        <Link to="/sales" as={ReactLink}>
          <Button>Sales</Button>
        </Link>
        <Button onClick={toggleColorMode}>Theme</Button>
      </div>
    </NavbarStyled>
  );
};

export default Navbar;