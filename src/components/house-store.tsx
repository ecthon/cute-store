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

const houses: House[] = [
  {
    id: 1,
    title: "House 1",
    image: "/01.jpeg",
    price: 100,
    rating: 5.0,
    reviews: 700,
  },
  {
    id: 2,
    title: "House 2",
    image: "/02.jpeg",
    price: 100,
    rating: 5.0,
    reviews: 278,
  },    
  {
    id: 3,
    title: "House 3",
    image: "/03.jpeg",
    price: 100,
    rating: 5.0,
    reviews: 498,
  },        
  {
    id: 4,
    title: "House 4",
    image: "/04.jpeg",
    price: 100,
    rating: 5.0,
    reviews: 722,
  },    
  {
    id: 5,
    title: "House 5",
    image: "/05.jpeg",
    price: 100,
    rating: 5.0,
    reviews: 578,
  },
  {
    id: 6,
    title: "House 6",
    image: "/06.jpeg",
    price: 100,
    rating: 5.0,
    reviews: 478,
  },
];

export function HouseStore() {
  return (
    <div className="flex flex-col w-full h-full">    
      <div className="flex flex-wrap gap-4 max-sm:px-4 w-[1248px] max-w-full mx-auto">
        {houses.map((house) => (
          <div key={house.id} className="group flex flex-col w-full sm:w-[280px] md:w-[300px] bg-zinc-50 cursor-pointer p-3 sm:p-2 rounded-3xl overflow-hidden">
            <div className="max-sm:h-[200px] overflow-hidden rounded-2xl">
              <Image src={house.image} alt={house.title} width={100} height={100} quality={100} className="group-hover:scale-105 transition-transform duration-500 flex w-full h-[150px] max-sm:h-full sm:h-[180px] md:h-[200px] bg-[url('/02.jpeg')] bg-cover bg-center" />
            </div>
            <div className="flex flex-col w-full px-3 sm:px-2 py-5 sm:py-4 space-y-3 sm:space-y-2">
              <div className="flex w-full justify-between">
                <p className="text-base sm:text-sm font-bold text-black">{house.title}</p>
                <p className="text-base sm:text-sm font-bold text-black">R${house.price}</p>
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
        ))}
      </div>
    </div>
  );
}