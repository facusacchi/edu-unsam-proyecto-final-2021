import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

/* let labelsForData =[
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
];

let dataSetsForData =  [
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
];

let opt = {maintainAspectRatio: false}; */

const Chart = () => {

  const [chartData, setChartData] = useState({});
  
  const executeChart = () => {
    setChartData({

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
        }
      ]

    });
  }
  
  useEffect(() => {
    executeChart();
  }, [])

  return (
    <div /* className="chart" */>
      <Line data={chartData}/>
    </div>
  );
};

export default Chart;










                      /* const chartData = {
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
                      }; */