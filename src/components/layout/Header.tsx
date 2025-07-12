"use client";

import { HouseSearch } from "@/components/house/HouseSearch";

interface HeaderProps {
  title?: string;
  onSearch: (query: string) => void;
}

export function Header({ title = "Houses", onSearch }: HeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
      <h1 className="text-xl sm:text-2xl font-bold text-black">{title}</h1>
      <HouseSearch onSearch={onSearch} />
    </div>
  );
} 