import React, { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import './login.css';

let user1 = {user: 'test1', pssw: '1'}
let user2 = {user: 'test2', pssw: '2'}
let user3 = {user: 'test3', pssw: '3'}

let mockUsers = [user1, user2, user3]

const Login = ({history}) => {
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [datosIncorrectos, setDatosIncorrectos] = useState(false);
    
    const alCambiarValorDeUsuario = async (event) => {
        await setUsuario(event.target.value);
        console.log(usuario);
    }

    const alCambiarValorDePassword = (event) => {
        setPassword(event.target.value)
        console.log(password);
    }

    const validar = () => {
        history.push(`/home`);
        /* if(mockUsers.any(u => u.user === user && u.pssw === pssw)) {
            history.push(`/home`);
        } else {
            setDatosIncorrectos(true);
        } */

        //(mockUsers.any(u => u.user === user && u.pssw === pssw) ? history.push(`/home`) : setDatosIncorrectos(true));
    }

    return(
        <div className='container-login'>
            <div></div>
            <div className='container-shadow'>
                <Card style={{ width: '18rem' }} border="primary">
                            <Card.Body>
                                <Card.Title id='login-title'>Login</Card.Title>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Usuario</Form.Label>
                                            {/* <Form.Control type="text" placeholder="Ingresar usuario" value={usuario} onChange={(event) => alCambiarValordeUsuario(event)}/> */}
                                            <Form.Control type="text" placeholder="Ingresar usuario" onChange={(event) => alCambiarValorDeUsuario(event)}/>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Contraseña</Form.Label>
                                            <Form.Control type="password" placeholder="Ingresar contraseña" value={password} onChange={(event) => alCambiarValorDePassword(event)}/>
                                            
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="Check me out" variant="warning" />
                                        </Form.Group>
                                        <Form.Text id='login-desc' className="text-muted">
                                                Nunca compartiremos sus datos con nadie más.
                                        </Form.Text>
                                        <div className='button-container'>
                                            <Button className='primary-button-login' variant="primary" type="submit">Ingresar</Button>
                                        </div>
                                        {datosIncorrectos && <div>Usuario o contraseña invalidos</div>}
                                    </Form>
                            </Card.Body>
                        </Card>
            </div>
            <div></div>
        </div>
    )
}

export default Login;



