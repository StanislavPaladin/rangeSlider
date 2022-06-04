import React from "react";
import { Bar } from "react-chartjs-2";

class BarChart extends React.Component {
  render() {
    const { data, highlight, domain } = this.props;

    // calculate frequency of data
    const counts = {};
    for (let i = 0; i < data.length; i++)
      counts[data[i]] = counts[data[i]] + 1 || 1;

    // generate data
    const barDataValues = [];
    for (let i = 0; i < domain[1]; i++) {
      barDataValues.push(counts[i] || 0);
    }
    const barData = {
      labels: barDataValues.map((val, i) => i),
      datasets: [
        {
          backgroundColor: barDataValues.map((val, i) =>
            i >= highlight[0] && i <= highlight[1]
              ? "gold"
              : "gray"
          ),
          hoverBackgroundColor: "grey",
          borderRadius : {
            topLeft: 50
          },
          data: barDataValues
        }
      ]
    };

    const options = {
      responsive: true,
      cornerRadius: 44,
      legend: {
        display: false
      },
      scales: {
        xAxes: [
          {
            // here is changing bar styles
            display: false,
            barThickness : 4,
            barLength: 25,
            barLength: 150
          }
        ],
        yAxes: [
          {
            display: false,
            ticks: {
              min: 3
            }
          }
        ]
      }
    };
    return <Bar type="bar" width={320} height={40} data={barData} options={options} />;
  }
}

export default BarChart;
