import { useQuery } from "@tanstack/react-query";
import useAxiosOpen from "./useAxiosOpen";

const usePackages = () => {
	const axiosOpen = useAxiosOpen();
   const { data: packages = [], isError, isLoading, isPending } = useQuery({
		queryKey: ["packages"],
		queryFn: async () => {
			const res = await axiosOpen.get("/packages");
			return res.data;
		},
   });
   return [packages, isError, isLoading, isPending];
};

export default usePackages;