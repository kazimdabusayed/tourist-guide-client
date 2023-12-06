import axios from "axios";

const axiosOpen = axios.create({
	baseURL: "https://tourist-guide-server-1.vercel.app/api",
});

const useAxiosOpen = () => {
	return axiosOpen;
};

export default useAxiosOpen;
