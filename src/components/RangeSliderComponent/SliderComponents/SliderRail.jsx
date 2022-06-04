import React, { Fragment } from "react";
import "../styles/styles.css";

export function SliderRail({ getRailProps }) {
	return (
		<Fragment>
			<div className="railHotspot" {...getRailProps()} />
			<div className="rail" />
		</Fragment>
	);
}
