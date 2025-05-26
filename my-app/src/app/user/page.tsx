import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">User Directory</h1>
      <div className="space-y-2">
        <Link href="/user/john-doe" className="text-blue-600 hover:underline">
          View John Doe's Profile
        </Link>
        <Link href="/user/jane-smith" className="text-blue-600 hover:underline">
          View Jane Smith's Profile
        </Link>
      </div>
    </main>
  );
}
