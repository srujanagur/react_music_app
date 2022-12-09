import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchForKeyword } from "../../redux/Actions/songsListAction";
import { sortByLanguage } from "../../redux/Actions/songsListAction";
import { sortBysong } from "../../redux/Actions/songsListAction";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";

import {
  BsFillHouseDoorFill,
  BsMusicNoteList,
  BsSuitHeartFill,
} from "react-icons/bs";
import NavDropdown from "react-bootstrap/NavDropdown";

import "./NavSidebar.css";

export default function NavSidebar() {
  const { keyword } = useSelector((state) => state.songsReducer);
  const { songssort } = useSelector((state) => state.songsReducer);

  const dispatch = useDispatch();
  const handleChange = (evt) => {
    dispatch(searchForKeyword(evt.target.value));
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container className="mainnavbar">
          <div className="navbar">
            <Button variant="light" onClick={handleShow}>
              <BsFillHouseDoorFill width={50} />
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Music App</Offcanvas.Title>
              </Offcanvas.Header>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search for a song"
                  className="me-2"
                  aria-label="Search "
                  onChange={handleChange}
                  value={keyword}
                />
                <Button variant="light">Search</Button>
              </Form>
              <Link className="links" to="/songslist">
                songs
                <BsMusicNoteList />
              </Link>
              <Link className="links" to="/whishlist">
                favorites
                <BsSuitHeartFill />
              </Link>
            </Offcanvas>
          </div>

          <Navbar.Brand href="/">MusicApp</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/songslist">Songs</Nav.Link>
            <Nav.Link href="/whishlist">Favourites</Nav.Link>
          </Nav>
          <NavDropdown title="SortBy" id="basic-nav-dropdown">
            <NavDropdown.Item
              onClick={() => dispatch(sortByLanguage(songssort))}
            >
              Language
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => dispatch(sortBysong(songssort))}>
              Song
            </NavDropdown.Item>
          </NavDropdown>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={handleChange}
              value={keyword}
            />
            <Button variant="light">Search</Button>
          </Form>
        </Container>
      </Navbar>
    </div>
  );
}
