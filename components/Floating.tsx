import React from 'react'

function Floating() {
    return (
        <span className='absolute -z-10 top-14 -bottom-14 right-14 -left-14 border-4 border-gray-300 rounded'>
            <span className='sr-only'>Floating outline</span>
        </span>
    )
}

export default Floating