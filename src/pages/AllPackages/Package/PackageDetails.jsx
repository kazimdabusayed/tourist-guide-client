import { useLoaderData } from "react-router-dom";
import PhotoAlbum from "react-photo-album";
// import photos from "./photos";

const PackageDetails = () => {
	const onePackage = useLoaderData();
   const { _id, name, tour_type, price, images } = onePackage;

   console.log(images)

	return (
		<div>
			<PhotoAlbum
				layout="masonry"
				photos={images.map((image) => (
					<div key={image}>{image}</div>
				))}
			/>
		</div>
	);
};

export default PackageDetails;
