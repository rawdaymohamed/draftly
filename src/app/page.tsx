import CardList from "@/components/CardList";
import CategoryList from "@/components/CategoryList";
import Featured from "@/components/Featured";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 mt-5">
      <Featured />
      <CategoryList />
      <div className="flex flex-col gap-10 px-6 py-10 lg:flex-row lg:items-start lg:px-0 lg:py-5">
        <CardList className="w-full lg:flex-[5]" />
        <Menu className="w-full lg:flex-[2]" />
      </div>
    </div>
  );
}
