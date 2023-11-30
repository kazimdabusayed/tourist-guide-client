import Carousel from "../../../components/Carousel";

const TourType = () => {
	const slides = [
		"https://i.ibb.co/ncrXc2V/1.png",
		"https://i.ibb.co/B3s7v4h/2.png",
		"https://i.ibb.co/XXR8kzF/3.png",
		"https://i.ibb.co/yg7BSdM/4.png",
		"https://i.ibb.co/ncrXc2V/1.png",
		"https://i.ibb.co/B3s7v4h/2.png",
		"https://i.ibb.co/XXR8kzF/3.png",
		"https://i.ibb.co/yg7BSdM/4.png",
	];
   return (
		<div className="relative">
			<div className="max-w-xs max-h-fit">
				<Carousel>
					{slides.map((slide) => (
						<img key={slide} src={slide} alt="" />
					))}
				</Carousel>
			</div>
		</div>
   );
};

export default TourType;