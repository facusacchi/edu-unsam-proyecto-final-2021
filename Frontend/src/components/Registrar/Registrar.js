import React from "react";
import { Form, Button, Card, Row, Col } from "react-bootstrap";
import "./registrar.css";

const Registrar = () => {
  return (
    <Card className="card-reg">
      <Card.Body>
        <Card.Title className='title-form frm-grp'>Registrarse</Card.Title>
        <Form>
        <Row className="g-2">
            <Col md>
              <Form.Group className="mb-3 frm-grp" controlId="form-control">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Ingresar nombre" />
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group className="mb-3 frm-grp" controlId="form-control">
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresar apellido"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="g-2">
            <Col md>
              <Form.Group className="mb-3 frm-grp" controlId="form-control">
                <Form.Label>Nombre de usuario</Form.Label>
                <Form.Control type="text" placeholder="Crear usuario" />
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group className="mb-3 frm-grp" controlId="form-control">
                <Form.Label>Número de telefono</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresar número de telefono"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="g-2">
            <Col md>
              <Form.Group className="mb-3 frm-grp" controlId="form-control">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Crear contraseña" />
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group className="mb-3 frm-grp" controlId="form-control">
                <Form.Label>Repetir contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Repetir contraseña"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="g-2">
            <Col md>
              <Form.Group className="mb-3 frm-grp" controlId="form-control">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Ingresar email" />
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group className="mb-3 frm-grp" controlId="form-control">
                <Form.Label>Repetir email</Form.Label>
                <Form.Control type="email" placeholder="Repetir email" />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3 frm-grp">
            <Form.Check type="checkbox" label="Recibir notificacion por mail" />
          </Form.Group>
          <div className="button-form frm-grp">
            <Button variant="primary" type="submit">
              Registrar
            </Button>
          </div>
          <Form.Text className="text-muted frm-grp">
            Nunca compartiremos sus datos con nadie más.
          </Form.Text>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Registrar;
