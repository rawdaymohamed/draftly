import Image from "next/image";
import Link from "next/link";

const PostCard = () => {
  return (
    <article className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:border-indigo-200 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-indigo-900">
      <div className="flex flex-col md:flex-row">
        {/* Image */}
        <Link
          href="/"
          className="relative block aspect-[16/9] w-full overflow-hidden bg-zinc-100 md:aspect-auto md:h-56 md:w-64 md:shrink-0 lg:w-72 dark:bg-zinc-900"
        >
          <Image
            src="/blog/mern-blog.png"
            fill
            alt="MERN blog"
            sizes="(max-width: 768px) 100vw, 288px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        {/* Content */}
        <div className="flex min-w-0 flex-1 flex-col justify-center p-5 sm:p-6">
          <div className="mb-3 flex flex-wrap items-center gap-3 text-sm">
            <time
              dateTime="2026-06-25"
              className="text-zinc-500 dark:text-zinc-400"
            >
              Jun 25, 2026
            </time>

            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
              MERN Stack
            </span>
          </div>

          <Link href="/">
            <h3 className="line-clamp-2 text-xl font-bold leading-snug text-zinc-950 transition-colors hover:text-indigo-600 dark:text-zinc-100 dark:hover:text-indigo-400">
              Getting Started with the MERN Stack: Build Modern Web Apps with
              MongoDB, Express, React, and Node.js
            </h3>
          </Link>

          <p className="mt-3 line-clamp-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            The MERN stack is one of the most popular choices for building
            full-stack JavaScript applications. In this article, we’ll explore
            what MongoDB, Express.js, React, and Node.js...
          </p>

          <Link
            href="/"
            className="mt-5 inline-flex w-fit items-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
          >
            Read More
          </Link>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
