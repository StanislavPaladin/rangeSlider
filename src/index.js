import React from "react";
import ReactDOM from "react-dom";
import { Grid, Typography } from "@material-ui/core";

import RangeSlider from "./components/RangeSliderComponent/RangeSlider";

// mock data for prices
const prices = [];
for (let i = 0; i < 500; i++) {
	prices.push(Math.floor(Math.random() * 44) + 1);
}

const range = [1, 35];

function App() {
	return (
		<>
			<RangeSlider data={prices} range={range} />
		</>
	);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
