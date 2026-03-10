import Image from "next/image";
import Link from "next/link";
import { Festival } from "@/lib/cms/types";
import { formatDate } from "@/lib/utils";
import { Calendar, MapPin } from "lucide-react";

interface FestivalCardProps {
  festival: Festival;
}

export function FestivalCard({ festival }: FestivalCardProps) {
  return (
    <Link href={`/festivals/${festival.slug}`} className="group block h-full">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col">
        <div className="relative h-48 w-full">
          <Image
            src={festival.cardImage}
            alt={festival.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded text-xs font-bold uppercase tracking-wide text-gray-800">
            {festival.category}
          </div>
        </div>
        <div className="p-4 flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-festival-green transition-colors">
            {festival.name}
          </h3>
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
            {festival.shortDescription}
          </p>

          <div className="mt-auto space-y-2 text-sm text-gray-500">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2 text-festival-green" />
              <span>{formatDate(festival.startDate)}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2 text-festival-green" />
              <span>
                {festival.venueName}, {festival.cityState}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
