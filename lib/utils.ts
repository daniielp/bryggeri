import { products } from "@/config/products";
import { Product } from "@/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "");
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => slugify(product.name) === slug)
}

export function getMultipleRandom<T extends Product>(arr: Array<T>, num: number): Array<T> {
  const shuffled = [...arr].sort(() => 0.5 - Math.random())
  
  return shuffled.slice(0, num)
}