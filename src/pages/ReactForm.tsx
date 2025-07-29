import { init, Form } from "@feathery/react";
import { useNavigate } from "react-router-dom";

const sdkKey = import.meta.env.VITE_FEATHERY_TEST_SDK_KEY;
// const sdkKey = import.meta.env.VITE_FEATHERY_LIVE_SDK_KEY;
const formId = import.meta.env.VITE_FEATHERY_FORM_ID;
init(sdkKey);

export default function ReactForm() {
	const navigate = useNavigate();
	return (
		<>
			<h1>React Integrated Form</h1>
			<div style={{ height: "80vh" }}>
				<Form
					formId={formId}
					onFormComplete={(context) => {
						console.log("Form submitted:", context);
						navigate("/thank-you");
					}}
				/>
			</div>
		</>
	);
}
