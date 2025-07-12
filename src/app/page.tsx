import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { ChartUpIcon, StarIcon, StartUpIconFreeIcons } from "@hugeicons/core-free-icons";


export default function Home() {
  return (
    <div className="flex flex-col w-full h-full">    
      <div className="flex flex-wrap justify-center gap-4 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="group flex flex-col w-full sm:w-[280px] md:w-[300px] bg-white cursor-pointer p-2 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
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
        <div className="group flex flex-col w-full sm:w-[280px] md:w-[300px] bg-white cursor-pointer p-2 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
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
                  <p className="text-xs sm:text-sm text-zinc-500">5.0</p>
                </div>
                <div className="flex gap-1 items-center">
                  <HugeiconsIcon icon={ChartUpIcon} size={16} color="currentColor" strokeWidth={1.5} className="text-zinc-500" />
                  <p className="text-xs sm:text-sm text-zinc-500">598</p>
                </div>
            </div>
          </div>
        </div>
        <div className="group flex flex-col w-full sm:w-[280px] md:w-[300px] bg-white cursor-pointer p-2 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
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
        <div className="group flex flex-col w-full sm:w-[280px] md:w-[300px] bg-white cursor-pointer p-2 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
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
