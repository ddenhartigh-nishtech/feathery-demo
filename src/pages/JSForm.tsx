import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

declare global {
	interface Window {
		Feathery?: {
			init: (sdkKey: string) => void;
			renderAt: (
				elementId: string,
				props: { formId: string; onSubmit?: () => void },
				loginEnabled?: boolean
			) => {
				destroy: () => void;
				validateStep: () => boolean;
			};
		};
	}
}

export default function JSForm() {
	const containerRef = useRef<HTMLDivElement>(null);
	const navigate = useNavigate();

	useEffect(() => {
		const sdkKey = import.meta.env.VITE_FEATHERY_TEST_SDK_KEY;
		// const sdkKey = import.meta.env.VITE_FEATHERY_LIVE_SDK_KEY;
		const formId = import.meta.env.VITE_FEATHERY_FORM_ID;

		if (!sdkKey || !formId) {
			console.error("Missing Feathery SDK key or form ID");
			return;
		}

		let formContext: { destroy: () => void } | null = null;
		let isInitialized = false;

		const script = document.createElement("script");

		script.src =
			"https://cdn.jsdelivr.net/npm/@feathery/react@latest/umd/index.js";
		script.async = true;

		script.onload = () => {
			console.log("Feathery script loaded successfully");

			if (isInitialized) {
				console.log("Already initialized, skipping");
				return;
			}

			console.log("SDK Key:", sdkKey);
			console.log("Form ID:", formId);

			if (window.Feathery) {
				try {
					window.Feathery.init(sdkKey);
					console.log("Feathery initialized");
					isInitialized = true;

					setTimeout(() => {
						const container = containerRef.current;
						console.log("Container element:", container);

						if (container && window.Feathery) {
							formContext = window.Feathery.renderAt(
								"feathery-form-container",
								{
									formId: formId,
									onSubmit: () => {
										console.log(
											"Form submitted successfully"
										);
										navigate("/thank-you");
									},
								},
								false
							);
							console.log("Form rendered, context:", formContext);
						} else {
							console.error("Container element not found");
						}
					}, 100);
				} catch (error) {
					console.error(
						"Error initializing or rendering Feathery:",
						error
					);
				}
			} else {
				console.error("Feathery object not found on window");
			}
		};

		script.onerror = (error) => {
			console.error("Failed to load Feathery script:", error);
		};

		document.head.appendChild(script);

		return () => {
			if (formContext?.destroy) {
				formContext.destroy();
			}

			if (document.head.contains(script)) {
				document.head.removeChild(script);
			}

			delete window.Feathery;
		};
	}, []);

	return (
		<>
			<h1>Javascript Embedded Form</h1>
			<div
				ref={containerRef}
				style={{ height: "80vh", width: "100%" }}
				id="feathery-form-container"
			/>
		</>
	);
}
