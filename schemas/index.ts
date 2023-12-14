import { z } from "zod";

export const beerType = ['lys', 'mørk'] as const
export const smagType = ['frugtigt', 'humlet', 'krydret', 'let og forfriskende'] as const
export const smagNote = ['citrus', 'bær', 'blomster', 'karamel'] as const
export const anledningType = ['festlige lejligheder', 'til aftensmad', 'efter træning', 'hygge på sofaen'] as const

export const FindYourBeerSchema = z.object({
    type: z.enum(beerType).default("lys"),
    smag: z.enum(smagType),
    smagsnote: z.enum(smagNote),
    anledning: z.enum(anledningType),
    email: z.string().optional()
})