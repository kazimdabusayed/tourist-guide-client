import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import {
	Alert,
	AlertIcon,
	AlertTitle,
	AlertDescription,
	useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useWishlist from "../../../hooks/useWishlist";

const Package = () => {
	const { user } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();
	const axiosSecure = useAxiosSecure();
	const toast = useToast();
	const [, refetch] = useWishlist();

	const handleAddToWishlist = (package) => {
		if (user && user.email) {
			const wishItem = {
				wishId: _id,
				email: user.email,
				name,
				image,
				price,
			};
			axiosSecure.post("/wishlists", wishItem).then((res) => {
				if (res.data.insetedId) {
					toast({
						title: "Added to wish list",
						status: "success",
						duration: 1200,
						position: "top-right",
						isClosable: true,
					});
            }
            //refetch
            refetch();
			});
		} else {
			Swal.fire({
				title: "You are not logged in!",
				text: "You won't be able to revert this!",
				icon: "warning",
				showCancelButton: true,
				confirmButtonColor: "#3085d6",
				cancelButtonColor: "#d33",
				confirmButtonText: "Yes, sign in!",
			}).then((result) => {
				if (result.isConfirmed) {
					navigate("/signin", { state: { from: location } });
				}
			});
		}
	};
	return <div></div>;
};

export default Package;
