"use client";

import Image from "next/image";
import { ChartUpIcon, StarIcon } from "@hugeicons/core-free-icons";
import { HouseCardProps } from "@/types/house";
import { Icon } from "@/components/ui/Icon";
import { formatPrice, formatRating, formatReviews } from "@/utils/formatters";

export function HouseCard({ 
  id, 
  title, 
  image, 
  price, 
  rating, 
  reviews, 
  onClick 
}: HouseCardProps) {
  return (
    <div 
      key={id} 
      className="group flex flex-col w-full sm:w-[280px] md:w-[300px] bg-zinc-100 cursor-pointer p-3 sm:p-2 rounded-3xl overflow-hidden hover:shadow-lg transition-all duration-300"
      onClick={onClick}
    >
      <div className="max-sm:h-[200px] overflow-hidden rounded-2xl">
        <Image 
          src={image} 
          alt={title} 
          width={300} 
          height={200} 
          quality={100} 
          className="group-hover:scale-105 transition-transform duration-500 w-full h-full max-sm:h-full sm:h-[180px] md:h-[200px] object-cover" 
        />
      </div>
      <div className="flex flex-col w-full px-3 sm:px-2 py-5 sm:py-4 space-y-3 sm:space-y-2">
        <div className="flex w-full justify-between">
          <p className="text-base sm:text-sm font-bold text-black truncate">{title}</p>
          <p className="text-base sm:text-sm font-bold text-black px-2 py-1 bg-zinc-200 rounded-full whitespace-nowrap">
            {formatPrice(price)}
          </p>
        </div>
        <div className="flex w-full gap-4 sm:gap-3">
          <div className="flex gap-2 sm:gap-1 items-center">
            <Icon icon={StarIcon} className="text-zinc-500" />
            <p className="text-sm sm:text-xs text-zinc-800">{formatRating(rating)}</p>
          </div>
          <div className="flex gap-2 sm:gap-1 items-center">
            <Icon icon={ChartUpIcon} className="text-zinc-500" />
            <p className="text-sm sm:text-xs text-zinc-800">{formatReviews(reviews)}</p>
          </div>
        </div>
      </div>
    </div>
  );
} 