import { cn } from '@/lib/utils'
import { VariantProps, cva } from 'class-variance-authority'
import React, { ReactNode } from 'react'
import Typography from './Typography'

const headingVariants = cva(
    "flex flex-col",
    {
        variants: {
            alignment: {
                left:
                    "text-left",
                center:
                    "text-center",
                right: "text-right",
            },
        },
        defaultVariants: {
            alignment: "left",
        },
    }
)

export interface HeadingProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof headingVariants> {
    heading: ReactNode,
    description: ReactNode
}

function Heading({ className, alignment, heading, description, children, ...props }: HeadingProps) {
    return (
        <div {...props} className={cn(headingVariants({ alignment, className }))}>
            <Typography asChild variant="heading" size="large" className='font-display font-bold'>
                <h1>
                    {heading}
                </h1>
            </Typography>
            <Typography asChild variant="subheading" size="medium" className='mt-6'>
                <p>
                    {description}
                </p>
            </Typography>
            {children}
        </div>
    )
}

export default Heading