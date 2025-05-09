import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: unknown[]) {
  return twMerge(clsx(inputs));
}

export function generateStars() {
  const numberOfStarts = Math.floor(
    (window.innerWidth * window.innerHeight) / 10000
  );

  const newStars = Array(numberOfStarts)
    .fill(0)
    .map((_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: Math.random() * 0.5 + 0.5,
      animationDuration: Math.random() * 4 + 2
    }));
  return newStars;
}

export function generateMeteors() {
  const numberOfMeteors = 4;
  const newMeteors = Array(numberOfMeteors)
    .fill(0)
    .map((_, i) => ({
      id: i,
      size: Math.random() * 2 + 1,
      x: Math.random() * 100,
      y: Math.random() * 20,
      delay: Math.random() * 15,
      animationDuration: Math.random() * 3 + 3
    }));
  return newMeteors;
}
