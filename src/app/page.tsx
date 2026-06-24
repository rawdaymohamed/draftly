import CardList from "@/components/CardList";
import CategoryList from "@/components/CategoryList";
import Featured from "@/components/Featured";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 mt-3 md:mt-8">
      <Featured />
      <CategoryList />
      <div className="">
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
