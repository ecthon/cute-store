"use client";
import { Cancel01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { House } from "@/types/house.type";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ProgressBar from "./progress-bar";

interface RentalModalProps {
    isOpen: boolean;
    onClose: () => void;
    house: House;
}

export default function RentalModal({ isOpen, onClose, house }: RentalModalProps) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    if (!isOpen) return null;

    const handleConfirm = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            router.push("/");
        }, 1500);
    };

    return (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
            <div className="bg-white rounded-2xl p-3 sm:p-6 w-full max-w-xs sm:max-w-md max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
                {loading && <div className="mb-3"><ProgressBar loading height="h-2" />
                </div>}
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <h2 className="text-lg sm:text-xl font-bold text-zinc-900">Alugar: {house.title}</h2>
                    <button
                        onClick={onClose}
                        className="p-2 text-zinc-600 hover:text-zinc-700 hover:bg-zinc-100 rounded-lg transition-colors cursor-pointer"
                    >
                        <HugeiconsIcon icon={Cancel01Icon} size={20} color="currentColor" strokeWidth={2} />
                    </button>
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                    <div className="bg-zinc-50 p-3 sm:p-4 rounded-lg">
                        <h3 className="font-semibold text-zinc-900 mb-1 sm:mb-2 text-base sm:text-lg">Detalhes da Reserva</h3>
                        <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                            <div className="flex justify-between">
                                <span className="text-zinc-600">Propriedade:</span>
                                <span className="font-semibold text-zinc-900 text-right">{house.title}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-zinc-600">Localização:</span>
                                <span className="font-semibold text-zinc-900 text-right">{house.location}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-zinc-600">Preço por dia:</span>
                                <span className="font-semibold text-zinc-900 text-right">R$ {house.price}</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-zinc-50 p-3 sm:p-4 rounded-lg">
                        <h3 className="font-semibold text-zinc-900 mb-1 sm:mb-2 text-base sm:text-lg">Resumo do Pagamento</h3>
                        <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                            <div className="flex justify-between">
                                <span className="text-zinc-600">Valor por dia:</span>
                                <span className="text-zinc-900 font-semibold text-right">R$ {house.price}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-zinc-600">Taxa de limpeza:</span>
                                <span className="text-zinc-900 font-semibold text-right">R$ 50,00</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-zinc-600">Taxa de serviço:</span>
                                <span className="text-zinc-900 font-semibold text-right">R$ 25,00</span>
                            </div>
                            <div className="border-t pt-2 flex justify-between font-semibold">
                                <span className="text-zinc-600">Total:</span>
                                <span className="text-zinc-900 text-right">R$ {Number(house.price) + 75}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-3 sm:pt-4">
                        <button
                            onClick={onClose}
                            className="flex-1 px-4 py-2 sm:py-3 border border-zinc-300 text-zinc-700 rounded-lg font-medium hover:bg-zinc-50 transition-colors cursor-pointer text-sm sm:text-base"
                            disabled={loading}
                        >
                            Cancelar
                        </button>
                        <button
                            className="flex-1 px-4 py-2 sm:py-3 bg-zinc-900 text-white rounded-lg font-medium hover:bg-zinc-800 transition-colors cursor-pointer text-sm sm:text-base"
                            onClick={handleConfirm}
                            disabled={loading}
                        >
                            {loading ? "Processando..." : "Confirmar Reserva"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
} 