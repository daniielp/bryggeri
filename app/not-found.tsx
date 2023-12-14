import Button from "@/components/Button"
import Container from "@/components/Container"
import Link from "next/link"

function NotFound() {
  return (
    <main>
      <Container mode="dark" type="flex" className="flex-col">
        <p className="text-base font-semibold text-amber-600">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">Siden blev ikke fundet</h1>
        <p className="mt-6 text-base leading-7 text-slate-700">Vi kunne ikke finde det du ledte efter.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild variant="link">
            <Link
              href="/"
            >
              Gå til forsiden
            </Link>

          </Button>
        </div>
      </Container>

    </main>
  )
}

export default NotFound