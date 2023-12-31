import { cn } from "@/lib/utils"
import { VariantProps, cva } from "class-variance-authority"
import { Slot } from "@radix-ui/react-slot"
import React from "react"

const typographyVariants = cva("", {
    variants: {
        variant: {
            heading: "text-slate-900",
            subheading: "text-slate-700",
            paragraph: "text-slate-700"
        },
        size: {
            large: "text-4xl md:text-6xl leading-16",
            medium: "text-base md:text-2xl",
            small: "text-sm md:text-base "
        },
    },
    defaultVariants: {
        variant: "paragraph",
        size: "small"
    }
})

export interface TypographyProps
    extends React.HtmlHTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof typographyVariants> {
    asChild?: boolean
}

const Typography = React.forwardRef<HTMLParagraphElement, TypographyProps>(
    ({ className, variant, size, asChild, ...props }, ref) => {
        const Comp = asChild ? Slot : "p"
        return (
            <Comp
                className={cn(typographyVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Typography.displayName = "Typography"

export default Typography