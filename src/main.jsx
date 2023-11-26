import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";
import { ChakraProvider } from "@chakra-ui/react";
import AuthProvider from "./provider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
	<div className="dark:bg-black max-w-screen-xl mx-auto font-poppins">
		<React.StrictMode>
			<AuthProvider>
				<ChakraProvider>
					<RouterProvider router={router} />
				</ChakraProvider>
			</AuthProvider>
		</React.StrictMode>
	</div>
);
