import { clsx } from 'clsx';
import type { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Tailwind 클래스 조건부 결합(clsx) + 충돌 클래스 병합(twMerge)
// ex) cn('px-2 py-1', isActive && 'bg-blue-500', 'px-4') -> 'py-1 bg-blue-500 px-4'
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
