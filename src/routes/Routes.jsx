import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home/Home";
import ContactUs from "../pages/ContactUs/ContactUs";
import Story from "../pages/Home/Story/Story";
import AllStories from "../pages/AllStories/AllStories";
import AllPackages from "../pages/AllPackages/AllPackages";
import Error from "../pages/Error/Error";
import Blog from "../pages/Blog/Blog";
import DashBoard from "../layouts/Dashboard";
import Profile from "../pages/DashBoard/Profile/Profile";


export const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		errorElement: <Error/>,
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
				element: <Blog />,
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
		path: '/dashboard',
		element: <DashBoard />,
		children: [
			{
				path: "profile",
				element: <Profile/>
			},
			{
				path: "bookings",
				element: <DashBoard/>
			},
			{
				path: "wishlist",
				element: <DashBoard/>
			},
		]
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