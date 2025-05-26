// pages/dashboard/user.tsx
"use client";

import Link from "next/link";

const User = () => {
  return (
    <div className="min-h-screen bg-purple-50 p-10 font-sans">
      <h1 className="text-purple-900 text-4xl font-extrabold mb-8">
        User Dashboard
      </h1>

      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6 flex flex-col gap-6">
        <Link
          href="/dashboard/user/user-list"
          className="text-purple-700 text-xl font-semibold hover:underline"
        >
          View User List
        </Link>
        <Link
          href="/dashboard/user/userdetails"
          className="text-purple-700 text-xl font-semibold hover:underline"
        >
          View User Details
        </Link>
      </div>
    </div>
  );
};

export default User;
