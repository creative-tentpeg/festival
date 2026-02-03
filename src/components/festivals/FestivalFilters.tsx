"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { X, Filter } from "lucide-react";

const categories = ["All", "Cultural", "Music", "Food", "Seasonal", "Other"];
const months = [
  "All",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function FestivalFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentCategory = searchParams.get("category") || "All";
  const currentMonth = searchParams.get("month") || "All";

  const hasActiveFilters = currentCategory !== "All" || currentMonth !== "All";

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value === "All") {
        params.delete(name);
      } else {
        params.set(name, value);
      }
      return params.toString();
    },
    [searchParams],
  );

  const handleCategoryChange = (value: string) => {
    router.push(`?${createQueryString("category", value)}`);
  };

  const handleMonthChange = (value: string) => {
    router.push(`?${createQueryString("month", value)}`);
  };

  const handleClearFilters = () => {
    router.push("/festivals");
  };

  return (
    <div className="mb-12">
      <div className="flex items-center gap-2 mb-6">
        <Filter className="w-5 h-5 text-[#125427]" />
        <h3 className="text-lg font-semibold text-stone-900">
          Filter Festivals
        </h3>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Category Filter */}
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-semibold text-stone-700 mb-3"
            >
              Category
            </label>
            <div className="relative">
              <select
                id="category"
                value={currentCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="block w-full px-4 py-2.5 text-base border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#125427] focus:border-transparent bg-white transition-all"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Month Filter */}
          <div>
            <label
              htmlFor="month"
              className="block text-sm font-semibold text-stone-700 mb-3"
            >
              Month
            </label>
            <div className="relative">
              <select
                id="month"
                value={currentMonth}
                onChange={(e) => handleMonthChange(e.target.value)}
                className="block w-full px-4 py-2.5 text-base border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#125427] focus:border-transparent bg-white transition-all"
              >
                {months.map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Clear Filters Button */}
        {hasActiveFilters && (
          <div className="mt-6 pt-6 border-t border-stone-200">
            <button
              onClick={handleClearFilters}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors"
            >
              <X className="w-4 h-4" />
              Clear filters
            </button>
          </div>
        )}
      </div>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2">
          {currentCategory !== "All" && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#125427]/10 text-[#125427] rounded-full text-sm font-medium">
              <span>Category: {currentCategory}</span>
              <button
                onClick={() => handleCategoryChange("All")}
                className="hover:opacity-70 transition-opacity"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}
          {currentMonth !== "All" && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#125427]/10 text-[#125427] rounded-full text-sm font-medium">
              <span>Month: {currentMonth}</span>
              <button
                onClick={() => handleMonthChange("All")}
                className="hover:opacity-70 transition-opacity"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
