import React from "react";
import ReactDOM from "react-dom";
import { Grid, Typography } from "@material-ui/core";

import RangeSlider from "./components/RangeSliderComponent/RangeSlider";

// mock data for prices
const prices = [];
for (let i = 0; i < 500; i++) {
	prices.push(Math.floor(Math.random() * 20) + 1);
}

function App() {
	return (
		<>
			<RangeSlider data={prices} />
		</>
	);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
