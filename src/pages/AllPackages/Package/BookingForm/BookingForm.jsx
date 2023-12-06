import {
	Box,
	SimpleGrid,
	GridItem,
	Stack,
	Heading,
	Text,
	chakra,
	FormControl,
	Button,
	Input,
	FormLabel,
	Flex,
	Divider,
	Select,
	Avatar,
	useDisclosure,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
   ModalCloseButton,
   ModalBody
} from "@chakra-ui/react";
import useAuth from "../../../../hooks/useAuth";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
import useAxiosOpen from "../../../../hooks/useAxiosOpen";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";


const BookingForm = ({ onePackage }) => {
   
   const { name, about_tour, price } = onePackage;
   const { user } = useAuth();
   const [startDate, setStartDate] = useState(new Date());
   const { isOpen, onOpen, onClose } = useDisclosure();
   const axiosSecure = useAxiosSecure()

   const handleAddBooking = (event) => {
		event.preventDefault();
		const form = event.target;
		const takingDate = form.takingDate.value;
		const specialInstruction = form.specialInstruction.value;
		// send data to the server
		axiosSecure.post("/bookings",
				{
					serviceName,
					price,
					servicePhoto,
					providerEmail,
					email,
					takingDate,
					specialInstruction,
					status,
				}
			)
			.then((res) => {
				console.log(res);
            if (res.data.insertedId) {
               
				}
				form.reset();
			});
   };
   
	return (
		<Box p={10}>
			<Divider
				my="5"
				borderColor="gray.300"
				_dark={{
					borderColor: "whiteAlpha.300",
				}}
				visibility={{
					base: "hidden",
					sm: "visible",
				}}
			/>

			<Box mt={[10, 0]}>
				<SimpleGrid
					display={{
						base: "initial",
						md: "grid",
					}}
					columns={{
						md: 3,
					}}
					spacing={{
						md: 6,
					}}
				>
					<GridItem
						colSpan={{
							md: 1,
						}}
					>
						<Box px={[4, 0]}>
							<Heading
								fontSize="lg"
								fontWeight="medium"
								lineHeight="6"
							>
								{name}
							</Heading>
							<Text
								mt={1}
								fontSize="sm"
								color="gray.600"
								_dark={{
									color: "gray.400",
								}}
							>
								{about_tour}
							</Text>
						</Box>
					</GridItem>
					<GridItem
						mt={[5, null, 0]}
						colSpan={{
							md: 2,
						}}
					>
						<chakra.form
							method="POST"
							shadow="base"
							rounded={[null, "md"]}
							overflow={{
								sm: "hidden",
							}}
						>
							<Stack
								px={4}
								py={5}
								p={[null, 6]}
								bg="gray.100"
								_dark={{
									bg: "gray.700",
								}}
								spacing={6}
							>
								<SimpleGrid columns={6} spacing={6}>
									<FormControl as={GridItem} colSpan={[6, 1]}>
										<FormLabel
											fontSize="sm"
											fontWeight="md"
											color="gray.700"
											_dark={{
												color: "gray.50",
											}}
										>
											Photo
										</FormLabel>
										<Flex alignItems="center" mt={1}>
											<Avatar
												boxSize={12}
												bg="gray.100"
												_dark={{
													bg: "gray.800",
												}}
												src={user?.photoURL}
											/>
										</Flex>
									</FormControl>
									<FormControl as={GridItem} colSpan={[6, 2]}>
										<FormLabel
											htmlFor="name"
											fontSize="sm"
											fontWeight="md"
											color="gray.700"
											_dark={{
												color: "gray.50",
											}}
										>
											Name
										</FormLabel>
										<Input
											type="text"
											name="name"
											id="name"
											defaultValue={user?.displayName}
											disabled
											mt={1}
											focusBorderColor="brand.400"
											shadow="sm"
											size="sm"
											w="full"
											rounded="md"
										/>
									</FormControl>

									<FormControl as={GridItem} colSpan={[6, 3]}>
										<FormLabel
											htmlFor="email_address"
											fontSize="sm"
											fontWeight="md"
											color="gray.700"
											_dark={{
												color: "gray.50",
											}}
										>
											Email address
										</FormLabel>
										<Input
											type="text"
											name="email_address"
											id="email_address"
											defaultValue={user?.email}
											disabled
											mt={1}
											focusBorderColor="brand.400"
											shadow="sm"
											size="sm"
											w="full"
											rounded="md"
										/>
									</FormControl>
									<FormControl as={GridItem} colSpan={[6, 3]}>
										<FormLabel
											htmlFor="name"
											fontSize="sm"
											fontWeight="md"
											color="gray.700"
											_dark={{
												color: "gray.50",
											}}
										>
											Price
										</FormLabel>
										<Input
											type="text"
											name="price"
											id="price"
											defaultValue={price}
											disabled
											mt={1}
											focusBorderColor="brand.400"
											shadow="sm"
											size="sm"
											w="full"
											rounded="md"
										/>
									</FormControl>

									<FormControl as={GridItem} colSpan={[6, 3]}>
										<FormLabel
											htmlFor="email_address"
											fontSize="sm"
											fontWeight="md"
											color="gray.700"
											_dark={{
												color: "gray.50",
											}}
										>
											Tour Date
										</FormLabel>
										<Input
											type="date"
											name="date"
											id="date"
											mt={1}
											focusBorderColor="brand.400"
											shadow="sm"
											size="sm"
											w="full"
											rounded="md"
										/>
									</FormControl>

									<FormControl as={GridItem} colSpan={[6, 3]}>
										<FormLabel
											htmlFor="country"
											fontSize="sm"
											fontWeight="md"
											color="gray.700"
											_dark={{
												color: "gray.50",
											}}
										>
											Guide
										</FormLabel>
										<Select
											id="country"
											name="country"
											autoComplete="country"
											placeholder="Select option"
											mt={1}
											focusBorderColor="brand.400"
											shadow="sm"
											size="sm"
											w="full"
											rounded="md"
										>
											<option>Rahim</option>
										</Select>
									</FormControl>
								</SimpleGrid>
							</Stack>
							<Box
								px={{
									base: 4,
									sm: 6,
								}}
								py={3}
								bg="gray.200"
								_dark={{
									bg: "gray.700",
								}}
								textAlign="right"
							>
								<Button
									type="submit"
									className="bg-cyan-200 hover:shadow-md hover:bg-cyan-300"
									fontWeight="md"
								>
									Book Now
								</Button>
								<Button onClick={onOpen}>Open Modal</Button>
								<Modal
									isCentered
									onClose={onClose}
									isOpen={isOpen}
									motionPreset="slideInBottom"
									size={"md"}
								>
									<ModalOverlay />
									<ModalContent>
										<ModalHeader>Booking</ModalHeader>
										<ModalCloseButton />
										<ModalBody>
											<Text fontSize={"xl"}>Confirm your Booking</Text>
										</ModalBody>
										<ModalFooter>
											<Link>
												<Button colorScheme="blue">
													My Bookings
												</Button>
											</Link>
										</ModalFooter>
									</ModalContent>
								</Modal>
							</Box>
						</chakra.form>
					</GridItem>
				</SimpleGrid>
			</Box>

			<Divider
				my="5"
				borderColor="gray.300"
				_dark={{
					borderColor: "whiteAlpha.300",
				}}
				visibility={{
					base: "hidden",
					sm: "visible",
				}}
			/>
		</Box>
	);
};

export default BookingForm;
