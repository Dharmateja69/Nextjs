// pages/dashboard/userdetails.tsx
"use client";

const Userdetails = () => {
  // Dummy user detail example
  const user = {
    name: "John Doe",
    email: "john@example.com",
    role: "Administrator",
    joined: "January 15, 2023",
  };

  return (
    <div className="min-h-screen bg-purple-100 p-10 font-sans flex flex-col items-center">
      <h1 className="text-purple-900 text-4xl font-extrabold mb-6">
        User Details
      </h1>

      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <p className="text-purple-800 text-lg mb-4">
          <strong>Name:</strong> {user.name}
        </p>
        <p className="text-purple-800 text-lg mb-4">
          <strong>Email:</strong> {user.email}
        </p>
        <p className="text-purple-800 text-lg mb-4">
          <strong>Role:</strong> {user.role}
        </p>
        <p className="text-purple-800 text-lg">
          <strong>Joined:</strong> {user.joined}
        </p>
      </div>
    </div>
  );
};

export default Userdetails;
