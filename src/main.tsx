import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ReactForm from "./pages/ReactForm";
import JSForm from "./pages/JSForm";
import "./index.css";
import ThankYou from "./pages/ThankYou";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/react" element={<ReactForm />} />
				<Route path="/js" element={<JSForm />} />
				<Route path="/thank-you" element={<ThankYou />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
