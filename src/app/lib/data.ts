export interface Category {
  title: string;
  imageURL: string;
  color: string;
  query: string;
}
export const categories: Category[] = [
  {
    title: "MERN Stack",
    imageURL: "/categories/mern.png",
    color:
      "bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-900 dark:hover:bg-emerald-950/70",
    query: "mern-stack",
  },
  {
    title: "Next.js",
    imageURL: "/categories/nextjs.png",
    color:
      "bg-zinc-50 text-zinc-900 border-zinc-200 hover:bg-zinc-100 dark:bg-zinc-900/60 dark:text-zinc-100 dark:border-zinc-800 dark:hover:bg-zinc-800/80",
    query: "nextjs",
  },
  {
    title: "Testing",
    imageURL: "/categories/testing.png",
    color:
      "bg-violet-50 text-violet-800 border-violet-200 hover:bg-violet-100 dark:bg-violet-950/40 dark:text-violet-300 dark:border-violet-900 dark:hover:bg-violet-950/70",
    query: "testing",
  },
  {
    title: "Freelancing",
    imageURL: "/categories/freelance.png",
    color:
      "bg-amber-50 text-amber-800 border-amber-200 hover:bg-amber-100 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-900 dark:hover:bg-amber-950/70",
    query: "freelancing",
  },
];