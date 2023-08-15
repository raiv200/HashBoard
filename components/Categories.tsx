"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { categoryFilters } from "@/constant";

const Categories = () => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const category = searchParams.get("category");

  const handleTags = (item: string) => {
    router.push(`${pathName}?category=${item}`);
  };

  return (
    <div className="flexBetween md:justify-center w-full gap-5 flex-wrap my-3 ">
      <ul className="flex gap-2 overflow-auto py-2">
        {categoryFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => handleTags(filter)}
            className={`${
              category === filter
                ? "text-black font-semibold bg-primary-cyan "
                : "font-medium text-black bg-white"
            } px-4 py-2 rounded-lg capitalize whitespace-nowrap  hover:bg-cyan-200`}
          >
            {filter}
          </button>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
