import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useGuide = () => {
   const { user, loading } = useAuth();
   const axiosSecure = useAxiosSecure();
   const { data: isGuide, isGuideLoading } = useQuery({
      queryKey: [user?.email, 'isGuide'],
      enabled: !loading,
      queryFn: async () => {
         const res = await axiosSecure.get(`/users/guide/${user.email}`);
         console.log(res.data);
         return res.data?.guide;
      }
   })
   return [isGuide, isGuideLoading];
};

export default useGuide;