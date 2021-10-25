import React from "react";
import CardHome from "../CardHome/CardHome";
import "./home.css";
import { Image } from "react-bootstrap";
import Chart from "../Chart/Chart.js"
import { Doughnut } from 'react-chartjs-2';


const chartData = {
  labels: [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
  dataSets: [
    {
      label: "Logs",
      data: [123, 456, 789, 987, 654, 321, 222, 1200, 777, 423, 737, 1356],
      backgroundColor: [
          "rgba(255,99,132,0.6)",
          "rgba(255,99,132,0.6)",
          "rgba(255,99,132,0.6)",
          "rgba(255,99,132,0.6)",
          "rgba(255,99,132,0.6)",
          "rgba(255,99,132,0.6)",
          "rgba(255,99,132,0.6)",
          "rgba(255,99,132,0.6)",
          "rgba(255,99,132,0.6)",
          "rgba(255,99,132,0.6)",
          "rgba(255,99,132,0.6)",
          "rgba(255,99,132,0.6)",
      ]
    },
  ],
};


const Home = () => {
  return (
    <div className='home-container'>
      <Image className='home-image' src="/assets/Unsam.jpg" fluid />
      {/* <Chart/> */}
      <Doughnut data={{enero: "Enero", febrero: "Febrero"}} />
    </div>
  );
};

export default Home;
