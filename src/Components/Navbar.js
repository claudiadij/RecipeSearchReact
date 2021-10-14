import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

  const NavBar = () => {
      return(
          <div className="App">
              <ReactBootStrap.Navbar bg="light" variant="light">
                   <ReactBootStrap.Container>
                   <ReactBootStrap.Navbar.Brand href="#home">Claudia's Recipes</ReactBootStrap.Navbar.Brand>
                   <ReactBootStrap.Nav className="me-auto">
                   <ReactBootStrap.Nav.Link href="/">Home</ReactBootStrap.Nav.Link>
                   <ReactBootStrap.Nav.Link href="/myrecipes">My Recipe's</ReactBootStrap.Nav.Link>
                   </ReactBootStrap.Nav>
                   </ReactBootStrap.Container>
               </ReactBootStrap.Navbar>
          </div>
      )
  }

export default NavBar;