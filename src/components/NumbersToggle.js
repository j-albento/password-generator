import React from "react";
import Switch from "@mui/material/Switch";

export default function NumbersToggle({ checked, onChange }) {
	const handleChecked = () => {
		onChange(!checked);
	};

	return (
		<>
			<Switch checked={checked} value="numbers" onChange={handleChecked} />
		</>
	);
}
