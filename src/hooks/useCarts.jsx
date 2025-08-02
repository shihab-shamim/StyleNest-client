import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../axios/useAxiosSecure";
import useAuth from "./useAuth";


const useCarts = () => {
    const {user}=useAuth()
    const axiosSecure=useAxiosSecure()
    const {data}=useQuery({
        queryKey:["carts",user],
         enabled: !!user?.email,
        queryFn:async()=>{
        const {data}=await axiosSecure.get(`/carts?email=${user?.email}`)
        return data

        }
    })
   
    return  data;
};

export default useCarts;