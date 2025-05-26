// pages/dashboard/userlist.tsx
"use client";

const Userlist = () => {
  // Dummy data example
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Michael Brown", email: "michael@example.com" },
  ];

  return (
    <div className="min-h-screen bg-purple-50 p-10 font-sans">
      <h1 className="text-purple-800 text-4xl font-extrabold mb-8">
        User List
      </h1>
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-3xl mx-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-purple-300">
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-purple-100 cursor-pointer">
                <td className="py-2 px-4">{user.name}</td>
                <td className="py-2 px-4">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Userlist;
