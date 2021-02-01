import React, {useState} from 'react';
import CarDataView from './views/CarDataView';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Login from './components/Login';

const App = () => {

  const [view, setview] = useState("list")
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  function viewSwitch(view) {
    switch (isLoggedIn) {
      case true:
        return(<CarDataView ></CarDataView>)
      case false:
        return(<Login loginCB={setIsLoggedIn} />)  
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
