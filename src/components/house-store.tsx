import { ChartUpIcon, StarIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";

export function HouseStore() {
  return (
    <div className="flex flex-col w-full h-full">    
      <div className="flex flex-wrap justify-center gap-4 w-[1248px] max-w-full mx-auto">
        <div className="group flex flex-col w-full sm:w-[280px] md:w-[300px] bg-zinc-50 cursor-pointer p-2 rounded-3xl overflow-hidden  ">
          <div className="overflow-hidden rounded-2xl">
            <Image src="/02.jpeg" alt="Image" width={100} height={100} quality={100} className="group-hover:scale-105 transition-transform duration-500 flex w-full h-[150px] sm:h-[180px] md:h-[200px] bg-[url('/02.jpeg')] bg-cover bg-center" />
          </div>
          <div className="flex flex-col w-full px-2 py-4 space-y-2">
            <div className="flex w-full justify-between">
              <p className="text-sm sm:text-md font-bold text-black">Title here icon</p>
              <p className="text-sm sm:text-md font-bold text-black">R$100</p>
            </div>
            <div className="flex w-full gap-3">
                <div className="flex gap-1 items-center">
                <HugeiconsIcon icon={StarIcon} size={16} color="currentColor" strokeWidth={1.5} className="text-zinc-500" />
                  <p className="text-xs sm:text-sm text-zinc-500">5.0</p>
                </div>
                <div className="flex gap-1 items-center">
                  <HugeiconsIcon icon={ChartUpIcon} size={16} color="currentColor" strokeWidth={1.5} className="text-zinc-500" />
                  <p className="text-xs sm:text-sm text-zinc-500">598</p>
                </div>
            </div>
          </div>
        </div>
        <div className="group flex flex-col w-full sm:w-[280px] md:w-[300px] cursor-pointer p-2 rounded-3xl overflow-hidden bg-zinc-50">
          <div className="overflow-hidden rounded-2xl">
            <Image src="/03.jpeg" alt="Image" width={100} height={100} quality={100} className="group-hover:scale-105 transition-transform duration-500 flex w-full h-[150px] sm:h-[180px] md:h-[200px] bg-[url('/03.jpeg')] bg-cover bg-center" />
          </div>
          <div className="flex flex-col w-full px-2 py-4 space-y-2">
            <div className="flex w-full justify-between">
              <p className="text-sm sm:text-md font-bold text-black">Title here icon</p>
              <p className="text-sm sm:text-md font-bold text-black">R$100</p>
            </div>
            <div className="flex w-full gap-3">
                <div className="flex gap-1 items-center">
                <HugeiconsIcon icon={StarIcon} size={16} color="currentColor" strokeWidth={1.5} className="text-zinc-500" />
                  <p className="text-xs sm:text-sm text-zinc-800">5.0</p>
                </div>
                <div className="flex gap-1 items-center">
                  <HugeiconsIcon icon={ChartUpIcon} size={16} color="currentColor" strokeWidth={1.5} className="text-zinc-500" />
                  <p className="text-xs sm:text-sm text-zinc-800">598</p>
                </div>
            </div>
          </div>
        </div>
        <div className="group flex flex-col w-full sm:w-[280px] md:w-[300px] bg-zinc-50 cursor-pointer p-2 rounded-3xl overflow-hidden  ">
          <div className="overflow-hidden rounded-2xl">
            <Image src="/04.jpeg" alt="Image" width={100} height={100} quality={100} className="group-hover:scale-105 transition-transform duration-500 flex w-full h-[150px] sm:h-[180px] md:h-[200px] bg-[url('/04.jpeg')] bg-cover bg-center" />
          </div>
          <div className="flex flex-col w-full px-2 py-4 space-y-2">
            <div className="flex w-full justify-between">
              <p className="text-sm sm:text-md font-bold text-black">Title here icon</p>
              <p className="text-sm sm:text-md font-bold text-black">R$100</p>
            </div>
            <div className="flex w-full gap-3">
                <div className="flex gap-1 items-center">
                <HugeiconsIcon icon={StarIcon} size={16} color="currentColor" strokeWidth={1.5} className="text-zinc-500" />
                  <p className="text-xs sm:text-sm text-zinc-500">5.0</p>
                </div>
                <div className="flex gap-1 items-center">
                  <HugeiconsIcon icon={ChartUpIcon} size={16} color="currentColor" strokeWidth={1.5} className="text-zinc-500" />
                  <p className="text-xs sm:text-sm text-zinc-500">598</p>
                </div>
            </div>
          </div>
        </div>
        <div className="group flex flex-col w-full sm:w-[280px] md:w-[300px] bg-zinc-50 cursor-pointer p-2 rounded-3xl overflow-hidden  ">
          <div className="overflow-hidden rounded-2xl">
            <Image src="/01.jpeg" alt="Image" width={100} height={100} quality={100} className="group-hover:scale-105 transition-transform duration-500 flex w-full h-[150px] sm:h-[180px] md:h-[200px] bg-[url('/01.jpeg')] bg-cover bg-center" />
          </div>
          <div className="flex flex-col w-full px-2 py-4 space-y-2">
            <div className="flex w-full justify-between">
              <p className="text-sm sm:text-md font-bold text-black">Title here icon</p>
              <p className="text-sm sm:text-md font-bold text-black">R$100</p>
            </div>
            <div className="flex w-full gap-3">
                <div className="flex gap-1 items-center">
                <HugeiconsIcon icon={StarIcon} size={16} color="currentColor" strokeWidth={1.5} className="text-zinc-500" />
                  <p className="text-xs sm:text-sm text-zinc-500">5.0</p>
                </div>
                <div className="flex gap-1 items-center">
                  <HugeiconsIcon icon={ChartUpIcon} size={16} color="currentColor" strokeWidth={1.5} className="text-zinc-500" />
                  <p className="text-xs sm:text-sm text-zinc-500">598</p>
                </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}