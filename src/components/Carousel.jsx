import { useState, useEffect } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

const Carousel = ({
	children: images,
	autoSlide = false,
	autoSlideInterval = 3000,
}) => {
	const [curr, setCurr] = useState(0);

	const prev = () =>
		setCurr((curr) => (curr === 0 ? images.length - 1 : curr - 1));
	const next = () =>
		setCurr((curr) => (curr === images.length - 1 ? 0 : curr + 1));

	useEffect(() => {
		if (!autoSlide) return;
		const slideInterval = setInterval(next, autoSlideInterval);
		return () => clearInterval(slideInterval);
	}, []);
	return (
		<div className="overflow-hidden relative">
			<div
				className="flex transition-transform ease-out duration-500"
				style={{ transform: `translateX(-${curr * 100}%)` }}
			>
				{images}
			</div>
			<div className="group absolute inset-0 flex items-center justify-between p-4">
				<button
					onClick={prev}
					className="group-hover:block hidden p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
				>
					<ArrowLeftIcon size={40} />
				</button>
				<button
					onClick={next}
					className="group-hover:block hidden p-1 rounded-full shadow bg-black text-gray-800 hover:bg-white"
				>
					<ArrowRightIcon size={40} />
				</button>
			</div>

			<div className="absolute bottom-4 right-0 left-0">
				<div className="flex items-center justify-center gap-2">
					{images.map((_, i) => (
						<div
							key={i}
							className={`
                        transition-all w-2 h-2 bg-white rounded-full
                        ${curr === i ? "p-1.5" : "bg-opacity-50"}
                     `}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Carousel;
