import Package from "./Package/Package";
import usePackages from "../../hooks/usePackages";

const AllPackages = () => {
	
	const [packages, isLoading, isError] = usePackages();
	
	console.log(packages);

	if (isLoading || isError) {
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


	return (
		<div className="mt-6">
			<div className="text-center">
				<h3 className="text-2xl font-bold sm:text-3xl xl:text-4xl text-cyan-600 ">
					All Packages
				</h3>
				<h2 className="text-base my-4">There are more ppackages here</h2>
			</div>
			<div className="max-w-[85rem] px-4 py-6 sm:px-6 md: lg:px-8 mx-auto ">
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
