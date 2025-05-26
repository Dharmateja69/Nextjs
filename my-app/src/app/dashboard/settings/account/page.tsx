import { FiMail, FiMapPin, FiPhone, FiUser } from "react-icons/fi";

const AccountPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 flex items-center justify-center p-8 font-sans">
      <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Profile Picture and Basic Info */}
        <div className="flex flex-col items-center border-r border-gray-200 pr-8">
          <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg mb-6">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-1 flex items-center gap-2">
            <FiUser size={28} /> Jane Doe
          </h2>
          <p className="text-gray-500 text-sm">@janedoe</p>
        </div>

        {/* Contact Info */}
        <div className="md:col-span-2 flex flex-col justify-center gap-6">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4 border-b border-gray-300 pb-2">
            Account Information
          </h3>

          <div className="flex items-center gap-4 text-gray-700">
            <FiMail size={24} className="text-indigo-600" />
            <div>
              <p className="font-medium">Email</p>
              <p className="text-gray-500">jane.doe@example.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-gray-700">
            <FiPhone size={24} className="text-indigo-600" />
            <div>
              <p className="font-medium">Phone</p>
              <p className="text-gray-500">+1 (555) 123-4567</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-gray-700">
            <FiMapPin size={24} className="text-indigo-600" />
            <div>
              <p className="font-medium">Location</p>
              <p className="text-gray-500">San Francisco, CA, USA</p>
            </div>
          </div>

          <button
            type="button"
            className="mt-8 bg-indigo-600 hover:bg-indigo-700 transition text-white py-3 rounded-lg font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
