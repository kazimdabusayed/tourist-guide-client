import { useQuery } from "@tanstack/react-query";

const usePackages = () => {
   const { data: packages = [] } = useQuery({
      queryKey: 'packages',
      queryFn: 
   })
   return 
};

export default usePackages;