import Container from '@/components/Container'
import FindYourBeer from '@/components/FindYourBeer'
import Heading from '@/components/Heading'
import React from 'react'

function page() {
    return (
        <Container mode="dark" type="flex" className='flex-col'>
            <Heading
                alignment="center"
                heading="Find Din Perfekte Alkoholfri Øl"
                description={<p>Dyrk din smagsoplevelse med TrøjborgBryg. <span className='block'>Start din rejse nedenfor og lad smagen tale for sig selv!</span></p>}
            />
            <FindYourBeer className='mt-16' />
        </Container>
    )
}

export default page