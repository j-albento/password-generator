import React from "react";
import styles from "../styles/RegenerateButton.module.css";

export default function RegenerateButton({ value, regenerate }) {
	const handleClick = () => {
		regenerate(value);
		console.log(value);
	};
	return (
		<button className={styles.RegenerateButton} onClick={handleClick}>
			Regenerate
		</button>
	);
}
