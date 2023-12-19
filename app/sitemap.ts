import { products } from "@/config/products";
import { MetadataRoute } from "next";
import { slugify } from "@/lib/utils";

const newDate = new Date();
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `https://bryggeri.daniiel.dev`,
      lastModified: newDate,
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://bryggeri.daniiel.dev/hvilken-ol-er-du",
      lastModified: newDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://bryggeri.daniiel.dev/bryggeriprocessen",
      lastModified: newDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://bryggeri.daniiel.dev/produkter",
      lastModified: newDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...products.map((product) => ({
      url: `https://bryggeri.daniiel.dev/produkter/${slugify(product.name)}`,
      lastModified: newDate,
    })),
  ];
}
