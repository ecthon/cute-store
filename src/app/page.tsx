import { Heading } from "@/components/home/heading";
import { HouseStore } from "@/components/houses/house-store";


export default function Home() {
  return (
    <div className="flex flex-col space-y-10">
      <Heading />
      <HouseStore />
    </div>
  );
}
