import React from "react";
import Switch from "@mui/material/Switch";

export default function CaseToggle({ checked, onChange }) {
	const handleChecked = () => {
		onChange(!checked);
	};

	return (
		<>
			<Switch checked={checked} value="uppercase" onChange={handleChecked} />
		</>
	);
}
