import React from "react";
import { Link } from "react-router-dom";
import * as logo from "./logo.png";

const Nav = props => 
  <div>
    <nav style={{boxShadow: "0 5px 5px -4px gray"}}>
      <Link to="/"><img style={{ maxWidth: "200px"}} src={logo} /></Link>
    </nav>
    {props.children}
  </div>

export default Nav;