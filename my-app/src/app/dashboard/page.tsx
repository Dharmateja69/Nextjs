"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-md rounded-2xl p-8 max-w-md w-full text-center space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>

        <div className="space-y-4">
          <Link
            href="/dashboard/profile"
            className="block w-full text-center py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition duration-200"
          >
            Go to Profile
          </Link>

          <button
            onClick={() => router.push("/dashboard/settings")}
            className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white rounded-lg transition duration-200"
          >
            → To Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
