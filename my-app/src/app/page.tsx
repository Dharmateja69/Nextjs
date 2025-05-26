import Link from "next/link";

const mainpage = () => {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
      <Link href={"/user"}>User Profile</Link>
    </h1>
  );
};

export default mainpage;
