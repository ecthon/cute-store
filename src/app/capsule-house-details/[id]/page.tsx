"use client";
import { houses } from "@/data/houses";
import { ArrowLeftIcon, ArrowRightIcon, Bathtub01Icon, BedIcon, Car01FreeIcons, LocationIcon, StarIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { use } from "react";

export default function CapsuleHouseDetails({ params }: { params: Promise<{ id: string }> }) { 
    const router = useRouter();
    const { id } = use(params); // Use React.use() to unwrap the Promise
    const house = houses.find((house) => house.id === Number(id));

    if (!house) {
        return <div>House not found</div>;
    }

    return (
        <div className="flex flex-col gap-4 w-full max-w-[1248px] mx-auto p-4 sm:p-6 md:p-8">
            <div className="flex items-center justify-between">
                <button onClick={() => router.back()} className="flex items-center gap-2 bg-transparent hover:bg-zinc-100 transition-all duration-300 text-zinc-900 px-4 py-2 rounded-lg font-bold cursor-pointer">
                    <HugeiconsIcon icon={ArrowLeftIcon} size={18} color="currentColor" strokeWidth={2} className="text-zinc-500" />
                    Voltar
                </button>
            </div>

            <div className="flex flex-col md:flex-row w-full max-w-[1248px] mx-auto gap-6 md:gap-8 border-2 border-zinc-200 p-2 sm:p-4 rounded-4xl">
                <div className="flex w-full md:w-1/2 items-center justify-center rounded-2xl overflow-hidden bg-zinc-100 min-h-[220px] md:min-h-[320px]">
                    <Image src={house.image} alt={house.title} width={500} height={500} quality={100} className="object-cover w-full h-full max-h-[300px] md:max-h-[500px] max-md:rounded-3xl" />
                </div>

                <div className="flex justify-center flex-col w-full md:w-1/2 gap-4 mt-4 md:mt-0">
                    <div className="flex flex-col">
                        <div className="flex flex-wrap items-center gap-2">
                            <h1 className="text-xl md:text-2xl font-bold text-zinc-900">{house.title}</h1>
                            <div className="flex items-center gap-2">
                                <HugeiconsIcon icon={StarIcon} size={18} strokeWidth={2} className="text-orange-400 fill-orange-300" />
                                <p className="text-sm font-semibold text-zinc-500">5.0</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-1">
                            <HugeiconsIcon icon={LocationIcon} size={18} color="currentColor" strokeWidth={2} className="text-zinc-500" />
                            <p className="text-sm font-semibold text-zinc-500">{house.location}</p>
                        </div>
                    </div>
                    <div className="flex gap-4 flex-wrap">
                        <div className="flex items-center gap-2">
                            <HugeiconsIcon icon={BedIcon} size={18} color="currentColor" strokeWidth={2} className="text-zinc-500" />
                            <p className="text-sm font-semibold text-zinc-900">{house.bedrooms}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <HugeiconsIcon icon={Bathtub01Icon} size={18} color="currentColor" strokeWidth={2} className="text-zinc-500" />
                            <p className="text-sm font-semibold text-zinc-900">{house.bathrooms}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <HugeiconsIcon icon={Car01FreeIcons} size={18} color="currentColor" strokeWidth={2} className="text-zinc-500" />
                            <p className="text-sm font-semibold text-zinc-900">{house.garageSpots}</p>
                        </div>
                    </div>
                    <p className="text-sm font-semibold text-zinc-500">{house.description}</p>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-zinc-100 p-4 rounded-lg mt-2 max-md:rounded-3xl">
                        <p className="text-xl md:text-2xl font-bold text-zinc-900">R$ {house.price} <span className="text-sm font-semibold text-zinc-500">/ dia</span></p>
                        <button className="flex items-center gap-2 bg-zinc-900 text-white px-4 py-2 rounded-lg font-bold cursor-pointer w-full sm:w-auto justify-center">
                            <HugeiconsIcon icon={ArrowRightIcon} size={18} color="currentColor" strokeWidth={2} className="text-white" />
                            Alugar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}