import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useAxiosPublic from "../../axios/useAxiosPublic";
import ProductCard from "./ProductCard";
import useAxiosSecure from "../../axios/useAxiosSecure";
import Swal from "sweetalert2";


const AllProduct = () => {
    const axiosPublic=useAxiosPublic();
    const axiosSecure=useAxiosSecure();
      const queryClient = useQueryClient();
     const {data=[],refetch,isLoading} = useQuery({ 
        queryKey: ['products'], 
        queryFn: async()=>{
            const {data}=await axiosPublic.get("/products")
          return data;


        } 
    })
    const deleteProduct = useMutation({
    mutationFn: async(id)=>{
        const {data}=await axiosSecure.delete(`/product/${id}`)
        console.log(data);
        return data

    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['products'] })
 
     Swal.fire({
      title: "Deleted!",
      text: "Product deleted.",
      icon: "success"
    });
    },
    onError: (error) => {
      alert(`Error deleting users: ${error.message}`);
    },
  })


   const handleDelete= async(id)=>{
 
Swal.fire({
  title: "Are you sure?",
  text: "Delete This Product",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  cancelButtonText: "No",
  confirmButtonText: "Yes,"
}).then(async(result) => {
  if (result.isConfirmed) {
    deleteProduct.mutate(id)
   
  }
});
   
   }

 

    return (
         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Our Products
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our premium collection of products with smooth animations and intuitive interactions
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8">
          {data.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              onDelete={() => handleDelete(product?._id)}
            />
          ))}
        </div>
      </div>
    </div>
    ); 
};

export default AllProduct;