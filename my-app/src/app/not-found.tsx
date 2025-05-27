// app/not-found.tsx
export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-8">
      <h1 className="text-4xl font-bold text-red-500">404 - Page Not Found</h1>
      <p className="text-lg mt-4">
        Oops! The page you're looking for doesn't exist.
      </p>
      <a
        href="/"
        className="mt-6 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Go Home
      </a>
    </div>
  );
}
