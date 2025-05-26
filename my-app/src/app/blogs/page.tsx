import Link from "next/link";

const Blogs = () => {
  const blog = [
    { id: 1, title: "React Tips" },
    { id: 2, title: "Next.js Routing" },
    { id: 3, title: "JavaScript ES6 Features" },
    { id: 4, title: "CSS Grid Layout" },
    { id: 5, title: "TypeScript Basics" },
  ];
  return (
    <div>
      {" "}
      <h1>📝 Blog</h1>
      <ul>
        {blog.map((post) => (
          <li key={post.id}>
            <Link href={`/blogs/${post.id}`}>
              <h1>{post.title}</h1>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blogs;
