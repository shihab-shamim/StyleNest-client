import axios from "axios";

const axiosSecure=axios.create({
    baseURL:"http://localhost:5000",
    withCredentials:true
})

const useAxiosSecure = () => {
    // onno project ar code
    

    // const {user,logOut}=useContext(AuthContext);
    // const navigate =useNavigate()

    // useEffect(()=>{
    //     axiosSecure.interceptors.response.use(res=>{
    //         return res;
    //     },err=>{
    //         console.log("error tracked in the interceptor",err.response)
    //         if(err.response.status === 401 ){
    //             console.log("log out the use");
    //             logOut()
    //             navigate('/login')

    //         }
    //     })

    // },[])

    return axiosSecure
};

export default useAxiosSecure;