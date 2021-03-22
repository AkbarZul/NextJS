import React from "react";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import Styles from './Navbar.module.css';

export default function index() {
  return (
    <>
    <div>
      <Navbar>
        <Navbar.Brand href="#home">
          <img src="/beritaku.png" style={{width: '100%', height: '100px'}} />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Article</Nav.Link>
        </Nav>
          <Button variant="outline-primary" className={Styles.daftar}>Daftar</Button>
          <Button variant="outline-primary">Masuk</Button>
      </Navbar>
    </div>
    </>
  );
}
