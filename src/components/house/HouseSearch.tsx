"use client";

import { SearchIcon } from "@hugeicons/core-free-icons";
import { Icon } from "@/components/ui/Icon";
import { SearchFormProps } from "@/types/house";

export function HouseSearch({ onSearch, placeholder = "Search for a house..." }: SearchFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get("search") as string;
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-[320px] max-sm:w-full items-center gap-3 rounded-full bg-zinc-100 px-5 py-3 ring-zinc-700 hover:bg-zinc-200 transition-colors">
      <Icon icon={SearchIcon} className="text-zinc-500" />
      <input
        name="search"
        placeholder={placeholder}
        className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500 font-semibold text-zinc-800"
        required
      />
    </form>
  );
} 