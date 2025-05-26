import { FiEdit, FiMail, FiMapPin, FiPhone, FiUser } from "react-icons/fi";

const Profile = () => {
  const user = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    phone: "+1 234 567 890",
    location: "San Francisco, CA",
    bio: "Full-stack developer passionate about creating beautiful and functional web applications. Loves React, Next.js, and clean code.",
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 flex items-center justify-center p-8 font-sans">
      <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-8">
        <div className="flex items-center gap-6 mb-6">
          <div className="bg-indigo-200 text-indigo-700 rounded-full p-4">
            <FiUser size={48} />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
            <p className="text-gray-600 mt-1">{user.bio}</p>
          </div>
          <button
            className="ml-auto bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md shadow-md flex items-center gap-2 font-semibold transition"
            type="button"
          >
            <FiEdit size={18} />
            Edit Profile
          </button>
        </div>

        <div className="space-y-4 text-gray-700">
          <div className="flex items-center gap-3">
            <FiMail size={20} className="text-indigo-500" />
            <span>{user.email}</span>
          </div>
          <div className="flex items-center gap-3">
            <FiPhone size={20} className="text-indigo-500" />
            <span>{user.phone}</span>
          </div>
          <div className="flex items-center gap-3">
            <FiMapPin size={20} className="text-indigo-500" />
            <span>{user.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
