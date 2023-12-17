import Container from '@/components/Container'
import Heading from '@/components/Heading'
import React from 'react'
import { products } from '@/config/products'
import ProductCard from '@/components/ProductCard'
import { slugify } from '@/lib/utils'

function Products() {
    return (
        <>
            <Container mode="dark">
                <Heading
                    alignment="center"
                    heading="Opdag Din Perfekte Alkoholfri Øl"
                    description="Dygtigt skabt til at opfylde dine specifikke smagskriterier, byder TrøjborgBryg stolt velkommen til vores omfattende sortiment af alkoholfrie ølprodukter."
                >

                </Heading>
            </Container>
            <Container type="grid" className='grid-cols-1 gap-x-8 gap-y-20 lg:grid-cols-3'>
                {products.map((product) => 
                    <ProductCard 
                        key={product.id}
                        heading={product.name}
                        description={product.description}
                        href={`/produkter/${slugify(product.name)}`}
                        productImage={product.images[0]}
                    />
                )}
            </Container>
        </>
    )
}

export default Products