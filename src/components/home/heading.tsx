import Image from "next/image";

export function Heading() {
  return (
    <div className="bg-amber-50 rounded-3xl">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center min-h-[400px] w-full max-w-[1248px] mx-auto space-y-4 px-4 sm:px-6 lg:px-8 py-8">
        {/* Left Side */}
        <div className="flex w-full md:w-1/2 flex-col justify-center gap-4 text-center md:text-left">
          <h1 className="text-5xl max-sm:text-3xl font-mono font-bold text-zinc-900">Planejando suas férias interestelares?🪐</h1>
          <p className="text-md md:text-md font-sans text-orange-900">Alugue uma casinha futurista em qualquer lugar do cosmos — suas férias interplanetárias começam aqui!</p>
        </div>

        {/* Right Side */}
        <div className="flex w-full md:w-1/2 justify-center items-center">
          <Image src="/heading-img.png" alt="House" width={350} height={350} className="w-64 h-64 md:w-auto md:h-auto" />
        </div>
      </div>
    </div>
  );
}