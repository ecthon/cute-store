import { Card } from "./card";
import { SearchForm } from "./search-form";

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
    price: 75,
    rating: 5.0,
    reviews: 700,
  },
  {
    id: 2,
    title: "House 2",
    image: "/02.jpeg",
    price: 150,
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
    price: 220,
    rating: 5.0,
    reviews: 722,
  },    
  {
    id: 5,
    title: "House 5",
    image: "/05.jpeg",
    price: 355,
    rating: 5.0,
    reviews: 578,
  },
  {
    id: 6,
    title: "House 6",
    image: "/06.jpeg",
    price: 315,
    rating: 5.0,
    reviews: 478,
  },
];

export function HouseStore() {
  return (
    <div className="flex flex-col w-full max-w-[1248px] mx-auto space-y-4 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
        <h1 className="text-xl sm:text-2xl font-bold text-black">Houses</h1>
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