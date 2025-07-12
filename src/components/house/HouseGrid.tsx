"use client";

import { HouseGridProps } from "@/types/house";
import { HouseCard } from "./HouseCard";

export function HouseGrid({ houses, onHouseClick }: HouseGridProps) {
  return (
    <div className="flex flex-col w-full h-full">    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
        {houses.map((house) => (
          <HouseCard 
            key={house.id} 
            {...house} 
            onClick={() => onHouseClick?.(house)}
          />
        ))}
      </div>
    </div>
  );
} 