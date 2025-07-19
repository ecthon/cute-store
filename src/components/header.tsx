'use client'
import Link from "next/link";

export function Header() {
    return (
        <header className="flex w-full bg-amber-100">
            <div className="flex w-full max-w-[1248px] py-2 px-4 sm:py-4 sm:px-6 lg:px-10 mx-auto items-center justify-between">
                <Link href="/" className="flex text-lg sm:text-xl lg:text-2xl font-bold text-zinc-900">Spacely.</Link>
                <h1 className="flex size-8 sm:size-10 font-bold rounded-full text-amber-300 cursor-pointer items-center justify-center bg-amber-50 text-sm sm:text-base">EA</h1>
            </div>
        </header>
    )
}