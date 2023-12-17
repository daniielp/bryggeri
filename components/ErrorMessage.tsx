import React from 'react'
import Typography from './Typography'
import { cn } from '@/lib/utils'

export interface ErrorMessageProps
    extends React.HTMLAttributes<HTMLDivElement> {
}

function ErrorMessage({ children, className, ...props }: ErrorMessageProps) {
    return (
        <Typography {...props} className={cn('text-red-500', className)}>{children}</Typography>
    )
}

export default ErrorMessage