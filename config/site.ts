import type { MainNav, NavItem } from "@/types";
import { productCategories, products } from "./products";
import { slugify } from "@/lib/utils";

export const socials = {
  facebook: "https://facebook.com",
  instagram: "https://instagram.com",
  github: "https://github.com/daniielp",
};

const emptyArray: NavItem[] = [];

export const siteConfig = {
  name: "TrøjborgBryg",
  title: "TrøjborgBryg - Skål til hyggen, til fællesskabet og til livet",
  url: "https://trojborgbryg.daniiel.dev",
  description: "",
  author: {
    name: "Daniel Pedersen",
    url: socials.github,
  },
  locale: "da_DK",
  mainNav: [
    {
      title: "Smagsoplevelser",
      href: "/smagsoplevelser",
      items: [
        {
          title: "Anbefalinger",
          href: "/smagsoplevelser/anbefalinger",
          items: emptyArray,
        },
        {
          title: "Hvilken øl er du?",
          href: "/hvilken-ol-er-du",
          items: emptyArray,
        },
      ],
    },
    {
      title: "Vores Produkter",
      href: "/produkter",
      items: Object.keys(productCategories).map((category) => ({
        title: productCategories[category as keyof typeof productCategories],
        href: "/produkter",
        items: products
          .filter((product) => product.category == category)
          .map((product) => ({
            title: product.name!,
            href: "/produkter/" + slugify(product.name),
            items: emptyArray,
          })),
      })),
    },
    {
      title: "Om bryggeriet",
      href: "/om-bryggeriet",
      items: [
        {
          title: "Hvem er Trøjborg Bryg?",
          href: "/hvem-er-trojborg-bryg",
          items: emptyArray,
        },
        {
          title: "Vores værdier",
          href: "/vaerdier",
          items: emptyArray,
        },
        {
          title: "Bryggeriprocessen",
          href: "/bryggeriprocessen",
          items: emptyArray,
        },
        {
          title: "Kontakt",
          href: "/kontakt",
          items: emptyArray,
        },
      ],
    },
  ] satisfies MainNav,
  footerNav: {
    experiences: [
      { name: "Hvilken øl er du?", href: "/hvilken-ol-er-du" },
      { name: "Anbefalinger", href: "/smagsoplevelser/anbefalinger" },
    ],
    products: products,
    about: [
      { name: "Hvem er TrøjborgBryg?", href: "/hvem-er-trojborg-bryg" },
      { name: "Vores værdier", href: "/vaerdier" },
      { name: "Bryggeriprocessen", href: "/bryggeriprocessen" },
      { name: "Kontakt", href: "/kontakt" },
    ],
  },
};
