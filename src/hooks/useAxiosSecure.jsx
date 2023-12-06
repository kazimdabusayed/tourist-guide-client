import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";


const axiosSucure = axios.create({
	baseURL: "https://tourist-guide-server-1.vercel.app/api",
});
const useAxiosSecure = () => {
   const navigate = useNavigate();
   const { logOut } = useAuth();

   axiosSucure.interceptors.request.use(function (config) {
      const token = localStorage.getItem('access_token');
      config.headers.authorization = `Bearer ${token}`;
      return config;
   }, function (error) {
      return Promise.reject(error);
   });

   //intercepts 401 and 403 status
   axiosSucure.interceptors.response.use(function (response) {
      return response;
   },async (error) => {
      const status = error.response.status;
      console.log(status);
      //for 401 or 403 status logout the user  and redirect back to the login page
      if (status === 401 || status === 403) {
         // await logOut();
         // navigate('/signin');
         
      }
      return Promise.reject(error);
   }
   // useEffect(() => {
	// 		if (status) {
	// 			navigate("/signin");
	// 		}
   //    }, [navigate])
   );

   return axiosSucure;
};

export default useAxiosSecure;