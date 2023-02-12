import { Link } from 'react-router-dom';

function IndexPage() {
  return (
    <div className="p-10">
      <h1 className="py-2 text-5xl font-bold text-slate-900">
        Welcome to practice tab navigation site!
      </h1>
      <h2 className="py-1 text-3xl font-semibold text-slate-600">
        Simple practice project for url-based tab routing using react-router@v6
      </h2>
      <div className="mt-10 flex items-center space-x-4">
        <Link
          to="/docs"
          className="rounded-full bg-blue-700 px-4 py-3 font-bold text-white transition-colors hover:bg-blue-900"
        >
          See example
        </Link>
      </div>
    </div>
  );
}

export default IndexPage;
