import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
	useToast,
	InputRightElement,
	Button,
	InputGroup,
} from "@chakra-ui/react";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const Login = () => {
	const { logIn, googleLogIn } = useAuth();
	const [showPassword, setShowPassword] = useState(false);
	const location = useLocation();
	const navigate = useNavigate();
	const toast = useToast();

	const handleSignIn = (e) => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;

		logIn(email, password)
			.then((result) => {
				toast({
					title: "Logged in successfully",
					status: "success",
					duration: 1200,
					position: "top-right",
				});
				// navigate after login
				navigate(location?.state ? location.state : "/");
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const handleGoogleLogin = async (e) => {
		e.preventDefault();
		await googleLogIn()
			.then((result) => {
				const createdAt = result.user.metadata?.creationTime;
				console.log(result.user);
				const userInfo = {
					name: result.user?.displayName,
					email: result.user?.email,
					photo: result.user?.photoURL,
					createdAt: createdAt,
				}
				axios.post("http://localhost:3000/api/users", userInfo)
					.then((res) => {
						console.log(res.data);
						if (res.data.insertedId) {
							toast({
								title: "user added successfully",
								status: "info",
								duration: 1200,
								position: "top-right",
								isClosable: true,
							});
						}
						navigate(location?.state ? location.state : "/");
					})
			})
	};

	return (
		<div className="min-h-screen">
			<div className="flex py-6 rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-5xl">
				<div className="hidden lg:block lg:w-1/2 bg-cover bg-[url(https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80)]"></div>
				<div className="w-full p-6 lg:w-1/2">
					<a
						href="/"
						className="flex justify-center text-3xl font-semibold text-violet-500 text-center mb-4"
					>
						DesignHive
					</a>
					<p className="text-xl text-gray-600 dark:text-gray-400 text-center">
						Welcome back!
					</p>
					<div
						onClick={handleGoogleLogin}
						className="flex items-center justify-center mt-4 text-white bg-gray-100 cursor-pointer rounded-lg shadow-md hover:bg-gray-200"
					>
						<div className="px-4 py-3">
							<svg className="h-6 w-6" viewBox="0 0 40 40">
								<path
									d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
									fill="#FFC107"
								/>
								<path
									d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
									fill="#FF3D00"
								/>
								<path
									d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
									fill="#4CAF50"
								/>
								<path
									d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
									fill="#1976D2"
								/>
							</svg>
						</div>
						<h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">
							Sign in with Google
						</h1>
					</div>
					<div className="mt-4 flex items-center justify-between">
						<span className="border-b w-1/5 lg:w-1/4"></span>
						<p className="text-xs text-center text-gray-500">
							or login with email
						</p>
						<span className="border-b w-1/5 lg:w-1/4"></span>
					</div>
					<form onSubmit={handleSignIn}>
						<div className="mt-4">
							<label className="block text-gray-600 text-sm font-bold mb-2">
								Email Address
							</label>
							<input
								className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
								type="email"
								name="email"
								id="email"
								placeholder="jenkins@gamil.com"
							/>
						</div>
						<div className="mt-4">
							<div className="flex justify-between">
								<label className="block text-gray-600 text-sm font-bold mb-2">
									Password
								</label>
								<a href="#" className="text-xs text-gray-500">
									Forget Password?
								</a>
							</div>
							<InputGroup>
								<input
									type={showPassword ? "text" : "password"}
									name="password"
									id="password"
									required
									placeholder="*****"
									className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
								/>
								<InputRightElement h={"full"}>
									<Button
										variant={"ghost"}
										onClick={() =>
											setShowPassword(
												(showPassword) => !showPassword
											)
										}
									>
										{showPassword ? (
											<ViewIcon />
										) : (
											<ViewOffIcon />
										)}
									</Button>
								</InputRightElement>
							</InputGroup>
						</div>
						<div className="mt-8">
							<button className="rounded-md border w-full border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
								Log In
							</button>
						</div>
					</form>
					<div className="mt-4 flex items-center justify-between">
						<span className="border-b w-1/5 md:w-1/4"></span>
						<p className="text-sm text-gray-500">
							<span>or </span>
							<Link
								to="/register"
								className="hover:underline dark:text-violet-400"
							>
								sign up
							</Link>
						</p>
						<span className="border-b w-1/5 md:w-1/4"></span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
