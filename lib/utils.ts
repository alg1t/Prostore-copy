import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

//convert prisma object into reg js object

export function convertToPlainObject<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}

export function formatNumberWithDecimal(num: number): string {
  const [int, decimal] = num.toString().split(".");
  return decimal ? `${int}.${decimal.padEnd(2, "0")}` : `${int}.00`;
}
function getInitial(): string | null {
  if (session?.user?.name) {
    const nameParts = session.user.name.split(" ");
    if (nameParts.length >= 2) {
      const firstInitial = nameParts[0][0];
      const lastInitial = nameParts[nameParts.length - 1][0];
      return `${firstInitial.toUpperCase()}${lastInitial.toUpperCase()}`;
    }
    return nameParts[0][0]?.toUpperCase() || null; // Handle single-word names
  }
  return null; // No name found
}
