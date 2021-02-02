import React, {useState, useEffect} from 'react';
import CarDataView from './views/CarDataView';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Badge from 'react-bootstrap/Badge';
import Login from './components/Login';
import { getFin } from './service/AccountService';

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const viewSwitch =() => {
    if (isLoggedIn) {
      return(<CarDataView ></CarDataView>)
    } else {
      return(<Login loginCB={setIsLoggedIn} />)  
    }
  }

  useEffect(() => {
    console.log('isLoggedIn', isLoggedIn)
  }, [isLoggedIn])

  return (
    <>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>Auto Daten List Informationen System (ADLIS) 
        {isLoggedIn &&
        <Badge pill variant="secondary" style={{fontSize: 10}}>FIN: {getFin()}
        </Badge>}
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link onClick={() => setIsLoggedIn(false)} active={isLoggedIn}>Log Out</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    {viewSwitch()}
    </>
  );
}

export default App;
