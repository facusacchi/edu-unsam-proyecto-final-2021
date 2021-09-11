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

    const validar = () => {
        (mockUsers.some(u => u.user === usuario && u.pssw === password) ? history.push(`/home`) : setDatosIncorrectos(true));
    }

    return(
        <div className='container-login'>
            <div></div>
            <div className='container-shadow'>
                <Card style={{ width: '18rem' }} border="primary">
                            <Card.Body>
                                <Card.Title id='login-title'>Login</Card.Title>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="form-control">
                                            <Form.Label>Usuario</Form.Label>
                                            <Form.Control type="text" placeholder="Ingresar usuario" onChange={(event) => setUsuario(event.target.value)}/>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="form-control">
                                            <Form.Label>Contraseña</Form.Label>
                                            <Form.Control type="password" placeholder="Ingresar contraseña" value={password} onChange={(event) => setPassword(event.target.value)}/>
                                        </Form.Group>
                                        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="Check me out" variant="warning" />
                                        </Form.Group> */}
                                        <Form.Text id='login-desc' className="text-muted">
                                                Nunca compartiremos sus datos con nadie más.
                                        </Form.Text>
                                        <div className='button-container'>
                                            <Button className='primary-button-login' variant="primary" onClick={validar}>Ingresar</Button>
                                        </div>
                                        <div className='ancors'>
                                            <a href='/registrarse'>Olvidé mi usuario o contraseña</a> {' '}
                                            <a href='/registrarse'>Registrarse</a>
                                        </div>
                                        {datosIncorrectos && <div className="error">Usuario o contraseña invalidos</div>}
                                    </Form>
                            </Card.Body>
                        </Card>
            </div>
            <div></div>
        </div>
    )
}

export default Login;



