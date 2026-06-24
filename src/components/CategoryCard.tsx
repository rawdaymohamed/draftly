import { Category } from "@/app/lib/data";
import Image from "next/image";
import Link from "next/link";

const CategoryCard = ({ category }: { category: Category }) => {
  return (
    <Link
      href={`/blog?cat=${category.query}`}
      className={`
    ${category.color}
    flex items-center gap-3 rounded-lg px-4 py-3
    shadow-sm transition-all duration-300
    hover:-translate-y-1 hover:shadow-md
  `}
    >
      <Image
        src={category.imageURL}
        alt={category.title}
        width={36}
        height={36}
        className="rounded-full object-cover"
      />

      <span className="text-sm font-semibold md:text-base">
        {category.title}
      </span>
    </Link>
  );
};

export default CategoryCard;
