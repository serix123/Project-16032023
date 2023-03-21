import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";

const data = {
	labels: ["January", "February", "March", "April", "May", "June", "July"],
	datasets: [
		{
			label: "Sales",
			data: [10, 20, 30, 40, 50, 60, 70],
			backgroundColor: "#FF6384",
		},
	],
};

const options = {
	scales: {
		y: {
			beginAtZero: true,
		},
	},
};

const BarChart = () => {
	const [chart, setChart] = useState<Chart>();

	useEffect(() => {
		if (chart) {
			chart.destroy();
		}

		const newChart = new Chart("myChart", {
			type: "bar",
			data,
			options,
		});

		setChart(newChart);

		return () => {
			newChart.destroy();
		};
	}, []);

	return <canvas id='myChart' />;
};
export default BarChart;
