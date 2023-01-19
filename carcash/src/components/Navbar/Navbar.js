import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import React from "react";
import NavbarStyled from "./NavbarStyled";

const Navbar = () => {
  return (
    <NavbarStyled>
      <h1 className="Car-Cash-header">Valley Auto Traders</h1>
      <div className="navigation-links-div">
        <Link to="/inventory">
          <Button>Inventory</Button>
        </Link>
        <Link to="/sales">
          <Button>Sales</Button>
        </Link>
      </div>
    </NavbarStyled>
  );
};

export default Navbar;
