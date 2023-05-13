import React from "react";
import SymbolToggle from "./SymbolToggle";
import CaseToggle from "./CaseToggle";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function Toggles() {
	return (
		<>
			<FormGroup>
				<FormControlLabel control={<SymbolToggle />} label="Symbols" />
				<FormControlLabel control={<CaseToggle />} label="Upper/Lower Case" />
				<FormControlLabel control={<SymbolToggle />} label="Numbers" />
			</FormGroup>
		</>
	);
}
