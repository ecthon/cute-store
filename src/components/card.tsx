import { ChartUpIcon, StarIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";

interface House {
  id: number;
  title: string;
  image: string;
  price: number;
  rating: number;
  reviews: number;
}

export function Card(house: House) {
  return (
    <div key={house.id} className="group flex flex-col w-full sm:w-[280px] md:w-[300px] bg-zinc-100 cursor-pointer p-3 sm:p-2 rounded-3xl overflow-hidden">
    <div className="max-sm:h-[200px] overflow-hidden rounded-2xl">
      <Image src={house.image} alt={house.title} width={300} height={200} quality={100} className="group-hover:scale-105 transition-transform duration-500 w-full h-full max-sm:h-full sm:h-[180px] md:h-[200px] object-fill" />
    </div>
    <div className="flex flex-col w-full px-3 sm:px-2 py-5 sm:py-4 space-y-3 sm:space-y-2">
      <div className="flex w-full justify-between">
        <p className="text-base sm:text-sm font-bold text-black">{house.title}</p>
        <p className="text-base sm:text-sm font-bold text-black px-2 py-1 bg-zinc-200 rounded-full">$ {house.price}</p>
      </div>
      <div className="flex w-full gap-4 sm:gap-3">
        <div className="flex gap-2 sm:gap-1 items-center">
          <HugeiconsIcon icon={StarIcon} size={18} color="currentColor" strokeWidth={1.5} className="text-zinc-500" />
          <p className="text-sm sm:text-xs text-zinc-800">{house.rating}</p>
        </div>
        <div className="flex gap-2 sm:gap-1 items-center">
          <HugeiconsIcon icon={ChartUpIcon} size={18} color="currentColor" strokeWidth={1.5} className="text-zinc-500" />
          <p className="text-sm sm:text-xs text-zinc-800">{house.reviews}</p>
        </div>
      </div>
    </div>
  </div>
  );
}