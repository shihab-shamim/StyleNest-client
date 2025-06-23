import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../axios/useAxiosSecure';
import useAuth from '../hooks/useAuth'

const useUserRole = () => {
    const {user}=useAuth();
    const axiosSecure=useAxiosSecure()
    const email=user?.email;
    const {data} = useQuery({ 
        queryKey: ['user'], 
        queryFn: async()=>{
            const {data}=await axiosSecure.get(`/role?email=${email}`)
          return data;


        } 
    })
    console.log(data?.role);
    
    const role=data?.role==="admin"?true:false;
    return role;}

export default useUserRole;