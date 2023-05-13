import React from "react";
import styles from "../styles/Input.module.css";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import "@fontsource/space-mono";
import "@fontsource/maven-pro";
import { Typography } from "@mui/material";

export default function Input({ password }) {
	return (
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
					console.log("test");
				}}>
				<ContentCopyIcon
					sx={{ width: 20, height: 20, padding: 0, color: "#fff" }}
				/>
				<Typography variant="body" fontFamily="Maven Pro">
					Copy
				</Typography>
			</button>
		</div>
	);
}
