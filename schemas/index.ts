import { z } from "zod";

export const beerType = ['lys', 'mørk'] as const
export const smagType = ['frugtigt', 'humlet', 'krydret', 'let og forfriskende'] as const
export const smagNote = ['citrus', 'bær', 'blomster', 'karamel'] as const
export const anledningType = ['festlige lejligheder', 'til aftensmad', 'efter træning', 'hygge på sofaen'] as const

export const FindYourBeerSchema = z.object({
    type: z.enum(beerType).default("lys"),
    smag: z.enum(smagType, {required_error: "Påkrævet felt"}),
    smagsnote: z.enum(smagNote, {required_error: "Påkrævet felt"}),
    anledning: z.enum(anledningType, {required_error: "Påkrævet felt"}),
    email: z.string().optional()
})