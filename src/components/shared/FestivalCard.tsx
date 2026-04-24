import Image from "next/image";
import Link from "next/link";
import { Festival } from "@/lib/cms/types";
import { formatDateRange, formatTimeRange } from "@/lib/utils";
import { Calendar, MapPin } from "lucide-react";

interface FestivalCardProps {
  festival: Festival;
}

export function FestivalCard({ festival }: FestivalCardProps) {
  const isExternal = Boolean(
    festival.officialUrl && festival.officialUrl.startsWith("http"),
  );
  const href = isExternal ? festival.officialUrl! : `/festivals/${festival.slug}`;

  const cardContent = (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col"
      data-aos="fade-up"
    >
      <div className="relative h-48 w-full">
        <Image
          src={festival.cardImage}
          alt={festival.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {festival.overlayLogo && (
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        )}
        {festival.overlayLogo && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <Image
              src={festival.overlayLogo}
              alt="Cabarrus Festivals"
              width={150}
              height={150}
              className={festival.overlayLogoClassName ?? "h-auto w-24 sm:w-28 md:w-32"}
            />
          </div>
        )}
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
            <span>
              {formatDateRange(festival.startDate, festival.endDate)}
              {" | "}
              {formatTimeRange(festival.startDate, festival.endDate)}
            </span>
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
  );

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="group block h-full">
        {cardContent}
      </a>
    );
  }

  return (
    <Link href={href} className="group block h-full">
      {cardContent}
    </Link>
  );
}
