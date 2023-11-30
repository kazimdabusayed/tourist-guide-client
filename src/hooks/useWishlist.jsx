import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useWishlist = () => {
   const axiosSucure = useAxiosSecure();
   const { user } = useAuth();
	const { refetch, data: wishlist = [] } = useQuery({
		queryKey: ["wishlist", user?.email],
		queryFn: async () => {
			const res = await axiosSucure.get(`/wishlists?email=${user?.email}`);
			return res.data;
		},
	});
	return [wishlist, refetch];
};

export default useWishlist;
