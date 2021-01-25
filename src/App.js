import React, {useState} from 'react';
import CarDataView from './views/CarDataView';
import DummyCreator from './views/DummyCreator';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const App = () => {

  const [view, setview] = useState("list")

  function viewSwitch(view) {
    switch (view) {
      case "list":
        return(<CarDataView></CarDataView>)
      case "creator":
        return(<DummyCreator></DummyCreator>)  
      default:
        break;
    }
  }

  return (
    <>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>Auto Daten List Informationen System (ADLIS)</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link onClick={() => setview("list")} active={view ==="list"}>List Data</Nav.Link>
          <Nav.Link onClick={() => setview("creator")} active={view ==="creator"}>credit</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    {viewSwitch(view)}
    </>
  );
}

export default App;
