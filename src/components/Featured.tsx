import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <section className="flex flex-col gap-12">
      {/* Hero title */}
      <div className="px-6 lg:px-0">
        <h1 className="max-w-4xl text-4xl font-light leading-tight tracking-tight text-zinc-900 dark:text-zinc-100 md:text-5xl lg:text-6xl">
          <span className="font-bold">Hey, Rawda here 👋</span> Welcome to
          Draftly — where simple thoughts become stories.
        </h1>
      </div>

      {/* Featured post */}
      <article className="grid gap-8 lg:grid-cols-2 lg:items-center">
        {/* Image container */}
        <div className="relative h-[320px] w-full overflow-hidden md:h-[500px] lg:h-[460px] lg:rounded-2xl">
          <Image
            src="/why-i-started.png"
            alt="Why I Started Draftly"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Text container */}
        <div className="flex flex-col gap-5 px-6 lg:px-0 lg:pr-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-500">
            Featured Post
          </p>

          <h2 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 dark:text-zinc-100 md:text-4xl">
            Why I Started Draftly
          </h2>

          <p className="max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-300 md:text-lg">
            I started Draftly as a freelance MERN Stack and Next.js developer to
            create a simple space for writing, sharing ideas, and documenting my
            journey in software development.
          </p>

          <button className="w-fit rounded-full cursor-pointer bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700">
            Read More
          </button>
        </div>
      </article>
    </section>
  );
};

export default Featured;
