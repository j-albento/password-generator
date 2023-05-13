import React, { useState } from "react";
import RangeSlider from "./RangeSlider";
import SymbolToggle from "./SymbolToggle";
import NumbersToggle from "./NumbersToggle";
import CaseToggle from "./CaseToggle";
import RandomizeButton from "./RandomizeButton";
import { FormGroup, FormControlLabel, Typography } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import styles from "../styles/PasswordGenerator.module.css";

export default function PasswordGenerator() {
	const [password, setPassword] = useState("");
	const [includeSymbols, setIncludeSymbols] = useState(true);
	const [includeNumbers, setIncludeNumbers] = useState(true);
	const [includeUppercase, setIncludeUppercase] = useState(true);

	const characters = {
		lowercase: "abcdefghijklmnopqrstuvwxyz",
		uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
		numbers: "0123456789",
		symbols: "!@#$%^&*()[];<>/-"
	};

	const getValue = (value) => {
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
		if (includeUppercase) {
			charset += characters.uppercase;
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
	const handleIncludeUppercase = () => {
		setIncludeUppercase((prev) => !prev);
	};
	const handleIncludeNumbers = () => {
		setIncludeNumbers((prev) => !prev);
	};

	return (
		<div className={styles.Container}>
			<div className={styles.InputContainer}>
				<input
					className={styles.Input}
					placeholder="Generated password"
					value={password}
					readOnly={true}
				/>
				<button
					className={styles.CopyButton}
					onClick={() => {
						console.log("hi");
					}}>
					<ContentCopyIcon
						sx={{ width: 20, height: 20, padding: 0, color: "#fff" }}
					/>
					Copy
				</button>
			</div>
			<RangeSlider getValue={getValue} />

			<FormGroup className={styles.SwitchContainer}>
				<Typography variant="h5">Include</Typography>
				<FormControlLabel
					className={styles.Toggle}
					control={
						<SymbolToggle
							checked={includeSymbols}
							onChange={handleIncludeSymbols}
						/>
					}
					label="Symbols"
				/>
				<FormControlLabel
					className={styles.Toggle}
					control={
						<CaseToggle
							checked={includeUppercase}
							onChange={handleIncludeUppercase}
						/>
					}
					label="Mixed Case"
				/>
				<FormControlLabel
					className={styles.Toggle}
					control={
						<NumbersToggle
							checked={includeNumbers}
							onChange={handleIncludeNumbers}
						/>
					}
					label="Numbers"
				/>
			</FormGroup>
			<RandomizeButton />
		</div>
	);
}
