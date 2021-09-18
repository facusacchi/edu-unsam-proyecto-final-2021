import React from "react";
import { Card, Form, Button } from "react-bootstrap";
import './contacto.css';

const Contacto = () => {
  return (
    <Card className="card-contacto">
      <Card.Body>
        <Card.Title className="title-form frm-grp title-form">
          Contacto
        </Card.Title>
        <Form>
          <Form.Group className="mb-3 frm-grp" controlId="form-control">
            <Form.Label>Nombre y apellido</Form.Label>
            <Form.Control type="text" placeholder="Ingresar nombre completo" />
          </Form.Group>

          <Form.Group className="mb-3 frm-grp" controlId="form-control">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" placeholder="Ingresar email" />
          </Form.Group>

          <Form.Group className="mb-3 frm-grp" controlId="form-control">
            <Form.Label>Repetir email</Form.Label>
            <Form.Control type="text" placeholder="Ingresar email" />
          </Form.Group>

          <Form.Group className="mb-3 frm-grp" controlId="form-control">
            <Form.Label>Consulta</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <div className="button-form frm-grp">
            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Contacto;
