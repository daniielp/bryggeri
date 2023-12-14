import { ProductCategory } from "@/config/products";
import { type IconProps } from "@radix-ui/react-icons/dist/types";
import React from "react";

export interface NavItem {
  title: string;
  href: string;
  icon?: keyof typeof React.forwardRef<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
  items: NavItem[]
}

export type MainNav = NavItem[];

export interface Product {
  id: string;
  name: string;
  description: string;
  rating: number,
  price: number;
  images: Image[];
  category: ProductCategory;
}

export interface Image {
  id: string;
  name: string;
  url: string;
  primary: boolean
}
