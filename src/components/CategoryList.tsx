import CategoryCard from "./CategoryCard";
import { categories } from "@/app/lib/data";
const CategoryList = () => {
  return (
    <section className="px-6 lg:px-0">
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-500">
          Browse Topics
        </p>

        <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-3xl">
          Explore Draftly
        </h2>
      </div>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <li className="flex-1" key={category.title}>
            <CategoryCard category={category} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CategoryList;
