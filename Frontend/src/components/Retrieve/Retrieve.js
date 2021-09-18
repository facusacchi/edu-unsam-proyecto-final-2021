import React from 'react';
import {Form, Button, Row, Col, Card} from 'react-bootstrap';
import './retrieve.css'

const Retrieve = () => {
    return(
        <Card className="card-reg card-rtv">
      <Card.Body>
        <Card.Title className='title-form frm-grp title-form'>Recuperar usuario/contraseña</Card.Title>
        <Form>
              <Form.Group className="mb-3 frm-grp" controlId="form-control">
                <Form.Label>Email de registro</Form.Label>
                <Form.Control type="text" placeholder="Ingresar email" />
              </Form.Group>

              <Form.Group className="mb-3 frm-grp" controlId="form-control">
                <Form.Label>Repetir email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresar email"
                />
              </Form.Group>

          <div className="button-form frm-grp">
            <Button variant="primary" type="submit">
              Recuperar
            </Button>
          </div>
          <div className='frm-grp'>
              <a href='/login'>Volver al login</a>
            </div>
        </Form>
      </Card.Body>
    </Card>
    );
}

export default Retrieve;