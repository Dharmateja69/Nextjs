import Link from "next/link";

const mainpage = () => {
  return (
    <h1 className="text-3xl font-bold underline">
      <Link href="/about">Go to About Page</Link>
      <br />
      <Link href="/portfolio">Go to Contact Page</Link>
    </h1>
  );
};

export default mainpage;
