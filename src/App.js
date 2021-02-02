import React, {useState, useEffect} from 'react';
import CarDataView from './views/CarDataView';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Badge from 'react-bootstrap/Badge';
import Login from './components/Login';
import { getFin } from './service/AccountService';

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(true)

  const viewSwitch =() => {
    if (isLoggedIn) {
      return(<CarDataView ></CarDataView>)
    } else {
      return(<Login loginCB={setIsLoggedIn} />)  
    }
  }

  const logOut = () => {
    setIsLoggedIn(false);
    localStorage.clear();
  }

  return (
    <>
    <Navbar variant="dark" bg="primary" expand="lg">
      <Navbar.Brand>Auto Daten List Informationen System (ADLIS) 
        {isLoggedIn &&
        <Badge pill className="ml-2" variant="light" style={{fontSize: 10}}>FIN: {getFin()}
        </Badge>}
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link onClick={logOut} active={isLoggedIn}>Log Out</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    {viewSwitch()}
    </>
  );
}

export default App;
