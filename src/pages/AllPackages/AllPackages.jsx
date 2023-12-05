import { useState } from "react";
import useAxiosOpen from "../../hooks/useAxiosOpen";
import { useQuery } from "@tanstack/react-query";
import Package from "./Package/Package";

const AllPackages = () => {
   const [search, setSearch] = useState("");
	const axiosOpen = useAxiosOpen();

	const {
		data: packages = [],
		isLoading,
		isError,
	} = useQuery({
		queryKey: ["package"],
		queryFn: async () => {
			const res = await axiosOpen.get("/packages");
			return res.data;
		},
   });
   console.log(packages);

	if (isLoading) {
		return (
			<div className="h-screen flex flex-col bg-white dark:bg-gray-800">
				<div className="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
					<div className="flex justify-center">
						<div
							className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500"
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

	if (isError) {
		return <div>Error fetching data</div>;
	}

	return (
		<div className="mt-6">
			<div className="text-center">
				<h3 className="text-3xl font-bold sm:text-4xl xl:text-5xl text-violet-600 ">
					All Services
				</h3>
				<h2 className="text-base my-4">There are more services here</h2>
			</div>
			<div className="max-w-[85rem] px-4 py-8 sm:px-6 lg:px-8 lg:py-4 mx-auto ">
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{packages?.map((onePackage) => (
								<Package
									key={onePackage._id}
									onePackage={onePackage}
								></Package>
							))}
				</div>
			</div>
		</div>
	);
};

export default AllPackages;
