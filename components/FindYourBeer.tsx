"use client"
import { cn, getMultipleRandom, slugify } from '@/lib/utils'
import React, { useState } from 'react'
import Typography from './Typography'
import BeerForm from './BeerForm'
import { products } from '@/config/products'
import ProductCard from './ProductCard'

export interface FindYourBeerProps extends React.HTMLAttributes<HTMLDivElement> {

}

function FindYourBeer({ className }: FindYourBeerProps) {
    const [isCompleted, setIsCompleted] = useState<boolean>(false)

    return (
        <div className={cn('grid grid-cols-1 lg:grid-cols-4 bg-gray-100 w-full rounded-sm overflow-hidden', className)}>
            <div className='col-span-1 bg-amber-50 p-8'>
                <img src="/img/products/trøjborgbryg-lime.png" className='aspect-auto' />
                <Typography className='font-bold text-center mt-4' variant="subheading" size="medium">
                    Find din perfekte øl
                </Typography>
                <Typography className='mt-4'>
                    Lad os hjælpe dig med at opdage den alkoholfri øl, der passer perfekt til din smag og stemning. Udfyld formularen til højre, og vi matcher dine præferencer med vores eksklusive brygge.
                </Typography>
            </div>
            {isCompleted ? (
                <div className='col-span-3 flex flex-col justify-center items-center'>
                    <Typography variant="subheading" size="medium">
                        Vi fandt følgende øl der passer til dig
                    </Typography>
                    {getMultipleRandom(products, 1).map((product) =>
                        <ProductCard
                            className='mt-4'
                            key={product.id}
                            heading={product.name}
                            description={product.description}
                            href={`/produkter/${slugify(product.name)}`}
                            productImage={product.images[0]}
                        />
                    )}
                </div>
            ) : (
                <BeerForm setIsCompleted={setIsCompleted} />
            )}
        </div>
    )
}

export default FindYourBeer

