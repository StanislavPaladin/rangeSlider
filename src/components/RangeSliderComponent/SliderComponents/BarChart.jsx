import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
ChartJS.register(...registerables);

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
						i >= highlight[0] && i <= highlight[1] ? "gold" : "gray"
					),
					borderWidth: 1,
					borderRadius: 100,
					borderSkipped: "bottom",
					data: barDataValues,
					barPercentage: 0.5,
					barThickness: 8,
					maxBarThickness: 10,
					minBarLength: 2,
				},
			],
		};
		// Bar.register(CategoryScale)
		const options = {
			responsive: true,
			plugins: {
				legend: {
					display: false,
				},
			},
			scales: {
				x: {
					display: false,
				},

				y: {
					display: false,
					ticks: {
						min: 0,
					},
				},
			},
		};
		return (
			<Bar
				type="bar"
				width={320}
				height={42}
				data={barData}
				options={options}
			/>
		);
	}
}

export default BarChart;
