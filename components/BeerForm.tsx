import { useZodForm } from "@/hooks/useZodForm"
import { FindYourBeerSchema, anledningType, beerType, smagNote, smagType } from "@/schemas"
import Typography from "./Typography"
import Button from "./Button"
import { cn } from "@/lib/utils"

type BeerFormProps = {
    setIsCompleted: React.Dispatch<React.SetStateAction<boolean>>
}
 
export default function BeerForm({ setIsCompleted }: BeerFormProps) {
    const { register, getValues, handleSubmit, formState: { errors }, setValue, reset } = useZodForm({ schema: FindYourBeerSchema })

    const onReset = () => {
        reset()
        setIsCompleted(false)
    }

    const onSubmit = () => {
        setIsCompleted(true)
    }

    return (
        <form onReset={onReset} onSubmit={handleSubmit(onSubmit)} className='col-span-3 p-8 flex flex-col' >
            <div>
                <Typography className='font-bold' variant="heading" size="medium">Er du mest til lys eller mørk øl?</Typography>
                <div className='bg-slate-300 rounded-full inline-flex gap-8 justify-between items-center p-2'>
                    {beerType.map((type) => <button type="submit" key={type} className={cn('rounded-full px-6 py-1.5 text-sm font-semibold text-slate-900 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600', getValues("type") === type ? "bg-gray-100" : "bg-transparent")} onClick={() => setValue("type", type)}>{type}</button>)}
                </div>
            </div>
            <div className='mt-8'>
                <Typography className='font-bold' variant="heading" size="medium">Hvordan beskriver du generelt din smag i drikkevarer?</Typography>
                <div className='flex justify-between gap-4 flex-wrap'>
                    {smagType.map((smag) => <Button className='flex-1' variant="outline" key={smag} onClick={() => setValue("smag", smag)}>{smag}</Button>)}
                </div>
                {errors.smag && <Typography className='text-red-500'>{errors.smag.message}</Typography>}
            </div>
            <div className='mt-8'>
                <Typography className='font-bold' variant="heading" size="medium">Hvilke smagsnoter foretrækker du?</Typography>
                <div className='flex justify-between gap-4 flex-wrap'>
                    {smagNote.map((note) => <Button className='flex-1' variant="outline" key={note} onClick={() => setValue("smagsnote", note)}>{note}</Button>)}
                </div>
                {errors.smagsnote && <Typography className='text-red-500'>{errors.smagsnote.message}</Typography>}
            </div>
            <div className='mt-8'>
                <Typography className='font-bold' variant="heading" size="medium">Hvornår vil du typisk nyde en alkoholfri øl?</Typography>
                <div className='flex justify-between gap-4 flex-wrap'>
                    {anledningType.map((anledning) => <Button className='flex-1' variant="outline" key={anledning} onClick={() => setValue("anledning", anledning)}>{anledning}</Button>)}
                </div>
                {errors.anledning && <Typography className='text-red-500'>{errors.anledning.message}</Typography>}
            </div>
            <div className='mt-8'>
                <Typography className='font-bold' variant="heading" size="medium">Må vi sende dig mails om tilbud og rabatter?</Typography>
                <div className='flex justify-between gap-4 flex-wrap'>
                    <input
                        {...register("email")}
                        type="email"
                        id="email"
                        className="block w-full rounded-md border-0 py-1.5 px-4 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-slate-700 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm text-base sm:leading-6"
                        placeholder="Indsæt din email"
                    />
                </div>
                {errors.email && <Typography className='text-red-500'>{errors.email.message}</Typography>}
            </div>
            <div className='mt-8 flex justify-end gap-4'>
                <Button type="reset" variant="outline">Fortryd</Button>
                <Button type="submit">Få svaret med det samme</Button>
            </div>
        </form>
    )


}