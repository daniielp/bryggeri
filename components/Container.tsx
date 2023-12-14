import { cn } from '@/lib/utils'
import { VariantProps, cva } from 'class-variance-authority'
import React from 'react'

const containerVariants = cva(
    "pt-14",
    {
        variants: {
            type: {
                grid: "grid",
                flex: "lg:flex ",
            },
            mode: {
                light: "bg-gray-100",
                dark: "bg-gray-300",
            },
        },
        defaultVariants: {
            mode: "light",
            type: "flex"
        },
    }
)

export interface ContainerProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
}

function Container({ className, mode, type, children, ...props }: ContainerProps) {
    return (
        <div {...props} className={cn(containerVariants({ mode }))}>
            <div className={cn(containerVariants({ type, mode, className }), 'mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:items-center lg:gap-x-10 lg:px-8 lg:py-40')}>
                {children}
            </div>
        </div>
    )
}

export default Container