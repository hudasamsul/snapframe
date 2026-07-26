"use client";

import { useSessionStore } from "@/lib/store/session-store";
import { FILTER_OPTIONS } from "./filter-data";
import { FilterCard } from "./filter-card";

export function FilterGrid() {
  const selectedFilter = useSessionStore((state) => state.selectedFilter);

  const setSelectedFilter = useSessionStore((state) => state.setSelectedFilter);

  return (
    <div className="grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-4">
      {FILTER_OPTIONS.map((filter) => (
        <FilterCard
          key={filter.id}
          filter={filter}
          selected={selectedFilter === filter.id}
          onClick={() => setSelectedFilter(filter.id)}
        />
      ))}
    </div>
  );
}
