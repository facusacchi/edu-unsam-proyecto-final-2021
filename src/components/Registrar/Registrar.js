import React from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import './registrar.css';

const Registrar = () => {
    return (
        <Card className='card-reg'>
            <Card.Body>
                <Card.Title>Registrarse</Card.Title>
                <Form>
                    <Form.Group className="mb-3" controlId="form-control">
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control type="text" placeholder="Crear usuario" />
                        <Form.Text className="text-muted">
                            Nunca compartiremos sus datos con nadie más.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="form-control">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Crear contraseña" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="form-control">
                        <Form.Label>Repetir contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Repetir contraseña" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="form-control">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Ingresar email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="form-control">
                        <Form.Label>Repetir email</Form.Label>
                        <Form.Control type="email" placeholder="Repetir email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="form-control">
                        <Form.Label>Número de telefono</Form.Label>
                        <Form.Control type="text" placeholder="Ingresar número de telefono" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Check type="checkbox" label="Recibir notificacion por mail" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Registrar
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default Registrar;