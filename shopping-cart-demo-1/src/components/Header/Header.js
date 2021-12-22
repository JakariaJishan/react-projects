import React from "react";
import { Badge, Container, Dropdown, FormControl, Navbar } from "react-bootstrap";
import { BsCartCheck } from 'react-icons/bs';
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Navbar bg="light" expand="lg" variant="light">
      <Container>
        <Navbar.Brand>
          <Link to='/'> shoppie</Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
          style={{width: '500px'}}
            className="m-auto"
            type="text"
            placeholder="search product"
          />
        </Navbar.Text>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
              <BsCartCheck color='white' fontSize='25px'/>
            <Badge bg="none">{10}</Badge>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
};

export default Header;
