"use client";

import { houses } from "@/data/houses";
import { Container } from "@/components/ui/Container";
import { Header } from "@/components/layout/Header";
import { HouseGrid } from "./HouseGrid";
import { useHouseSearch } from "@/hooks/useHouseSearch";
import { House } from "@/types/house";

export function HouseStore() {
  const { filteredHouses, handleSearch } = useHouseSearch(houses);

  const handleHouseClick = (house: House) => {
    console.log("Casa selecionada:", house);
    // Aqui você pode implementar navegação para detalhes da casa
  };

  return (
    <Container>
      <Header onSearch={handleSearch} />
      <HouseGrid 
        houses={filteredHouses} 
        onHouseClick={handleHouseClick}
      />
    </Container>
  );
} 