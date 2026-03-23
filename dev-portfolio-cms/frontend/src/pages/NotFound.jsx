import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <div className="mb-8 text-8xl font-bold text-slate-200">404</div>
      <h1 className="text-3xl font-bold text-slate-900">Page Not Found</h1>
      <p className="mt-4 max-w-md text-slate-600">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>
      <div className="mt-8 flex gap-4">
        <Link
          to="/"
          className="rounded-xl bg-slate-900 px-6 py-3 font-medium text-white transition hover:bg-slate-700"
        >
          Go Home
        </Link>
        <Link
          to="/contact"
          className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-medium text-slate-700 transition hover:bg-slate-100"
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
