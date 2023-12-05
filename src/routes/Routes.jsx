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
import DashboardLayout from "../layouts/DashboardLayout.jsx";
import Tables from "../pages/Tables.tsx";
import Settings from "../pages/Settings.tsx";
import MyProfile from "../pages/DashBoard/MyProfile/MyProfile.tsx";
import AddPackage from "../pages/DashBoard/AddPackage/AddPackage.jsx";
import ManageUsers from "../pages/DashBoard/ManageUsers/ManageUsers.jsx";
import AssignedTours from "../pages/DashBoard/AssignedTours/AssignedTours.jsx";
import Bookings from "../pages/DashBoard/Bookings/Bookings.jsx";
import Wishlist from "../pages/DashBoard/Wishlist/Wishlist.jsx";
import Dashboard from "../pages/DashBoard/Dashboard.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import AdminRoute from "./AdminRoute.jsx";
import GuideRoute from "./GuideRoute.jsx";
import PackageDetails from "../pages/AllPackages/Package/PackageDetails.jsx";


export const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		errorElement: <Error />,
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
				path: "/packages/:id",
				element: <PackageDetails />,
				loader: ({ params }) =>
					fetch(`http://localhost:3000/api/packages/${params.id}`),
			},
			{
				path: "/stories",
				element: <AllStories />,
			},
		],
	},
	{
		path: "dashboard/*",
		element: (
			<PrivateRoute>
				<DashboardLayout />
			</PrivateRoute>
		),
		children: [
			{
				path: "",
				element: <Dashboard />,
			},
			{
				path: "profile",
				element: <MyProfile />,
			},
			{
				path: "bookings",
				element: <Bookings />,
			},
			{
				path: "wishlist",
				element: <Wishlist />,
			},
			{
				path: "assigned-tours",
				element: (
					<GuideRoute>
						<AssignedTours />
					</GuideRoute>
				),
			},
			{
				path: "addpackage",
				element: (
					<AdminRoute>
						<AddPackage />
					</AdminRoute>
				),
			},
			{
				path: "manage-users",
				element: (
					<AdminRoute>
						<ManageUsers />
					</AdminRoute>
				),
			},
			{
				path: "tables",
				element: <Tables />,
			},
			{
				path: "settings",
				element: <Settings />,
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