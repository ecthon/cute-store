import { Heading } from "@/components/home/heading";
import { HouseStore } from "@/components/houses/house-store";
import { Reservation } from "@/components/reservation";


export default function Home() {
  return (
    <div className="flex flex-col space-y-10">
      <Heading />
      <HouseStore />
      <Reservation />
    </div>
  );
}
