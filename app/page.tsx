"use client"
import Hero from '@/components/Hero'
import Process from '@/components/Process'
import { siteConfig } from '@/config/site'


export default function Home() {
  return (
    <main>
      <Hero />
      <Process />
    </main>
  )
}
