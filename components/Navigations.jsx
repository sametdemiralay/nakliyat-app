import React from "react";
import Link from "next/link";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

export default function Navigations() {
 return (
  <div>
   <Navbar
    className="bg-nav"
    collapseOnSelect
    expand="lg"
    bg="dark"
    variant="dark"
   >
     <Link href="/" passHref>
    <Navbar.Brand>
      <img
        src="/batman.png"
        width="40"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand></Link>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
     <Nav className="ml-auto">
      <NavDropdown title="Kurumsal" id="basic-nav-dropdown">
        <Link href="/kurumsal?name=hakkimizda" as="/kurumsal/Hakkimizda" passHref><NavDropdown.Item>Hakkımızda</NavDropdown.Item></Link>
        <Link href="/kurumsal?name=misyon" as="/kurumsal/Misyon" passHref><NavDropdown.Item>Misyon</NavDropdown.Item></Link>
        <Link href="/kurumsal?name=vizyon" as="/kurumsal/Vizyon" passHref><NavDropdown.Item>Vizyon</NavDropdown.Item></Link>
      </NavDropdown>
      <Link href="/Hizmetlerimiz" passHref>
       <Nav.Link>Hizmetlerimiz</Nav.Link>
      </Link>
      <Link href="/Bolgelerimiz" passHref>
       <Nav.Link>Bolgelerimiz</Nav.Link>
      </Link>
      <Link href="/Iletisim" passHref>
       <Nav.Link>İletişim</Nav.Link>
      </Link>
     </Nav>
    </Navbar.Collapse>
   </Navbar>
  </div>
 );
}

