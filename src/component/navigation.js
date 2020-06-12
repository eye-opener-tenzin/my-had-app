import React from 'react';
import { Nav, Navbar, } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
.navbar {
  background-color: #222;
  padding-top: 0px;
 
}

.navbar-brand, .navbar-nav .nav-Link {

  color: #bbb;
  font-family: cursiv;
}
$:hover{
  color: white;
}

`;

export const Navigation = () => (
<Styles>   
  
  
  <Navbar className="navbar navbar-expand-md navbar-dark bg-dark stick-top">
  <Navbar.Brand href="/">Healing After Death</Navbar.Brand>
  <Navbar className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </Navbar>
  <Navbar.Collapse id='basic-navbar-nav'>
  <Nav className="ml-auto">
    <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
    <Nav.Item><Nav.Link href="/introduction">Introduction</Nav.Link></Nav.Item>
    <Nav.Item><Nav.Link href="/chapter">Chapter</Nav.Link></Nav.Item>
    <Nav.Item><Nav.Link href="/conclusion">Conclusion</Nav.Link></Nav.Item>
    <Nav.Item><Nav.Link href="/extrablessing">ExtraBlessing</Nav.Link></Nav.Item>
    <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
    <Nav.Item><Nav.Link href="/donate">Donate</Nav.Link></Nav.Item>
</Nav>
</Navbar.Collapse>
</Navbar>
 
</Styles>   
      
    )





