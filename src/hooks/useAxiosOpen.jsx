import axios from "axios";

const axiosOpen = axios.create({
	baseURL: "http://localhost:3000/api",
});

const useAxiosOpen = () => {
	return axiosOpen;
};

export default useAxiosOpen;
