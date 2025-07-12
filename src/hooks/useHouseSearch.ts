"use client";

import { useState, useMemo } from "react";
import { House } from "@/types/house";

export function useHouseSearch(houses: House[]) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredHouses = useMemo(() => {
    if (!searchQuery.trim()) {
      return houses;
    }

    const query = searchQuery.toLowerCase();
    return houses.filter(house => 
      house.title.toLowerCase().includes(query) ||
      house.price.toString().includes(query)
    );
  }, [houses, searchQuery]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return {
    searchQuery,
    filteredHouses,
    handleSearch,
  };
} 