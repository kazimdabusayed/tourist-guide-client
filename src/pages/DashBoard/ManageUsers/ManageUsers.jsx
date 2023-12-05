import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import UserRow from "./UserRow";
import Swal from "sweetalert2";

const ManageUsers = () => {
	const axiosSecure = useAxiosSecure();
	const { data: users = [], refetch } = useQuery({
		queryKey: ["user"],
		queryFn: async () => {
			const res = await axiosSecure.get("/users");
			return res.data;
		},
	});

	const handleDeleteUser = (user) => {
		Swal.fire({
			title: "Are you sure?",
			icon: "warning",
			background: "#aa8edb",
			color: "#ffffff",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, Delete!",
		}).then((result) => {
			if (result.isConfirmed) {
				axiosSecure.delete(`/users/${user._id}`).then((res) => {
					if (res.data.deletedCount > 0) {
						refetch();
					}
					Swal.fire(
						"Deleted!",
						"You have successfully delete the user.",
						"success"
					);
				});
			}
		});
	};

	const handleMakeAdmin = (user) => {
		Swal.fire({
			title: `Do you want to make admin "${user.name}"?`,
			icon: "warning",
			background: "#aa8edb",
			color: "#ffffff",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes",
			cancelButtonText: "No",
		}).then((result) => {
			if (result.isConfirmed) {
				axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
					if (res.data.deletedCount > 0) {
						refetch();
					}
					Swal.fire(
						"Admin!",
						`${user.name} is admin now.`,
						"success"
					);
				});
			}
		});
	};
	const handleMakeGuide = (user) => {
		axiosSecure.patch(`/users/guide/${user._id}`).then((res) => {
			if (res.data.modifiedCount > 0) {
				refetch();
				Swal.fire("Guide!", `${user.name} is an Guide mow`, "success");
			}
		});
	};

	return (
		<div>
			Total Users: {users.length}
			{/* <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
				<h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
					Top Channels
				</h4>

				<thead className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5 text-xs text-gray-700 uppercase  dark:text-gray-400">
					<tr>
						<th scope="col" className="p-4">
							<div className="flex items-center">
								<input
									id="checkbox-all-search"
									type="checkbox"
									className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
								<label
									for="checkbox-all-search"
									className="sr-only"
								>
									checkbox
								</label>
							</div>
						</th>
						<th scope="col" className="px-6 py-3">
							Name
						</th>
						<th scope="col" className="px-6 py-3">
							Position
						</th>
						<th scope="col" className="px-6 py-3">
							Status
						</th>
						<th scope="col" className="px-6 py-3">
							Action
						</th>
					</tr>
				</thead>

				{users.map((user, index) => (
					<UserRow key={user._id} user={user} index={index} />
				))}
			</div> */}
			<div className="mt-2 relative overflow-x-auto shadow-md sm:rounded-lg">
				{/* <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
					<div>
						<button
							id="dropdownActionButton"
							data-dropdown-toggle="dropdownAction"
							className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
							type="button"
						>
							<span className="sr-only">Action button</span>
							Action
							<svg
								className="w-2.5 h-2.5 ms-2.5"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 10 6"
							>
								<path
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="m1 1 4 4 4-4"
								/>
							</svg>
						</button>
						<div
							id="dropdownAction"
							className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
						>
							<ul
								className="py-1 text-sm text-gray-700 dark:text-gray-200"
								aria-labelledby="dropdownActionButton"
							>
								<li>
									<a
										href="#"
										className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
									>
										Reward
									</a>
								</li>
								<li>
									<a
										href="#"
										className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
									>
										Promote
									</a>
								</li>
								<li>
									<a
										href="#"
										className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
									>
										Activate account
									</a>
								</li>
							</ul>
							<div className="py-1">
								<a
									href="#"
									className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
								>
									Delete User
								</a>
							</div>
						</div>
					</div>
					<label for="table-search" className="sr-only">
						Search
					</label>
					<div className="relative">
						<div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
							<svg
								className="w-4 h-4 text-gray-500 dark:text-gray-400"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 20 20"
							>
								<path
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
								/>
							</svg>
						</div>
						<input
							type="text"
							id="table-search-users"
							className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Search for users"
						/>
					</div>
				</div> */}
				{/* <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
					Top Channels
				</h4> */}
				<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
						<tr>
							<th scope="col" className="p-4">
								<div className="flex items-center"></div>
							</th>
							<th scope="col" className="px-6 py-3">
								Name
							</th>
							<th scope="col" className="px-6 py-3">
								Guide
							</th>
							<th scope="col" className="px-6 py-3">
								Admin
							</th>
							<th scope="col" className="px-6 py-3">
								Action
							</th>
						</tr>
					</thead>
					{users.map((user, index) => (
						<UserRow
							key={user._id}
							user={user}
							index={index}
							handleDeleteUser={handleDeleteUser}
							handleMakeAdmin={handleMakeAdmin}
							handleMakeGuide={handleMakeGuide}
						/>
					))}
					{/* <div className="flex justify-center">
						<nav
							className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
							aria-label="Table navigation"
						>
							<span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-2 block w-full md:inline md:w-auto">
								Showing{" "}
								<span className="font-semibold text-gray-900 dark:text-white">
									1-10
								</span>{" "}
								of{" "}
								<span className="font-semibold text-gray-900 dark:text-white">
									1000
								</span>
							</span>
							<ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
								<li>
									<a
										href="#"
										className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
									>
										Previous
									</a>
								</li>
								<li>
									<a
										href="#"
										className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
									>
										1
									</a>
								</li>
								<li>
									<a
										href="#"
										className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
									>
										2
									</a>
								</li>
								<li>
									<a
										href="#"
										aria-current="page"
										className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
									>
										3
									</a>
								</li>
								<li>
									<a
										href="#"
										className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
									>
										4
									</a>
								</li>
								<li>
									<a
										href="#"
										className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
									>
										5
									</a>
								</li>
								<li>
									<a
										href="#"
										className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
									>
										Next
									</a>
								</li>
							</ul>
						</nav>
					</div> */}
				</table>
			</div>
		</div>
	);
};

export default ManageUsers;
