"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

type UserType = {
  id: number;
  name: string;
  email: string;
  username: string;
  phone: string;
  website: string;
  address: {
    city: string;
  };
  company: {
    name: string;
  };
};

const User = () => {
  const [users, setstate] = useState<UserType[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setstate(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      User data
      {users.map((user) => (
        <div key={user.id} className="p-4 border mb-2 rounded shadow">
          <Link key={user.id} href={`/user/${user.id}`}>
            details
          </Link>
          <h3 className="text-lg font-bold">{user.name}</h3>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Username:</strong> {user.username}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
          <p>
            <strong>Website:</strong> {user.website}
          </p>
          <p>
            <strong>City:</strong> {user.address.city}
          </p>
          <p>
            <strong>Company:</strong> {user.company.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default User;
