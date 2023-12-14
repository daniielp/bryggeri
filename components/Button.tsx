import React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "rounded-md px-3.5 py-2.5 text-base font-bold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600 uppercase",
    {
        variants: {
            variant: {
                contained:
                    "bg-amber-600 text-white shadow hover:bg-amber-500/90",
                outline:
                    "ring-2 ring-insent bg-transparent ring-amber-600 text-amber-600 hover:text-amber-500/90 hover:ring-amber-500/90",
                link: "text-amber-600 underline underline-offset-4 hover:text-amber-500/90 shadow-none",
            },
        },
        defaultVariants: {
            variant: "contained",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                className={cn(buttonVariants({ variant, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export default Button