import React from "react";
import CardHome from '../CardHome/CardHome';
import './home.css'

const Home = () => {
    return (
        <div className='cards'>
            <CardHome
                title='Eventos'
                text='Mediante la colocación de sensores en puntos estratégicos se generará eventos. Dichos evento corresponde al ingreso o egreso al lugar de interés.'
                imgPath='/assets/img1.png'
            />

            <CardHome
                title='Logs'
                text='Una vez se captura cada evento, el mismo es almacenado en base a su tipo (ingreso o egreso) por el sistema en un log.'
                imgPath='/assets/img2.png'
            />

            <CardHome
                title='Reportería'
                text='Utilizando el sistema, los usuarios administradores y supervisores tienen la habilidad de generar reportes que pueden visualizar y/o exportar para posterior toma de decisiones.'
                imgPath='/assets/img3.png'
            />
        </div>
    );
}

export default Home;