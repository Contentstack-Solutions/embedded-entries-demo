import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  InputGroup,
  NavDropdown,
  Button,
  ButtonGroup,
  Modal,
} from "react-bootstrap";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import * as Icon from "react-bootstrap-icons";
import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(
  () => import("../lib/JSONView.js").then((mod) => mod.JSONViewer),
  { ssr: false }
);

export default function Navigation(props) {
  const [m1show, m1setShow] = useState(false);
  const m1handleClose = () => m1setShow(false);
  const m1handleShow = () => m1setShow(true);

  const [m2show, m2setShow] = useState(false);
  const m2handleClose = () => m2setShow(false);
  const m2handleShow = () => m2setShow(true);

  return (
    <Navbar className="mb-4" expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="/logo.png"
            height="27"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/search">Recipes</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <NavDropdown title="Content" id="basic-nav-dropdown">
              <NavDropdown.Item href="/blog">Blog</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/blog/blog-post-1">
                Example 1
              </NavDropdown.Item>
              <NavDropdown.Item href="/blog/blog-post-2">
                Example 2
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#pricing">About Us</Nav.Link>
          </Nav>

          <Form className="d-flex">
            <InputGroup>
              <InputGroup.Text>
                <Icon.Search></Icon.Search>
              </InputGroup.Text>
              <FormControl
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </InputGroup>
            <Icon.PersonBoundingBox
              className="nav-icon"
              size={30}
              onClick={m1handleShow}
            />
            <Icon.FileEarmarkCode
              className="nav-icon"
              size={30}
              onClick={m2handleShow}
            />
            <Link href="/checkout" passHref>
              <Icon.Cart3 className="nav-icon" size={30} />
            </Link>
          </Form>
        </Navbar.Collapse>

        <Modal show={m1show} onHide={m1handleClose} keyboard={false}>
          <Modal.Header closeButton>
            <Modal.Title>Personalization</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Change your experience:</p>
            <ButtonGroup aria-label="Basic example">
              <Button variant="outline-primary">None</Button>
              <Button variant="outline-primary">Traditional</Button>
              <Button variant="outline-primary">Hipster</Button>
              <Button variant="outline-primary">WFH Parent</Button>
            </ButtonGroup>
          </Modal.Body>
        </Modal>
        <Modal show={m2show} onHide={m2handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>API Output</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <DynamicComponentWithNoSSR jsonmodal={props.jsonmodal} />
          </Modal.Body>
        </Modal>
      </Container>
    </Navbar>
  );
}
