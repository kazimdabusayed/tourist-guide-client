import { useLoaderData } from "react-router-dom";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import TourPlan from "./TourPlan";
import TourGuide from "./TourGuide/TourGuide";
import BookingForm from "./BookingForm/BookingForm";
// import { TourPlan } from "./TourPlan";
// import {Steps, Steps.Step} from "rc-steps";

const PackageDetails = () => {
	const onePackage = useLoaderData();
	const { _id, name, tour_type, price, images, about_tour, tour_plan } = onePackage;

	return (
		<div className="">
			<ResponsiveMasonry
				columnsCountBreakPoints={{ 640: 1, 768: 2, 1080: 3, 1880: 5 }}
			>
				<Masonry columnsCount={3} gutter="10px" className="p-6">
					{images.map((image, i) => (
						<img
							key={i}
							src={image}
							style={{ width: "100%", display: "block" }}
						/>
					))}
				</Masonry>
			</ResponsiveMasonry>
			<div className="">
				<TourPlan tour_plan={tour_plan} />
				<div className="p-6 md:p-8">
					<h4 className="text-xl font-semibold mb-3">About The Tour :</h4>
					<h5 className="font-light">{about_tour}</h5>
				</div>
				<TourGuide />
				<BookingForm onePackage={onePackage} />
			</div>
		</div>
	);
};

export default PackageDetails;
