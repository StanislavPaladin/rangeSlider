import React from "react";
import ReactDOM from "react-dom";

import RangeSlider from "./components/RangeSliderComponent/RangeSlider";

const range = [];
// mocked data array
const data = [10,10,10,20,20,30,30,40,40,40,40,50,50,50,60,60,70,70,80,80,80,90,90,100,110,110,110,120];
const minPrice = Math.min.apply(null, data);
const maxPrice = Math.max.apply(null, data);
range.push(minPrice, maxPrice);

function App() {
	return (
		<>
			<RangeSlider data={data} range={range} />
		</>
	);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
