import Image from "next/image";

export function Reservation() {
  return (
    <div className="flex w-full max-sm:px-4">
        <div className="flex flex-col lg:flex-row items-center w-full min-h-[200px] lg:h-[220px] max-w-[1248px] mx-auto space-y-4 lg:space-y-0 px-4 sm:px-6 lg:px-8 bg-yellow-500 rounded-3xl py-6 lg:py-0 border-4 border-amber-200/25">
        <div className="flex flex-col w-full lg:w-1/2 space-y-4 lg:space-y-2 text-center lg:text-left">
            <div className="flex flex-col">        
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-mono font-bold text-white">📆 Reservas...</h1>
            </div>
            <div className="flex max-sm:hidden flex-col sm:flex-row items-center justify-center bg-amber-50 rounded-lg p-3 gap-3">
            <p className="text-md font-semibold sm:text-md font-sans text-amber-900">Faça sua reserva agora mesmo!</p>
            <button className="w-full sm:w-auto min-w-[150px] font-bold font-sans bg-amber-400 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-amber-500 transition-colors">
                Reservar
            </button>
            </div>
        </div>
        <div className="flex max-sm:flex-col w-full lg:w-1/2 justify-center">
            <div className="flex items-center justify-center gap-2 sm:gap-4">
            <Image
                src="/robot.png" 
                alt="Robot" 
                width={200} 
                height={200} 
                className="w-32 h-32 sm:w-48 sm:h-48 lg:w-56 lg:h-56 animate-bounce ease-in-out hover:scale-110 transition-all duration-500" 
            />
            <Image 
                src="/house.png" 
                alt="Little House" 
                width={200} 
                height={200} 
                className="w-32 h-32 sm:w-48 sm:h-48 lg:w-56 lg:h-56 hover:scale-110 transition-all duration-500"
                style={{ animationDelay: '0.5s' }}
            /> 
            </div>
            <div className="flex lg:hidden flex-col sm:flex-row items-center justify-center bg-amber-50 rounded-lg p-3 gap-3">
            <p className="text-sm sm:text-md font-sans text-zinc-900">Faça sua reserva agora mesmo!</p>
            <button className="w-full sm:w-auto min-w-[150px] font-bold font-sans bg-amber-400 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-amber-500 transition-colors">
                Reservar
            </button>
            </div>
        </div>
        </div>
    </div>
  );
}