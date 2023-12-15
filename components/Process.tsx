import React from 'react'
import Heading from './Heading'
import Image from 'next/image'
import Button from './Button'
import Link from 'next/link'
import Floating from './Floating'
import Container from './Container'

function Process() {
    return (
        <Container>
            <div className='relative mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow'>
                <Image className='shadow-lg' src="/img/products/trøjborgbryg-classic.png" alt="product display" width={500} height={450} />
                <Floating />
            </div>
            <div className='mx-auto max-w-2xl lg:mx-0 lg:flex-auto mt-16'>
                <Heading
                    alignment="left"
                    heading='Klassisk Smag, Ingen Alkohol!'
                    description='Dyk ned i vores alkoholfri ølunivers, hvor traditionelle smagsnoter møder en forfriskende twist. Vores alkoholfri øl er ikke bare en erstatning; det er en hyldest til klassiske brygtraditioner.'
                >
                    <div className='flex gap-4 mt-6'>
                        <Button variant="outline">
                            <Link href="/bryggeriprocessen">
                                Læs mere om vores bryggeriprocess
                            </Link>
                        </Button>
                    </div>
                </Heading>
            </div>
        </Container>

    )
}

export default Process