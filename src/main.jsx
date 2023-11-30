import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";
import { ChakraProvider } from "@chakra-ui/react";
import AuthProvider from "./provider/AuthProvider";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
	<div className="dark:bg-black max-w-screen-xl mx-auto font-poppins">
		<React.StrictMode>
			<AuthProvider>
				<QueryClientProvider client={queryClient}>
					<ChakraProvider>
						<RouterProvider router={router} />
					</ChakraProvider>
				</QueryClientProvider>
			</AuthProvider>
		</React.StrictMode>
	</div>
);
