import React, { useState } from "react";
import {
  Table,
  Button,
  Row,
  Col,
  Form,
  FloatingLabel,
} from "react-bootstrap";
import "./logs.css";

let log1 = {
  id: 1,
  ubicacion: "cerca",
  fechaYHora: "17-03-2021 17:54:12",
  evento: "SALIDA",
};
let log2 = {
  id: 2,
  ubicacion: "lejos",
  fechaYHora: "20-07-2021 19:12:19",
  evento: "SALIDA",
};
let log3 = {
  id: 3,
  ubicacion: "alla",
  fechaYHora: "12-05-2021 12:54:12",
  evento: "ENTRADA",
};
let log4 = {
  id: 4,
  ubicacion: "cerca",
  fechaYHora: "09-02-2021 04:54:42",
  evento: "SALIDA",
};
let log5 = {
  id: 5,
  ubicacion: "aca",
  fechaYHora: "28-12-2021 15:54:11",
  evento: "ENTRADA",
};

let logs = [log1, log2, log3, log4, log5];

const Logs = () => {
  return (
    <>
      <Form className="filters-form">
        <Row>
          <Col>
            <Form.Group controlId="form-control">
              <FloatingLabel controlId="form-control" label="Ubicacion del log">
                <Form.Control
                  as="select"
                  custom /* onChange={this.onChangeColor.bind(this)} */
                >
                  <option>Aca</option>
                  <option>Alla</option>
                  <option>Lejos</option>
                  <option>Cerca</option>
                  <option>Alli</option>
                </Form.Control>
              </FloatingLabel>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="form-control">
              <FloatingLabel controlId="form-control" label="Fecha desde">
                <Form.Control type="date" placeholder="Fecha desde" />
              </FloatingLabel>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="form-control">
              <FloatingLabel controlId="form-control" label="Fecha hasta">
                <Form.Control type="date" placeholder="Fecha hasta" />
              </FloatingLabel>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="form-control">
              <FloatingLabel controlId="form-control" label="Tipo de evento">
                <Form.Control
                  as="select"
                  custom /* onChange={this.onChangeColor.bind(this)} */
                >
                  <option>ENTRADA</option>
                  <option>SALIDA</option>
                </Form.Control>
              </FloatingLabel>
            </Form.Group>
          </Col>
          <Col className="button-col">
            <Button className='search-button' variant={"primary"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </Button>
          </Col>
        </Row>
      </Form>

      <div id="table" className="container-shadow">
        <Table striped bordered hover>
          <thead>
            <TableHead />
          </thead>
          <tbody>
            <TableBody />
          </tbody>
        </Table>
        <div className="export-button" className="d-grid gap-2">
          <Button variant="success" size="lg">
            Exportar{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-download"
              viewBox="0 0 16 16"
            >
              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
              <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
            </svg>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Logs;

const TableHead = () => {
  return (
    <tr>
      <th>Id</th>
      <th>Ubicacion</th>
      <th>Fecha y Hora</th>
      <th>Evento</th>
      <th>Acciones</th>
    </tr>
  );
};

const TableBody = () => {
  const [logsData, setLogsData] = useState(logs);

  const deleteHandler = (logId) => {
    setLogsData(logsData.filter((x) => x.id !== logId));
  };

  return logsData.map((log) => (
    <tr key={`tr-${log.id}`}>
      <td>{log.id}</td>
      <td>{log.ubicacion}</td>
      <td>{log.fechaYHora}</td>
      <td>{log.evento}</td>
      <td>
        <Button onClick={() => deleteHandler(log.id)} variant={"danger"}>
          Eliminar{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-trash"
            viewBox="0 0 16 16"
          >
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
            <path
              fill-rule="evenodd"
              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
            />
          </svg>
        </Button>
      </td>
    </tr>
  ));
};
