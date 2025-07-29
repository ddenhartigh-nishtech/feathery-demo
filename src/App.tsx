import { Link } from "react-router-dom";

export default function App() {
	return (
		<div style={{ padding: "2rem" }}>
			<h1>Feathery Embed Demo</h1>
			<ul>
				<li>
					<Link to="/react">React SDK Version</Link>
				</li>
				<li>
					<Link to="/js">JavaScript Embed Version</Link>
				</li>
			</ul>
		</div>
	);
}
