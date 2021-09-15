import React from "react";
import CardHome from "../CardHome/CardHome";
import "./home.css";
import { Image } from "react-bootstrap";
// TODO: poner en la home un grafico grande, con las estadisticas generales de movimiento segun punto de acceso
const Home = () => {
  return (
    <div className='home-container'>
      <Image className='home-image' src="/assets/Unsam.jpg" fluid />
    </div>
  );
};

export default Home;
