import Pagination from "./Pagination";
import PostCard from "./PostCard";

const CardList = ({ className }: { className?: string }) => {
  return (
    <section className={className}>
      <h2 className="mb-6 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-3xl">
        Recent Posts
      </h2>

      <div className="flex flex-col gap-6">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>

      <Pagination />
    </section>
  );
};

export default CardList;
