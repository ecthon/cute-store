"use client";
import { houses } from "@/data/houses";
import { ArrowLeftIcon, ArrowRightIcon, Bathtub01Icon, BedIcon, Car01FreeIcons, LocationIcon, StarIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CapsuleHouseDetails({ params }: { params: { id: string } }) { 
    const router = useRouter();
    const { id } = params;
    const house = houses.find((house) => house.id === Number(id));

    if (!house) {
        return <div>House not found</div>;
    }

    return (
        <div className="flex flex-col gap-4 w-full max-w-[1248px] mx-auto p-8">
            <div className="flex items-center justify-between">
                <button onClick={() => router.back()} className="flex items-center gap-2 bg-transparent hover:bg-zinc-100 transition-all duration-300 text-zinc-900 px-4 py-2 rounded-lg font-bold cursor-pointer">
                    <HugeiconsIcon icon={ArrowLeftIcon} size={18} color="currentColor" strokeWidth={2} className="text-zinc-500" />
                    Voltar
                </button>
            </div>

            <div className="flex w-full max-w-[1248px] mx-auto gap-8 border-2 border-zinc-200 p-4 rounded-4xl">
                <div className="flex w-1/2 items-center justify-center rounded-2xl overflow-hidden bg-zinc-100">
                    <Image src={house.image} alt={house.title} width={500} height={500} quality={100} className="object-cover w-full h-full" />
                </div>

                <div className="flex justify-center flex-col w-1/2 gap-4">
                    <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                            <h1 className="text-2xl font-bold text-zinc-900">{house.title}</h1>
                            <div className="flex items-center gap-2">
                                <HugeiconsIcon icon={StarIcon} size={18} strokeWidth={2} className="text-orange-400 fill-orange-300" />
                                <p className="text-sm font-semibold text-zinc-500">5.0</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1">
                            <HugeiconsIcon icon={LocationIcon} size={18} color="currentColor" strokeWidth={2} className="text-zinc-500" />
                            <p className="text-sm font-semibold text-zinc-500">{house.location}</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
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
                    <div className="flex items-center justify-between gap-4 bg-zinc-100 p-4 rounded-lg">
                        <p className="text-2xl font-bold text-zinc-900">R$ {house.price} <span className="text-sm font-semibold text-zinc-500">/ dia</span></p>
                        <button className="flex items-center gap-2 bg-zinc-900 text-white px-4 py-2 rounded-lg font-bold cursor-pointer">
                            <HugeiconsIcon icon={ArrowRightIcon} size={18} color="currentColor" strokeWidth={2} className="text-white" />
                            Alugar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}