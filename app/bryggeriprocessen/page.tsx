import Container from '@/components/Container'
import Typography from '@/components/Typography'
import React from 'react'

const timeline = [
    {
        name: 'Stiftet virksomheden',
        description:
            'I hjertet af Aarhus udfolder vi vores passion for smagsoplevelser ved at stifte en virksomhed, der dedikerer sig til kunstnerisk brygning af alkoholfri øl.',
        date: 'Aug 2020',
        dateTime: '2020-08',
    },
    {
        name: 'Produktion af alkoholfri',
        description:
            'Vores mikrobryggeri kombinerer lokal innovation med øltradition, skaber unikke alkoholfrie varianter og bringer en ny dimension til byens smagspalet.',
        date: 'Sep 2021',
        dateTime: '2021-09',
    },
    {
        name: 'Lancerede første kollektion',
        description:
            'Vores første kollektion er en fejring af individualitet og stil. Inspireret af nutidens dynamik og tidløs elegance, præsenterer vi en unik samling, der fusionerer innovation med klassisk design.',
        date: 'Jan 2022',
        dateTime: '2022-01',
    },
    {
        name: 'Startede specialøl',
        description:
            'Specialøl er en fascinerende verden af bryggekunst og smagsoplevelser. Disse øl adskiller sig fra standardvarianter ved at inkorporere unikke ingredienser, komplekse brygmetoder eller sjældne tilsætninger.',
        date: 'Dec 2022',
        dateTime: '2022-12',
    },
]

function BryggeriPage() {
    return (
        <main>
            <Container mode="dark" type="grid" className='lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8 lg:items-start'>
                <Typography asChild className='max-w-2xl font-display' variant="heading" size="large">
                    <h1>
                        Smag på Nye Horisonter: Alkoholfri Brygning for Unge
                    </h1>
                </Typography>
                <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1 self-start">
                    <Typography variant="paragraph" size="medium">
                        Tag del i en spændende rejse ind i verden af alkoholfri brygning, skræddersyet til unge. Udforsk de seneste trends inden for smagsfulde, alkoholfri drikke og lær om den innovative bryggeriprocess, der gør det muligt at nyde en frisk og fyldig oplevelse uden alkoholens virkning. Opdag nye smagsvarianter og deltag i fællesskabet omkring alkoholfri brygning – hvor nydelse møder sund fornuft og kreativitet!
                    </Typography>
                </div>
                <img
                    src="/img/beer-production.jpg"
                    alt=""
                    className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 md:max-w-xl xl:row-span-2 xl:row-end-2 xl:mt-36"
                />
            </Container>
            <div className="mx-auto mt-8 max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl py-8 grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
                    {timeline.map((item) => (
                        <div key={item.name}>
                            <time
                                dateTime={item.dateTime}
                                className="flex items-center text-sm font-semibold leading-6 text-amber-600"
                            >
                                <svg viewBox="0 0 4 4" className="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                                    <circle cx={2} cy={2} r={2} fill="currentColor" />
                                </svg>
                                {item.date}
                                <div
                                    className="absolute -ml-2 h-px w-screen -translate-x-full bg-slate-700 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                                    aria-hidden="true"
                                />
                            </time>
                            <Typography className='font-semibold' variant="subheading" size="medium">
                                <p className="mt-6 leading-8 tracking-tight text-slate-900">{item.name}</p>
                            </Typography>
                            <Typography variant="paragraph" size="small">
                                {item.description}
                            </Typography>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default BryggeriPage