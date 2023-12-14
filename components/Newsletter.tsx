import React from 'react'
import Typography from './Typography'
import Button from './Button'

const Newsletter = () => {
    return (
        <div className="bg-white py-16 sm:py-24 lg:py-32">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
                <div className="max-w-xl tracking-tight lg:col-span-7">
                    <Typography asChild variant="heading" size="medium" className='font-display font-bold'>
                        <h2>Nyt og Spændende i Verdenen af Alkoholfri øl!</h2>
                    </Typography>
                    <Typography className='mt-2'>
                        Dybt forankret i brygningens kunst bringer vores nyhedsbrev dig de seneste smagsoplevelser, eksklusive tilbud og bag-scenerne kig på vores bryggeri.
                    </Typography>
                </div>
                <form className="w-full flex flex-col justify-center max-w-md lg:col-span-5 lg:pt-2">
                    <div className="flex">
                        <label htmlFor="email-address" className="sr-only">
                            Email address
                        </label>
                        <input
                            id="email-address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="min-w-0 flex-auto rounded-sm rounded-r-none border-0 px-3.5 py-2 bg-gray-300 text-gray-900 shadow-sm placeholder:text-gray-700 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
                            placeholder="Indsæt din email her"
                        />
                        <Button
                            type='submit'
                            className='rounded-l-none'
                        >
                            Tilmed nyhedsbrev
                        </Button>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-gray-900">
                        Bare rolig - vi spammer dig ikke
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Newsletter