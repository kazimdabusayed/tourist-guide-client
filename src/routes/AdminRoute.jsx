import { useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

const AdminRoute = ({children}) => {
   const { user, loading } = useAuth();
   const [isAdmin, isAdminLoading] = useAdmin();
   const location = useLocation();

   if (loading || isAdminLoading) {
		return (
			<div className="h-screen flex flex-col bg-white dark:bg-gray-800">
				<div className="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
					<div className="flex justify-center">
						<div
							className="animate-spin inline-block w-12 h-12 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500"
							role="status"
							aria-label="loading"
						>
							<span className="sr-only">Loading...</span>
						</div>
					</div>
				</div>
			</div>
		);
   }

   if (user && isAdmin) {
		return children;
   }
   return <Navigate to="/signin" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;