import axios from "axios";
import { useToast } from "@chakra-ui/react";
import Breadcrumb from "../../../components/Breadcrumb";
import { useState } from "react";
import PhotosUploader from "./PhotosUploader";
import useAxiosOpen from "../../../hooks/useAxiosOpen";

const AddPackage = () => {
	const toast = useToast();
	const axiosOpen = useAxiosOpen();
	const [addedPhotos, setAddedPhotos] = useState([]);
	const [inputFields, setInputFields] = useState([""]);

	const handleAddField = () => {
		setInputFields([...inputFields, ""]);
	};

	const handleChange = (index, value) => {
		const newFields = [...inputFields];
		newFields[index] = value;
		setInputFields(newFields);
	};
	console.log(inputFields);

	// const [image, setImage] = useState();
	// console.log(image);


	const handleAddPackage = (event) => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const tour_type = form.type.value;
		const price = form.price.value;
		const images = addedPhotos;
		const duration = form.duration.value;
		const about_tour = form.about.value;

		// send data to the server
		axiosOpen.post("/packages", {
				name,
				images,
				tour_type,
				duration,
				price,
				tour_plan: inputFields,
				about_tour,
			})
			.then((res) => {
				console.log(res);
				if (res.data.insertedId) {
					toast({
						title: "Package added successfully",
						status: "success",
						duration: 1200,
						position: "top-right",
						isClosable: true,
					});
				}
				form.reset();
				setAddedPhotos([]);
			});
	};
	return (
		<>
			<Breadcrumb pageName="Add Package" />
			<section className="">
				<div className="py-8 mx-auto max-w-3xl lg:py-12">
					<form onSubmit={handleAddPackage} className="">
						<div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
							<div className="sm:col-span-2">
								<label
									htmlFor="name"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Package Name
								</label>
								<input
									type="text"
									name="name"
									id="name"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
									placeholder="Type Package name"
									required=""
								/>
							</div>
							<div className="w-full">
								<label
									htmlFor="type"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Package Type
								</label>
								<input
									type="text"
									name="type"
									id="type"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
									placeholder="package type"
									required=""
								/>
							</div>
							<div className="w-full">
								<label
									htmlFor="price"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Package Price
								</label>
								<input
									type="number"
									name="price"
									id="price"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
									placeholder="6999"
									required=""
								/>
							</div>
							<div className="w-full">
								<label
									htmlFor="duration"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Package Duration
								</label>
								<input
									type="text"
									name="duration"
									id="duration"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
									placeholder="3 days, 2 nights"
									required=""
								/>
							</div>
							<div className="sm:col-span-2">
								<label
									htmlFor="photo"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Package Photo
								</label>
								<PhotosUploader
									addedPhotos={addedPhotos}
									onChange={setAddedPhotos}
								/>
							</div>
							<div className="sm:col-span-2">
								<label
									htmlFor="Plan"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Package Plan
								</label>
								<div className="">
									{/* <input
										type="text"
										placeholder={"Add using a link ....jpg"}
										className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
									/> */}
									<div>
										{inputFields.map((field, index) => (
											<div key={index}>
												<label className="flex items-center mb-2">
													{/* <span className="inline-flex items-center px-3 py-1.5 text-base text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
														Day&nbsp;{index + 1}:
													</span> */}
													<input
														defaultValue={`Day ${index+1}: `}
														type="text"
														// value={field}
														onChange={(e) =>
															handleChange(
																index,
																e.target.value
															)
														}
														className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-none rounded-e-lg focus:ring-primary-600 focus:border-primary-600 flex-1 min-w-0 p-2 w-full block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
													/>
												</label>
											</div>
										))}
									</div>
									<div className="flex justify-end items-center">
										<button
											type="button"
											onClick={handleAddField}
											className="bg-gray-400 text-gray-600 hover:text-gray-400 hover:bg-gray-600 px-4 py-1 rounded-2xl"
										>
											Add&nbsp;day
										</button>
									</div>
								</div>
							</div>

							<div className="sm:col-span-2">
								<label
									htmlFor="about"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									About Package
								</label>
								<textarea
									id="about"
									name="about"
									rows="8"
									className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
									placeholder="Package about here"
								></textarea>
							</div>
						</div>
						<div className="flex justify-end mt-4">
							<button
								type="submit"
								className="text-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium w-full md:w-1/4 text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
							>
								Add Package
							</button>
						</div>
					</form>
				</div>
			</section>
		</>
	);
};

export default AddPackage;
