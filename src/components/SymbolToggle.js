import React from "react";
import Switch from "@mui/material/Switch";

export default function SymbolToggle({ checked, onChange }) {
	const handleChecked = () => {
		onChange(!checked);
	};

	return (
		<>
			<Switch checked={checked} value="symbols" onChange={handleChecked} />
		</>
	);
}
