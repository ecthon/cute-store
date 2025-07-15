"use client";
import { Cancel01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { House } from "@/types/house.type";

interface RentalModalProps {
    isOpen: boolean;
    onClose: () => void;
    house: House;
}

export default function RentalModal({ isOpen, onClose, house }: RentalModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold text-zinc-900">Alugar: {house.title}</h2>
                    <button
                        onClick={onClose}
                        className="p-2 text-zinc-600 hover:text-zinc-700 hover:bg-zinc-100 rounded-lg transition-colors cursor-pointer"
                    >
                        <HugeiconsIcon icon={Cancel01Icon} size={20} color="currentColor" strokeWidth={2} />
                    </button>
                </div>
                
                <div className="space-y-4">
                    <div className="bg-zinc-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-zinc-900 mb-2">Detalhes da Reserva</h3>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span className="text-zinc-600">Propriedade:</span>
                                <span className="font-semibold text-zinc-900">{house.title}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-zinc-600">Localização:</span>
                                <span className="font-semibold text-zinc-900">{house.location}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-zinc-600">Preço por dia:</span>
                                <span className="font-semibold text-zinc-900">R$ {house.price}</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-zinc-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-zinc-900 mb-2">Resumo do Pagamento</h3>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span className="text-zinc-600">Valor por dia:</span>
                                <span className="text-zinc-900 font-semibold">R$ {house.price}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-zinc-600">Taxa de limpeza:</span>
                                <span className="text-zinc-900 font-semibold">R$ 50,00</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-zinc-600">Taxa de serviço:</span>
                                <span className="text-zinc-900 font-semibold">R$ 25,00</span>
                            </div>
                            <div className="border-t pt-2 flex justify-between font-semibold">
                                <span className="text-zinc-600">Total:</span>
                                <span className="text-zinc-900">R$ {Number(house.price) + 75}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-3 pt-4">
                        <button
                            onClick={onClose}
                            className="flex-1 px-4 py-3 border border-zinc-300 text-zinc-700 rounded-lg font-medium hover:bg-zinc-50 transition-colors cursor-pointer"
                        >
                            Cancelar
                        </button>
                        <button
                            className="flex-1 px-4 py-3 bg-zinc-900 text-white rounded-lg font-medium hover:bg-zinc-800 transition-colors cursor-pointer"
                        >
                            Confirmar Reserva
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
} 