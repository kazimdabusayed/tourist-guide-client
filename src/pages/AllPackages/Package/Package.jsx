import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import {
	useToast,
	Box,
	Heading,
	Text,
	Img,
	Flex,
	Center,
	useColorModeValue,
	HStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsArrowUpRight, BsHeartFill, BsHeart } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useWishlist from "../../../hooks/useWishlist";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Package = ({ onePackage }) => {
	const { _id, name, tour_type, price, images } = onePackage;
	const [liked, setLiked] = useState(false);
	
	const { user } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();
	const axiosSecure = useAxiosSecure();
	const toast = useToast();
	const [wishlist, refetch] = useWishlist();

	// console.log(wishlist);

	const handleAddToWishlist = () => {
		if (user?.email) {
			const wishItem = {
				wishId: _id,
				email: user.email,
				name,
				images,
				price,
			};
			axiosSecure.post("/wishlists", wishItem).then((res) => {
				if (res.data.insertedId) {
					toast({
						title: "Added to wish list",
						status: "success",
						duration: 1200,
						position: "top-right",
						isClosable: true,
					});
					if (!liked) {
						setLiked(true); // only set to true if it was previously removed
					}
				}
				//refetch
				// refetch();
			});
		} else {
			Swal.fire({
				title: "You are not logged in!",
				text: "You won't be able to revert this!",
				icon: "warning",
				showCancelButton: true,
				confirmButtonColor: "#3085d6",
				cancelButtonColor: "#d33",
				confirmButtonText: "Yes, sign in!",
			}).then((result) => {
				if (result.isConfirmed) {
					navigate("/signin", { state: { from: location } });
				}
			});
		}
	};

	return (
		<Center py={6} className="">
			<Box
				w="lg"
				rounded={"lg"}
				my={5}
				mx={[0, 5]}
				overflow={"hidden"}
				bg="white"
				// border={"1px"}
				// borderColor="purple"
				boxShadow={useColorModeValue(
					"2px 2px 0 black",
					"2px 2px 0 pink"
				)}
				className="bg-white dark:bg-gray-800 dark:text-gray-100 transition-all duration-300 hover:scale-104 hover:shadow-md hover:shadow-purple-400"
			>
				<Box
					h={"300px"}
					borderBottom={"1px"}
					borderColor="black"
					className="overflow-hidden"
				>
					{/* <Carousel>
						{images.map((image) => (
							<img key={image.key} src={image} alt="" />
						))}
					</Carousel> */}
					<Img
						src={images[0]}
						className="hover:scale-105 delay-200 duration-300 ease-in-out"
						roundedTop={"sm"}
						objectFit="cover"
						h="full"
						w="full"
						alt={"Image"}
					/>
				</Box>
				<Box p={4}>
					<Box
						bg="black"
						display={"inline-block"}
						px={2}
						py={1}
						color="white"
						mb={2}
					>
						<Text fontSize={"xs"} fontWeight="medium">
							{tour_type}
						</Text>
					</Box>
					<Heading color={"black"} fontSize={"2xl"} noOfLines={1}>
						{name}
					</Heading>
					<Text color={"gray.500"} noOfLines={2}>
						{/* <details></details> */}
					</Text>
				</Box>
				<HStack borderTop={"1px"} color="black" className="">
					<Link
						to={`/packages/${_id}`}
						className="p-4 flex items-center justify-between rounded-sm cursor-pointer w-full"
					>
						<Text
							fontSize={"md"}
							fontWeight={"semibold"}
							className=""
						>
							View details
						</Text>
						<BsArrowUpRight />
					</Link>
					<Flex
						p={4}
						alignItems="center"
						justifyContent={"space-between"}
						roundedBottom={"sm"}
						borderLeft={"1px"}
						cursor="pointer"
						onClick={handleAddToWishlist}
					>
						{liked ? (
							<BsHeartFill fill="red" fontSize={"24px"} />
						) : (
							<BsHeart fontSize={"24px"} />
						)}
					</Flex>
				</HStack>
			</Box>
		</Center>
		// <div className="relative cursor-pointer">
		// 	<span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
		// 	<div className="relative p-6 bg-white border-1 border-indigo-500 rounded-lg hover:scale-105 transition duration-500">
		// 		<div className="flex items-center">
		// 			<span>😎</span>
		// 			<h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
		// 				Cool Feature
		// 			</h3>
		// 		</div>
		// 		<p className="text-gray-600">
		// 			This is the short description of your feature.
		// 		</p>
		// 	</div>
		// </div>
	);
};

export default Package;
