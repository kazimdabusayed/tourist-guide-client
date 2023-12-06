const TourPlan = ({ tour_plan }) => {
	console.log(tour_plan);

	return (
		<div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
			<div className="grid gap-6 row-gap-10 lg:grid-cols-2">
				<div>
					<h4 className="text-center text-xl font-semibold">Tour Plan</h4>
				<div className="px-6 md:px-8 lg:px-6">
					<div className="lg:py-4">
						{tour_plan.length &&
							tour_plan.map((tour) => (
								<div className="flex " key={tour}>
									<div className="flex flex-col items-center mr-4">
										<div>
											<div className="flex items-center justify-center w-10 h-10 border rounded-full">
												<svg
													className="w-4 text-gray-600 dark:text-gray-400"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
													viewBox="0 0 24 24"
												>
													<line
														fill="none"
														strokeMiterlimit="10"
														x1="12"
														y1="2"
														x2="12"
														y2="22"
													/>
													<polyline
														fill="none"
														strokeMiterlimit="10"
														points="19,15 12,22 5,15"
													/>
												</svg>
											</div>
										</div>
										<div className="w-px h-full bg-gray-300" />
									</div>
									<div className="pt-1 pb-8">
										<p className="mb-2 text-lg font-bold">
											{tour?.split(":")[0].trim()}
										</p>
										<p className="text-gray-500">
											{tour?.split(":")[1].trim()}
										</p>
									</div>
								</div>
							))}
					</div>
					<div className="flex">
						<div className="flex flex-col items-center mr-4">
							<div>
								<div className="flex items-center justify-center w-10 h-10 border rounded-full">
									<svg
										className="w-6 text-gray-600"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<polyline
											fill="none"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeMiterlimit="10"
											points="6,12 10,16 18,8"
										/>
									</svg>
								</div>
							</div>
						</div>
						<div className="pt-1">
							<p className="mb-2 text-lg font-bold">Success</p>
							<p className="text-gray-700" />
						</div>
					</div>
				</div>
				</div>
				<div className="relative">
					{/* <img
						className="inset-0 object-cover object-bottom w-full rounded shadow-lg h-96 lg:absolute lg:h-full"
						src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
						alt=""
					/> */}
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742331.0748746707!2d87.7257592632548!3d23.65376928097432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1701808731768!5m2!1sen!2sbd"
						className="max-w-[300px] xsm:max-w-screen-xsm sm:max-w-screen-sm  p-4"
						width="600"
						height="450"
						allowFullScreen=""
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
			</div>
		</div>
	);
};

export default TourPlan;
