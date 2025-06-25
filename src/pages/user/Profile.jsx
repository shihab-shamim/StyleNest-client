import { ClipLoader } from "react-spinners";
import useAuth from "../../hooks/useAuth";
import useUserInfo from "../../hooks/useUserInfo";


const Profile = () => {
 const { data: user, refetch,isLoading } = useUserInfo();

//  console.log(isLoading);

if(isLoading) return <div className="max-w-[200px] mx-auto mt-8"><ClipLoader /></div>
    return (
      <div className="max-w-md mx-auto bg-white shadow-md hover:shadow-lg rounded-2xl overflow-hidden p-6 flex items-start gap-5 transition duration-300">
  <img
    src={user?.image}
    alt="Mitu"
    className="w-20 h-20 rounded-full object-cover ring-2 ring-blue-500"
  />

  <div className="flex-1 min-w-0">
    <div className="flex justify-between items-start mb-2">
      <div>
        <h2 className="text-xl font-bold text-gray-800">{user?.name}</h2>
        <p className="text-sm text-gray-500">{user?.email}</p>
      </div>

      <button
        onClick={() => alert('Edit clicked')}
        className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-md shadow-sm transition duration-200"
      >
        Edit
      </button>
    </div>

    <p className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-2">
      {user?.role}
    </p>

    <p className="text-xs text-gray-400 break-all">
     {user?._id}
    </p>
  </div>
</div>




    );
};

export default Profile;