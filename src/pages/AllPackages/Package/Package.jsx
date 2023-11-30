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

const Package = () => {
	const [liked, setLiked] = useState(false);
	const { user } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();
	const axiosSecure = useAxiosSecure();
	const toast = useToast();
	const [, refetch] = useWishlist();

	// const handleAddToWishlist = (package) => {
	// 	if (user && user.email) {
	// 		const wishItem = {
	// 			wishId: _id,
	// 			email: user.email,
	// 			name,
	// 			image,
	// 			price,
	// 		};
	// 		axiosSecure.post("/wishlists", wishItem).then((res) => {
	// 			if (res.data.insetedId) {
	// 				toast({
	// 					title: "Added to wish list",
	// 					status: "success",
	// 					duration: 1200,
	// 					position: "top-right",
	// 					isClosable: true,
	// 				});
	// 			}
	// 			//refetch
	// 			refetch();
	// 		});
	// 	} else {
	// 		Swal.fire({
	// 			title: "You are not logged in!",
	// 			text: "You won't be able to revert this!",
	// 			icon: "warning",
	// 			showCancelButton: true,
	// 			confirmButtonColor: "#3085d6",
	// 			cancelButtonColor: "#d33",
	// 			confirmButtonText: "Yes, sign in!",
	// 		}).then((result) => {
	// 			if (result.isConfirmed) {
	// 				navigate("/signin", { state: { from: location } });
	// 			}
	// 		});
	// 	}
	// };
	return (
		<Center py={6}>
			<Box
				w="xs"
				rounded={"sm"}
				my={5}
				mx={[0, 5]}
				overflow={"hidden"}
				bg="white"
				border={"1px"}
				borderColor="black"
				boxShadow={useColorModeValue(
					"6px 6px 0 black",
					"6px 6px 0 cyan"
				)}
			>
				<Box h={"200px"} borderBottom={"1px"} borderColor="black">
					<Img
						src={
							"https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
						}
						roundedTop={"sm"}
						objectFit="cover"
						h="full"
						w="full"
						alt={"Blog Image"}
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
							React
						</Text>
					</Box>
					<Heading color={"black"} fontSize={"2xl"} noOfLines={1}>
						React v18.0
					</Heading>
					<Text color={"gray.500"} noOfLines={2}>
						In this post, we will give an overview of what is new in
						React 18, and what it means for the future.
					</Text>
				</Box>
				<HStack borderTop={"1px"} color="black">
					<Flex
						p={4}
						alignItems="center"
						justifyContent={"space-between"}
						roundedBottom={"sm"}
						cursor={"pointer"}
						w="full"
					>
						<Text fontSize={"md"} fontWeight={"semibold"}>
							View more
						</Text>
						<BsArrowUpRight />
					</Flex>
					<Flex
						p={4}
						alignItems="center"
						justifyContent={"space-between"}
						roundedBottom={"sm"}
						borderLeft={"1px"}
						cursor="pointer"
						onClick={() => setLiked(!liked)}
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
	);
};

export default Package;
