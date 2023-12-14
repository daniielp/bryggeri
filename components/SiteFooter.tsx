import { products } from "@/config/products"
import { siteConfig } from "@/config/site"
import { slugify } from "@/lib/utils"
import Image from "next/image"
import Newsletter from "./Newsletter"
import Typography from "./Typography"
import Link from "next/link"

function SiteFooter() {
    return (
        <>
            <Newsletter />
            <footer className="bg-gray-300" aria-labelledby="footer-heading">
                <h2 id="footer-heading" className="sr-only">
                    Footer
                </h2>
                <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
                    <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                        <div className="space-y-8">
                            <Image
                                src="/logo-dark.svg"
                                alt="TrøjborgBryg"
                                width={150}
                                height={80}
                            />
                            <Typography>
                                Velkommen til TrøjborgBryg, hvor passion for brygning møder innovation. Vi er dedikerede til at skabe en ny æra inden for alkoholfri øl ved at fusionere traditionelle smagsnoter med moderne flair.
                            </Typography>
                        </div>
                        <div className="mt-16 flex flex-col md:flex-row justify-end grid-cols-1 gap-8 xl:col-span-2 xl:mt-0">
                            <div className="md:grid md:grid-cols-3 md:gap-12">
                                <div>
                                    <Typography asChild variant="heading" size="small" className="font-semibold text-slate-900">
                                        <h3>Smagsoplevelser</h3>
                                    </Typography>

                                    <ul role="list" className="mt-6 space-y-4">
                                        {siteConfig.footerNav.experiences.map((item) => (
                                            <li key={item.name}>
                                                <Typography asChild>
                                                    <Link href={item.href} className="hover:text-gray-900">
                                                        {item.name}
                                                    </Link>
                                                </Typography>

                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mt-10 md:mt-0">
                                    <Typography asChild variant="paragraph" className="font-bold">
                                        <h3 className="font-semibold text-slate-900">Vores Produkter</h3>
                                    </Typography>
                                    <ul role="list" className="mt-6 space-y-4">
                                        {siteConfig.footerNav.products.map((item) => (
                                            <li key={item.name}>
                                                <Typography asChild>
                                                    <Link href={`/produkter/${slugify(item.name)}`} className="hover:text-gray-900">
                                                        {item.name}
                                                    </Link>
                                                </Typography>
                                                
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mt-10 md:mt-0">
                                    <Typography asChild variant="paragraph" className="font-bold">
                                        <h3 className="font-semibold text-slate-900">Om bryggeriet</h3>
                                    </Typography>
                                    <ul role="list" className="mt-6 space-y-4">
                                        {siteConfig.footerNav.about.map((item) => (
                                            <li key={item.name}>
                                                <Typography asChild>
                                                    <Link href={item.href} className="hover:text-gray-900">
                                                        {item.name}
                                                    </Link>
                                                </Typography>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
                        <p className="text-xs leading-5 text-gray-500">&copy; {new Date().getFullYear()} TrøjborgBryg. Alle rettigheder forbeholdes.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default SiteFooter