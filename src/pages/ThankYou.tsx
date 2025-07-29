import { Link } from "react-router-dom";

export default function ThankYou() {
	return (
		<div style={styles.container}>
			<h1 style={styles.heading}>Thank You!</h1>
			<p style={styles.text}>We’ve received your submission.</p>
			<Link to="/" style={styles.link}>
				Back to Home
			</Link>
		</div>
	);
}

const styles = {
	container: {
		height: "100vh",
		display: "flex",
		flexDirection: "column" as const,
		alignItems: "center",
		justifyContent: "center",
		fontFamily: "sans-serif",
		backgroundColor: "#f6f9fc",
		color: "#333",
	},
	heading: {
		fontSize: "2rem",
		marginBottom: "1rem",
	},
	text: {
		fontSize: "1.2rem",
		marginBottom: "2rem",
	},
	link: {
		textDecoration: "none",
		color: "#007bff",
		fontSize: "1rem",
	},
};
