import Image from "next/image";
import Link from "next/link";

const popularPosts = [
  {
    id: 1,
    title: "Getting Started with MERN",
    description:
      "The MERN stack is one of the most popular choices for building modern full-stack apps...",
    category: "MERN Stack",
    author: "Rawda Yasser",
    date: "Jun 25, 2026",
    image: "/blog/mern-blog1.png",
    href: "/",
  },
  {
    id: 2,
    title: "Why Next.js Is Great for SaaS Apps",
    description:
      "Learn why Next.js is a powerful choice for building fast, scalable SaaS products...",
    category: "Next.js",
    author: "Rawda Yasser",
    date: "Jun 25, 2026",
    image: "/blog/mern-blog1.png",
    href: "/",
  },
  {
    id: 3,
    title: "Testing React Apps the Practical Way",
    description:
      "A beginner-friendly guide to testing components, user flows, and API behavior...",
    category: "Testing",
    author: "Rawda Yasser",
    date: "Jun 25, 2026",
    image: "/blog/mern-blog1.png",
    href: "/",
  },
  {
    id: 4,
    title: "Testing React Apps the Practical Way",
    description: "A beginner-friendly guide to Freelancing...",
    category: "Freelancing",
    author: "Rawda Yasser",
    date: "Jun 25, 2026",
    image: "/blog/mern-blog1.png",
    href: "/",
  },
];

const Menu = ({ className }: { className?: string }) => {
  return (
    <aside className={`${className ?? ""} mb-6 lg:sticky lg:top-24`}>
      {/* Header: same visual height as Recent Posts */}
      <div className="mb-6 flex items-center justify-between gap-4">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-3xl">
          Most Popular
        </h2>

        <span className="shrink-0 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600 dark:bg-indigo-950 dark:text-indigo-300">
          What&apos;s Hot?
        </span>
      </div>

      <div className="flex flex-col gap-4">
        {popularPosts.map((post, index) => (
          <Link
            key={post.id}
            href={post.href}
            className="group flex gap-4 rounded-2xl border border-transparent p-2 transition hover:border-zinc-200 hover:bg-white hover:shadow-sm dark:hover:border-zinc-800 dark:hover:bg-zinc-950"
          >
            {/* Image */}
            <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-900">
              <Image
                src={post.image}
                fill
                alt={post.title}
                sizes="112px"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Text */}
            <div className="min-w-0 flex-1">
              <div className="mb-2 flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-zinc-100 text-[11px] font-bold text-zinc-600 dark:bg-zinc-900 dark:text-zinc-300">
                  {index + 1}
                </span>

                <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                  {post.category}
                </span>
              </div>

              <h3 className="line-clamp-2 text-sm font-bold leading-snug text-zinc-900 transition group-hover:text-indigo-600 dark:text-zinc-100 dark:group-hover:text-indigo-400">
                {post.title}
              </h3>

              <p className="mt-1 line-clamp-2 text-xs leading-5 text-zinc-500 dark:text-zinc-400">
                {post.description}
              </p>

              <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                <span>{post.author}</span>
                <span className="h-1 w-1 rounded-full bg-zinc-400" />
                <time>{post.date}</time>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Menu;
