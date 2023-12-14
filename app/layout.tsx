import type { Metadata } from 'next'
import { Rozha_One, Poppins } from 'next/font/google'
import './globals.css'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

const rozha = Rozha_One({ subsets: ["latin"], weight: "400", style: "normal" })
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "800"] })

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "microbryggeri",
    "bryggeri",
    "alkoholfri",
    "trøjborg",
    "bryg"
  ],
  alternates: {
    canonical: "/",
  },
  authors: [
    {
      name: siteConfig.author.name,
      url: siteConfig.author.url
    }
  ],
  creator: "daniiel",
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
    creator: "@daniiel_dev"
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="da-DK" className='bg-gray-100 text-slate-900'>
      <body className={cn(rozha.className, poppins.className, 'font-sans')}>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
