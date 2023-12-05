import { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

export default function SimpleGallery(props) {
	useEffect(() => {
		let lightbox = new PhotoSwipeLightbox({
			gallery: "#" + props.galleryID,
			children: "a",
			pswpModule: () => import("photoswipe"),
		});
		lightbox.init();

		return () => {
			lightbox.destroy();
			lightbox = null;
		};
	}, []);

	return (
		<div className="pswp-gallery flex gap-2" id={props.galleryID}>
			{props.images.map((image, index) => (
				<a
					className="border-4 border-red-700"
					href={image.largeURL}
					data-pswp-width={image.width}
					data-pswp-height={image.height}
					key={props.galleryID + "-" + index}
					target="_blank"
					rel="noreferrer"
				>
					<img src={image.thumbnailURL} alt="" />
				</a>
			))}
		</div>
	);
}
