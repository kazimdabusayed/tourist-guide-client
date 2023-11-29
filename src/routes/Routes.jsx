import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home/Home";
import ContactUs from "../pages/ContactUs/ContactUs";
import Story from "../pages/Home/Story/Story";
import AllStories from "../pages/AllStories/AllStories";
import AllPackages from "../pages/AllPackages/AllPackages";


export const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/contactus",
				element: <ContactUs />,
			},
			{
				path: "/blogs",
				element: <Story />,
			},
			{
				path: "/community",
				element: <Story />,
			},
			{
				path: "/aboutus",
				element: <ContactUs />,
			},
			{
				path: "/packages",
				element: <AllPackages />,
			},
			{
				path: "/stories",
				element: <AllStories />,
			},
		],
	},
	{
		path: "/signup",
		element: <Register />,
	},
	{
		path: "/signin",
		element: <Login />,
	},
]);