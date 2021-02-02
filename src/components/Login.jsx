import React, {useState} from "react";
import {Form, Button } from 'react-bootstrap'
import {signin, signup} from '../service/AccountService'

const Login = ({loginCB}) => {

    const login = {
        buttonText: "Login",
        buttonFunction: signin,
        linkText: "You have no account? - Sign up!"
    }
    const createAccount = {
        buttonText: "SignUp",
        buttonFunction: signup,
        linkText: "You have an account already? - Login!"
    }
    
    const [fin, setFin] = useState("");
    const [password, setPassword] = useState("");
    const [formPurpose, setFormPorpose] = useState(login);


    const handleButtonClick = () => {
        if(fin.length < 3 || password.length < 3) {
            alert("fin and password must have at least 3 characters")
        } else {
            formPurpose.buttonFunction({username: fin, password}, loginCB)
        }
    }

    const handleLinkClick = () => {
        if (formPurpose.buttonText === login.buttonText) {

            setFormPorpose(createAccount);
        } else {
            setFormPorpose(login);
        }
    }


    return (
    <Form className="ml-5 mr-5">
        <h3>{formPurpose.buttonText}</h3>
        <Form.Group controlId="formBasicUsername">
            <Form.Label>FIN</Form.Label>
            <Form.Control type="username" placeholder="Enter FIN" value={fin} onChange={e => setFin(e.target.value)}/>
            <Form.Text className="text-muted">
            We'll never share your FIN with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
        </Form.Group>
        <Button variant="primary" onClick={handleButtonClick} >
            {formPurpose.buttonText}
        </Button>
        <br/>
        <a href="javascript:void(0)" variant="primary" onClick={handleLinkClick}>
            {formPurpose.linkText}
        </a>
    </Form>
    );
};

export default Login;