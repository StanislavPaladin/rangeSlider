import React from "react";
// import { Grid, button, input, InputAdornment } from "@material-ui/core";
import { Slider, Rail, Handles, Tracks } from "react-compound-slider";
import { SliderHandle } from "./SliderComponents/SliderHandle.jsx";
import { SliderTrack } from "./SliderComponents/SliderTrack.jsx";
import BarChart from "./SliderComponents/BarChart";

class RangeSlider extends React.Component {
	constructor(props) {
		super(props);

		const sortedData = props.data.slice().sort((a, b) => a - b);
		const range = [sortedData[0], sortedData[sortedData.length - 1]];

		this.state = {
			domain: range,
			update: range,
			values: range,
			inputValues: range,
		};
	}

	render() {
		const { domain, values, update, inputValues } = this.state;

		return (
			<div className="rangeSlider">
				<div className="rangeSlider-wrapper">
							<input
              className="rangeSlider-input"
								label="starting_price"
								value={inputValues[0]}
								onChange={(evt) => {
									const value = evt.target.value;
									const newState = [value, inputValues[1]];
									this.setState({
										inputValues: newState,
									});
									if (value && value >= domain[0]) {
										this.setState({ values: newState });
									}
								}}
							/>
							<input
              className="rangeSlider-input"
								label="max_price"
								value={inputValues[1]}
								onChange={(evt) => {
									const value = evt.target.value;
									const newState = [inputValues[0], value];
									this.setState({
										inputValues: newState,
									});
									if (
										value &&
										value <= domain[1] &&
										value >= values[0]
									) {
										this.setState({ values: newState });
									}
								}}
							/>
						</div>
				<div className="rangeSlider-main">
					<BarChart
						data={this.props.data}
						highlight={update}
						domain={domain}
					/>
					<Slider
						mode={3}
						step={1}
						domain={domain}
						rootStyle={{
							position: "relative",
							width: "100%",
						}}
						onUpdate={(update) =>
							this.setState({ update, inputValues: update })
						}
						onChange={(values) => this.setState({ values })}
						values={values}
					>
						<Handles>
							{({ handles, getHandleProps }) => (
								<div className="slider-handles">
									{handles.map((handle) => (
										<SliderHandle
											key={handle.id}
											handle={handle}
											domain={domain}
											getHandleProps={getHandleProps}
										/>
									))}
								</div>
							)}
						</Handles>
						<Tracks left={false} right={false}>
							{({ tracks, getTrackProps }) => (
								<div className="slider-tracks">
									{tracks.map(({ id, source, target }) => (
										<SliderTrack
											key={id}
											source={source}
											target={target}
											getTrackProps={getTrackProps}
										/>
									))}
								</div>
							)}
						</Tracks>
					</Slider>
          <button className="rangeSlider-close">x</button>
				</div>
			</div>
		);
	}
}

export default RangeSlider;
