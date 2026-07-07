import { cms } from "@/lib/cms/client";
import { NextResponse } from "next/server";

type Params = { slug: string } | Promise<{ slug: string }>;

function toICSDate(iso: string): string {
  return new Date(iso)
    .toISOString()
    .replace(/[-:]/g, "")
    .replace(/\.\d{3}Z$/, "Z");
}

function escapeICS(value: string): string {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;")
    .replace(/\n/g, "\\n");
}

export async function GET(
  _req: Request,
  context: { params: Params },
) {
  const { slug } = await Promise.resolve(context.params);
  const festival = await cms.getFestivalBySlug(slug);

  if (!festival || !festival.startDate || !festival.endDate) {
    return new NextResponse("Event not found", { status: 404 });
  }

  const uid = `${festival.slug}@cabarrusfestivals.com`;
  const dtstamp = toICSDate(new Date().toISOString());
  const dtstart = toICSDate(festival.startDate);
  const dtend = toICSDate(festival.endDate);
  const summary = escapeICS(festival.name);
  const description = escapeICS(festival.shortDescription);
  const location = escapeICS(`${festival.venueName ?? ""}, ${festival.cityState}`);

  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Cabarrus Festivals//EN",
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${dtstamp}`,
    `DTSTART:${dtstart}`,
    `DTEND:${dtend}`,
    `SUMMARY:${summary}`,
    `DESCRIPTION:${description}`,
    `LOCATION:${location}`,
    "END:VEVENT",
    "END:VCALENDAR",
    "",
  ].join("\r\n");

  return new NextResponse(ics, {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": `attachment; filename="${festival.slug}.ics"`,
      "Cache-Control": "no-store",
    },
  });
}

