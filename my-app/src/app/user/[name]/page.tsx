"use client";

import { useParams, useRouter } from "next/navigation";

const PublicProfile = () => {
  const { name } = useParams();
  const router = useRouter();
  console.log("Name from params:", name);
  console.log("Router object:", router);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 to-blue-200 p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center space-y-4">
        <img
          src="https://i.pravatar.cc/150"
          alt="Profile"
          className="w-24 h-24 rounded-full mx-auto"
        />
        <h1 className="text-2xl font-semibold text-blue-800 capitalize">
          @{name}
        </h1>
        <p className="text-gray-600">
          This is a public profile page for <strong>{name}</strong>.
        </p>

        <button
          onClick={() => router.push("/")}
          className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md"
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );
};

export default PublicProfile;
