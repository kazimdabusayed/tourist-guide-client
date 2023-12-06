import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import useAxiosOpen from "../hooks/useAxiosOpen";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
	const [user, steUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const axiosOpen = useAxiosOpen();

	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const logIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};
	const googleLogIn = () => {
		setLoading(true);
		const googleProvider = new GoogleAuthProvider();
		return signInWithPopup(auth, googleProvider);
	};

	const logOut = () => {
		setLoading(true);
		return signOut(auth);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			steUser(currentUser);
			if (currentUser) {
				//get token
				const userInfo = { email: currentUser.email };
				axiosOpen.post("/jwt", userInfo).then((res) => {
					if (res.data.token) {
						localStorage.setItem("access_token", res.data.token);
						setLoading(false);
					}
				});
			} else {
				//remove token
				localStorage.removeItem("access_token");
				setLoading(false);
			}
			console.log("current user", currentUser);
			setLoading(false);
		});
		return () => {
			return unsubscribe();
		};
	}, [axiosOpen]);

	const authInfo = {
		user,
		loading,
		createUser,
		logIn,
		googleLogIn,
		logOut,
	};

	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
