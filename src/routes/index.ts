import { lazy } from "react";

const MyProfile = lazy(() => import("../pages/DashBoard/MyProfile/MyProfile"));
const AddPackage = lazy(() => import("../pages/DashBoard/AddPackage/AddPackage"));
const ManageUsers = lazy(() => import("../pages/DashBoard/ManageUsers/ManageUsers"));
const AssignedTours = lazy(() => import("../pages/DashBoard/AssignedTours/AssignedTours"));
const Settings = lazy(() => import("../pages/Settings"));
const Tables = lazy(() => import("../pages/Tables"));

const coreRoutes = [
	{
		path: "/profile",
		title: "Profile",
		component: MyProfile,
	},
	{
		path: "/addPackage",
		title: "AddPackage",
		component: AddPackage,
	},
	{
		path: "/manageUsers",
		title: "ManageUsers",
		component: ManageUsers,
	},
	{
		path: "/assigned-tours",
		title: "AssignedTours",
		component: AssignedTours,
	},
	{
		path: "/tables",
		title: "Tables",
		component: Tables,
	},
	{
		path: "/settings",
		title: "Settings",
		component: Settings,
	},
];

const routes = [...coreRoutes];
export default routes;
