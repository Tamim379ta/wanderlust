import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-8xl md:text-9xl font-extrabold tracking-widest">
          404
        </h1>

        <div className="w-24 h-1 bg-white mx-auto my-6 rounded-full"></div>

        <h2 className="text-2xl md:text-4xl font-semibold mb-4">
          Page Not Found
        </h2>

        <p className="text-gray-400 max-w-md mx-auto mb-8">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        <Link
          href="/"
          className="inline-block border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;