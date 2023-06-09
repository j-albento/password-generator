import React, { useState } from "react";
import RangeSlider from "./components/RangeSlider";
import SymbolToggle from "./components/SymbolToggle";
import NumbersToggle from "./components/NumbersToggle";
import CaseToggle from "./components/CaseToggle";
import Input from "./components/Input";
import RegenerateButton from "./components/RegenerateButton";
import { FormGroup, FormControlLabel, Typography } from "@mui/material";
import "./App.css";
import "@fontsource/maven-pro";

function App() {
	const [password, setPassword] = useState("");
	const [includeSymbols, setIncludeSymbols] = useState(true);
	const [includeNumbers, setIncludeNumbers] = useState(true);
	const [includeMixedCase, setIncludeMixedCase] = useState(true);
	const [sliderValue, setSliderValue] = useState(0);

	const characters = {
		lowercase: "abcdefghijklmnopqrstuvwxyz",
		uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
		numbers: "0123456789",
		symbols: "!?@#$%^&*()[];<>/-+=_~"
	};

	const getValue = (value) => {
		setSliderValue((prev) => value);
		generatePassword(value);
	};

	const generatePassword = (passwordLength) => {
		let charset = "";
		if (includeSymbols) {
			charset += characters.symbols;
		}
		if (includeNumbers) {
			charset += characters.numbers;
		}
		if (includeMixedCase) {
			charset += characters.uppercase + characters.lowercase;
		} else {
			charset += characters.lowercase;
		}

		let newPassword = "";
		for (let i = 0; i < passwordLength; i++) {
			const randomIndex = Math.floor(Math.random() * charset.length);
			newPassword += charset.charAt(randomIndex);
		}
		setPassword(newPassword);
	};

	const handleIncludeSymbols = () => {
		setIncludeSymbols((prev) => !prev);
	};
	const handleIncludeMixedCase = () => {
		setIncludeMixedCase((prev) => !prev);
	};
	const handleIncludeNumbers = () => {
		setIncludeNumbers((prev) => !prev);
	};

	return (
		<div className="Container">
			<Typography variant="body" gutterBottom={true}>
				Choose the length of your password by using the slider below and select
				the options to strengthen your password!
			</Typography>
			<Input password={password} />

			<RangeSlider getValue={getValue} />

			<RegenerateButton value={sliderValue} regenerate={generatePassword} />

			<FormGroup className="SwitchContainer">
				<FormControlLabel
					className="Toggle"
					control={
						<SymbolToggle
							checked={includeSymbols}
							onChange={handleIncludeSymbols}
						/>
					}
					label="Symbols"
				/>
				<FormControlLabel
					className="Toggle"
					control={
						<CaseToggle
							checked={includeMixedCase}
							onChange={handleIncludeMixedCase}
						/>
					}
					label="Mixed Case"
				/>
				<FormControlLabel
					className="Toggle"
					control={
						<NumbersToggle
							checked={includeNumbers}
							onChange={handleIncludeNumbers}
						/>
					}
					label="Numbers"
				/>
			</FormGroup>
		</div>
	);
}

export default App;
