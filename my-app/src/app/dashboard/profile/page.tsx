"use client";

const Profile = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">👤 Profile</h1>
        <p className="text-gray-600 text-base">
          Welcome to your profile page. Here you can view and update your
          personal information.
        </p>
      </div>
    </div>
  );
};

export default Profile;
