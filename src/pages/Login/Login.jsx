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
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { useEffect } from "react";

const Login = () => {
	const { user, logIn } = useAuth();
	const [showPassword, setShowPassword] = useState(false);
	const location = useLocation();
	const navigate = useNavigate();
	const toast = useToast();

	useEffect(() => {
		if (user) {
			navigate("/");
		}
	}, [user]);

	const handleSignIn = (e) => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;

		logIn(email, password)
			.then(() => {
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

	return (
		<div className="min-h-screen">
			<div className="flex py-6 rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-5xl">
				<div className="hidden lg:block lg:w-1/2 bg-cover bg-[url(https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80)]"></div>
				<div className="w-full p-6 lg:w-1/2">
					<a
						href="/"
						className="flex justify-center text-3xl font-semibold text-cyan-500 text-center mb-4"
					>
						Tourist Trail
					</a>
					<p className="text-xl text-gray-600 dark:text-gray-400 text-center">
						Welcome back!
					</p>
					<SocialLogin />
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
								to="/signup"
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
