import React from "react";
import { Table, Button } from "react-bootstrap";
import './logs.css'

let log1 = {id:1, ubicacion: 'cerca', fechaYHora: '17-03-2021 17:54:12', evento: 'SALIDA'}
let log2 = {id:2, ubicacion: 'lejos', fechaYHora: '20-07-2021 19:12:19', evento: 'SALIDA'}
let log3 = {id:3, ubicacion: 'alla', fechaYHora: '12-05-2021 12:54:12', evento: 'ENTRADA'}
let log4 = {id:4, ubicacion: 'cerca', fechaYHora: '09-02-2021 04:54:42', evento: 'SALIDA'}
let log5 = {id:5, ubicacion: 'aca', fechaYHora: '28-12-2021 15:54:11', evento: 'ENTRADA'}

let logs = [log1, log2, log3, log4, log5];

const Logs = () => {
    return(
        <div id='table' className='container-shadow'>
            <Table striped bordered hover>
                    <thead>
                        <TableHead/>
                    </thead>
                    <tbody>
                        <TableBody/>
                    </tbody>
            </Table>
        </div>
    );
}

export default Logs;

const TableHead = () => {
    return(
        <tr>
            <th>Id</th>
            <th>Ubicacion</th>
            <th>Fecha y Hora</th>
            <th>Evento</th>
            <th>Acciones</th>
        </tr>
    );
}


const TableBody = () => {
    return logs.map( (log) => (
        <tr key={`tr-${log.id}`}>
            <td>{log.id}</td>
            <td>{log.ubicacion}</td>
            <td>{log.fechaYHora}</td>
            <td>{log.evento}</td>
            <td>
                <Button variant={"info"}>Info</Button>{' '}
                <Button variant={"primary"}>Editar</Button>{' '}
                <Button variant={"danger"}>Eliminar</Button>
            </td>
        </tr>
    ));
}