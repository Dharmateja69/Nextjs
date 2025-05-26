import Link from "next/link";

const navbar = () => {
  return (
    <div>
      <Link href="/Navbar/home">Home</Link>
      <Link href="/Navbar/about">about</Link>
    </div>
  );
};

export default navbar;
