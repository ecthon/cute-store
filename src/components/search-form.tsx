"use client";

import { SearchIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function SearchForm() {
  return (
    <form className="flex w-[320px] max-sm:w-full items-center gap-3 rounded-full bg-zinc-100 px-5 py-3 ring-zinc-700">
        <HugeiconsIcon icon={SearchIcon} size={18} color="currentColor" strokeWidth={1.5} className="text-zinc-500" />
        <input
            placeholder="Filtre por planetas ou galáxias..."
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500 font-semibold text-zinc-800"
            required
            />
        </form>
  );
}