import axios from "axios";


const axiosSucure = axios.create({
	baseURL: "http://localhost:3000",
});
const useAxiosSecure = () => {
   return axiosSucure;
};

export default useAxiosSecure;