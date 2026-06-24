import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <main className="flex-1 flex items-center justify-center px-4">
      <section className="text-center max-w-md">
        <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
          404
        </p>

        <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          Page not found
        </h1>

        <p className="text-slate-600 dark:text-slate-400 mb-6">
          Looks like this draft got lost. The page you are looking for does not
          exist or may have been moved.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
        >
          Back to Draftly
        </Link>
      </section>
    </main>
  );
};

export default NotFound;
