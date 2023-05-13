import React, { useState } from "react";
import { Slider, Typography } from "@mui/material";
import styles from "../styles/RangeSlider.module.css";

export default function RangeSlider({ getValue }) {
	const [color, setColor] = useState("#ccc");
	const [strength, setStrength] = useState("");
	const defaultValue = (100 + 10) / 2;

	const handleSetValue = (event) => {
		getValue(event.target.value);
		handleChangeColor(event.target.value);
	};

	const handleChangeColor = (value) => {
		if (value < 20) {
			setColor((prev) => "#f20000");
			setStrength((prev) => "Weak!");
		} else if (value < 50) {
			setColor((prev) => "#fca028");
			setStrength((prev) => "Not bad...");
		} else if (value < 70) {
			setColor((prev) => "#1dc057");
			setStrength((prev) => "Pretty strong!");
		} else {
			setColor((prev) => "#0d73ec");
			setStrength((prev) => "Unpredictable!");
		}
	};

	return (
		<>
			<Typography variant="body">
				<span className={styles.StrengthIndicator}>
					Password strength: {strength}
				</span>
			</Typography>
			<Slider
				className={styles.Slider}
				aria-label="Password Length"
				defaultValue={defaultValue}
				min={10}
				max={100}
				onChange={handleSetValue}
				valueLabelDisplay="auto"
				sx={{ color: { color } }}
			/>
		</>
	);
}
