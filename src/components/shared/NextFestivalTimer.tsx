"use client";

import { useEffect, useState } from "react";

type NextFestivalTimerProps = {
  festivalName: string;
  startDate: string;
};

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isLive: boolean;
};

function getTimeLeft(targetMs: number): TimeLeft {
  const diff = targetMs - Date.now();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isLive: true };
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds, isLive: false };
}

function pad(value: number): string {
  return value.toString().padStart(2, "0");
}

export function NextFestivalTimer({ festivalName, startDate }: NextFestivalTimerProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [hasDateError, setHasDateError] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isLive: false,
  });

  useEffect(() => {
    const targetMs = Date.parse(startDate);

    setIsMounted(true);
    if (Number.isNaN(targetMs)) {
      setHasDateError(true);
      return;
    }

    setHasDateError(false);
    setTimeLeft(getTimeLeft(targetMs));

    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(targetMs));
    }, 1000);

    return () => clearInterval(interval);
  }, [startDate]);

  if (!isMounted) {
    return (
      <div className="w-full max-w-md md:max-w-2xl text-center">
        <p className="text-sm md:text-base font-heading font-semibold tracking-wide text-white">
          Countdown to {festivalName}
        </p>
      </div>
    );
  }

  if (hasDateError) {
    return (
      <div className="w-full max-w-md md:max-w-2xl text-center">
        <p className="text-sm md:text-base font-heading font-semibold tracking-wide text-white">
          Countdown to {festivalName}
        </p>
        <p className="mt-2 text-sm md:text-base font-body text-white">
          Timer unavailable right now
        </p>
      </div>
    );
  }

  if (timeLeft.isLive) {
    return (
      <div className="w-full max-w-md md:max-w-2xl text-center">
        <p className="text-sm md:text-base font-heading font-semibold tracking-wide text-white">
          Countdown to {festivalName}
        </p>
        <p className="mt-2 text-sm md:text-base font-body text-white">
          {festivalName} is live now
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md md:max-w-2xl text-center text-white">
      <p className="text-sm md:text-base font-heading font-semibold tracking-wide text-white">
        Countdown to {festivalName}
      </p>
      <div className="mt-3 grid grid-cols-4 gap-2 md:gap-3">
        <div className="rounded-md bg-[#022154] px-3 py-2 md:px-4 md:py-3 text-center">
          <p className="text-2xl md:text-4xl font-heading font-bold leading-none">{pad(timeLeft.days)}</p>
          <p className="mt-1 md:mt-2 text-[10px] md:text-xs font-body uppercase tracking-[0.16em] text-white">Days</p>
        </div>
        <div className="rounded-md bg-[#022154] px-3 py-2 md:px-4 md:py-3 text-center">
          <p className="text-2xl md:text-4xl font-heading font-bold leading-none">{pad(timeLeft.hours)}</p>
          <p className="mt-1 md:mt-2 text-[10px] md:text-xs font-body uppercase tracking-[0.16em] text-white">Hours</p>
        </div>
        <div className="rounded-md bg-[#022154] px-3 py-2 md:px-4 md:py-3 text-center">
          <p className="text-2xl md:text-4xl font-heading font-bold leading-none">{pad(timeLeft.minutes)}</p>
          <p className="mt-1 md:mt-2 text-[10px] md:text-xs font-body uppercase tracking-[0.16em] text-white">Minutes</p>
        </div>
        <div className="rounded-md bg-[#022154] px-3 py-2 md:px-4 md:py-3 text-center">
          <p className="text-2xl md:text-4xl font-heading font-bold leading-none">{pad(timeLeft.seconds)}</p>
          <p className="mt-1 md:mt-2 text-[10px] md:text-xs font-body uppercase tracking-[0.16em] text-white">Seconds</p>
        </div>
      </div>
    </div>
  );
}
