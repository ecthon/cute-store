import { houses } from "@/data/houses";
import { Card } from "./card";
import { SearchForm } from "../search-form";

export function HouseStore() {
  return (
    <div className="flex flex-col w-full max-w-[1248px] mx-auto space-y-4 max-sm:px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
        <div className="flex flex-col">
          <h1 className="text-xl sm:text-2xl font-mono font-bold text-black">Casas</h1>
          <p className="text-md font-sans text-zinc-500">Hospede-se nos planetas mais incríveis da galáxia.</p>
        </div>
        <SearchForm />
      </div>
      
      <div className="flex flex-col w-full h-full">    
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
          {houses.map((house) => (
            <Card key={house.id} {...house} />
          ))}
        </div>
      </div>
    </div>
  );
}