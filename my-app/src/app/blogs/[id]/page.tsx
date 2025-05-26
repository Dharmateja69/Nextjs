"use client";
import { useParams } from "next/navigation";

const Blogdetails = () => {
  const params = useParams();
  const blog = [
    { id: 1, title: "React Tips" },
    { id: 2, title: "Next.js Routing" },
    { id: 3, title: "JavaScript ES6 Features" },
    { id: 4, title: "CSS Grid Layout" },
    { id: 5, title: "TypeScript Basics" },
  ];
  const blogId = Number(params.id);
  const blogpost = blog.find((post) => post.id === blogId);
  return (
    <div>
      <h1>{blogpost?.title}</h1>
    </div>
  );
};

export default Blogdetails;
