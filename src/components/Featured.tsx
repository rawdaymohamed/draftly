import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <section className="px-6 py-10 lg:px-0 lg:py-5">
      {/* Hero intro */}
      <div className="mx-auto max-w-3xl md:text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600 dark:text-indigo-400">
          Welcome to Draftly
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-5xl">
          Simple thoughts, honest stories, and notes from the dev journey.
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-300 md:text-lg">
          Hey, Rawda here 👋 I write about software development, freelancing,
          learning, and the small ideas that become meaningful stories.
        </p>
      </div>

      {/* Featured post */}
      <article className="mx-auto mt-12 grid max-w-5xl overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950 lg:grid-cols-2">
        {/* Image */}
        <div className="relative h-72 sm:h-[500px] w-full lg:h-auto">
          <Image
            src="/why-i-started.png"
            alt="Why I Started Draftly"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center gap-5 p-7 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
            Featured Post
          </p>

          <h2 className="text-2xl font-bold leading-tight text-zinc-900 dark:text-zinc-100 md:text-3xl">
            Why I Started Draftly
          </h2>

          <p className="text-base leading-7 text-zinc-600 dark:text-zinc-300">
            Draftly began as a simple place to write, share ideas, and document
            my growth as a MERN Stack and Next.js developer.
          </p>

          <button className="mt-2 w-fit cursor-pointer rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300">
            Read More
          </button>
        </div>
      </article>
    </section>
  );
};

export default Featured;
