import React, {useState} from "react";
import {Form, Button } from 'react-bootstrap'
import {signin, signup} from '../service/AccountService'

const Login = ({loginCB}) => {
    const [fin, setFin] = useState("")
    const [password, setPassword] = useState("")

    const handleSignUp = () => {
        signup({username: fin, password}, loginCB)
    }

    const handleLogin = () => {
        signin({
            username: fin,
            password
        }, loginCB)
    }

return (
    <Form className="ml-5 mr-5">
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
        <Button variant="primary" onClick={() => handleLogin()} >
            Login
        </Button>
        <Button className="ml-2" variant="primary" onClick={() => handleSignUp()}>
            SignUp
        </Button>
    </Form>
    );
};

export default Login;