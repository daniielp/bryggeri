import { cn } from '@/lib/utils'
import type { Image as ImageType } from '@/types'
import Image from 'next/image'
import React, { ReactNode } from 'react'

export interface ProductCardProps
    extends React.HTMLAttributes<HTMLDivElement> {
    heading: ReactNode,
    description: ReactNode,
    href: string,
    productImage: ImageType
}

function ProductCard(post: ProductCardProps) {
    return (
        <article key={post.id} className={cn("flex flex-col items-start justify-between", post.className)}>
            <div className="relative w-full">
                <Image
                    src={post.productImage.url}
                    alt={post.productImage.name}
                    width={300}
                    height={250}
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            </div>
            <div className="max-w-xl">
                <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <a href={post.href}>
                            <span className="absolute inset-0" />
                            {post.heading}
                        </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
            </div>
        </article>
    )
}

export default ProductCard