import React from 'react'
import Heading from './Heading'
import Button from './Button'
import Image from 'next/image'
import Container from './Container'

function Hero() {
    return (
        <Container mode="dark">
            <div className='mx-auto max-w-2xl lg:mx-0 lg:flex-auto'>
                <Heading
                    alignment="left"
                    heading='Skål til hyggen, til fællesskabet og til livet'
                    description='Velkommen til en bølge af smag og frihed! Vores mikrobryggeri i hjertet af Aarhus har forvandlet ølverdenen med vores banebrydende alkoholfri bryg.'
                >
                    <div className='flex gap-4 mt-6'>
                        <Button>
                            <a href="/hvilken-ol-er-du">
                                Hvilken øl er du?
                            </a>
                        </Button>
                        <Button variant="outline">
                            <a href="/produkter">
                                Vores produkter
                            </a>
                        </Button>
                    </div>
                </Heading>
            </div>
            <div className='mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow lg:pl-36'>
                <Image src="/img/product-display.png" alt="product display" width={300} height={800} />
            </div>
        </Container>

    )
}

export default Hero