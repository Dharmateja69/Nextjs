// app/user/[...slug]/page.tsx or /pages/user/[...slug].tsx (depending on routing system)

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    city: string;
  };
  phone: string;
  website: string;
  company: {
    name: string;
  };
};

const UserProfile = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  const [id] = slug;

  // Fetch user data
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();

  // Find user by id
  const user = users.find((user) => user.id === +id);

  if (!user) {
    return <div>User not found.</div>;
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{user.name}</h1>
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
        <strong>City:</strong> {user.address.city}
      </p>
      <p>
        <strong>Company:</strong> {user.company.name}
      </p>
      <p>
        <strong>Website:</strong> {user.website}
      </p>
    </div>
  );
};

export default UserProfile;
