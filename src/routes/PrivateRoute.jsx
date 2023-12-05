import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
   const { user, loading } = useAuth();
	const location = useLocation();

	if (loading) {
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

	if (user?.email) {
		return children;
	}

	return <Navigate state={{ from: location }} to="/signin" replace></Navigate>;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
	children: PropTypes.node,
};
