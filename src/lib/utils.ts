import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const EVENT_TIME_ZONE = 'America/New_York';

function getDateParts(dateString: string) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: EVENT_TIME_ZONE,
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).formatToParts(new Date(dateString));

  return {
    month: parts.find((part) => part.type === 'month')?.value ?? '',
    day: parts.find((part) => part.type === 'day')?.value ?? '',
    year: parts.find((part) => part.type === 'year')?.value ?? '',
  };
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: EVENT_TIME_ZONE,
  });
}

export function formatDateRange(startDateString: string, endDateString: string) {
  const startDate = new Date(startDateString);
  const endDate = new Date(endDateString);
  const startParts = getDateParts(startDateString);
  const endParts = getDateParts(endDateString);

  const sameYear = startParts.year === endParts.year;
  const sameMonth = sameYear && startParts.month === endParts.month;
  const sameDay = sameMonth && startParts.day === endParts.day;

  if (sameDay) {
    return startDate.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      timeZone: EVENT_TIME_ZONE,
    });
  }

  if (sameMonth) {
    return `${startParts.month} ${startParts.day}-${endParts.day}, ${startParts.year}`;
  }

  return `${startParts.month} ${startParts.day} - ${endParts.month} ${endParts.day}, ${endParts.year}`;
}

export function formatTimeRange(startDateString: string, endDateString: string) {
  const startDate = new Date(startDateString);
  const endDate = new Date(endDateString);

  return `${startDate
    .toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
      timeZone: EVENT_TIME_ZONE,
    })
    .toLowerCase()
    .replace(':00', '')}-${endDate
    .toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
      timeZone: EVENT_TIME_ZONE,
    })
    .toLowerCase()
    .replace(':00', '')}`;
}
