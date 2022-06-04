import React, { Fragment } from "react";
import "../styles/styles.css";


export function SliderHandle({
	domain: [min, max],
	handle: { id, value, percent },
	getHandleProps,
}) {
	return (
		<div
			role="slider"
			aria-valuemin={min}
			aria-valuemax={max}
			aria-valuenow={value}
			className="root"
			style={{ left: `${percent}%` }}
			{...getHandleProps(id)}
		/>
	);
}
