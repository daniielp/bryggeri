"use client"
import { ReactNode, useState } from "react"
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import * as Toogle from '@radix-ui/react-toggle'
import { cn } from "@/lib/utils";
import { ChevronUpIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import { siteConfig } from "@/config/site";
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import React from "react";
import * as Popover from '@radix-ui/react-popover';
import * as Accordion from "@radix-ui/react-accordion";
import Button from "./Button";
import Image from "next/image";

export default function SiteHeader() {
  const [showNav, setShowNav] = useState<boolean>(false);
  const [hidden, setHidden] = useState<boolean>(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();

    if (latest > previous && latest > 150) {
      setHidden(true);
      setShowNav(false);
    } else {
      setHidden(false);
    }
  });

  return (
    <header>
      <motion.nav
        className={'fixed z-30 inset-0 top-4 w-[95%] sm:w-[90%] mx-auto bg-slate-50 font-medium text-gray-900 flex max-sm:justify-between gap-4 p-4 px-6 max-w-7xl items-end justify-between font-mono h-14 z-25 shadow rounded-md'}
        variants={{
          long: { maxWidth: 1280 },
          short: { maxWidth: 150 },
          hideNav: {
            height: 56,
            alignItems: 'center',
            transition: { delay: 0, duration: 0.3 },
          },
          showNav: {
            height: 200,
            alignItems: 'start',
            transition: { delay: 0 },
          },
        }}
        initial={'short'}
        animate={[hidden ? 'short' : 'long', showNav ? 'showNav' : 'hideNav']}
        transition={{
          duration: 0.6,
          type: 'spring',
          stiffness: 80,
          damping: 14,
        }}
      >
        <a href="/" className="">
          <Image className="pt-[60%] z-100" src="/logo.png" alt={siteConfig.name} width={100} height={100} />
        </a>

        <motion.ul
          className={cn("w-full [--opacity-from:0.1] [--opacity-to:1] flex-col sm:flex-row items-center justify-end gap-10 max-sm:gap-5 max-sm:pt-10", showNav ? "[--display-from:none] [--display-to:flex]" : "max-sm:[--display-from:none] sm:[--display-to:flex]")}
          variants={{
            hidden: {
              display: 'var(--display-from, none)',
              opacity: 'var(--opacity-from, 1)',
              transition: { duration: 0.6, delay: 0 },
            },
            visible: {
              display: 'var(--display-to, none)',
              opacity: 'var(--opacity-to, 1)',
              transition: { duration: 0.6, delay: 0 },
            },
          }}
          initial={'hidden'}
          animate={[
            hidden && !showNav ? 'hidden' : 'visible',
            showNav ? 'visible' : '',
          ]}
        >
          {siteConfig.mainNav.map((menuItem) => (
            menuItem.items.length > 0 ? (
              <li key={menuItem.title}>
                <Popover.Root >
                  <Popover.Trigger asChild>
                    <button
                      className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
                      aria-label={`Toggle ${menuItem.title}`}
                    >
                      {menuItem.title}
                      <ChevronDownIcon className="w-5" />
                    </button>
                  </Popover.Trigger>
                  <Popover.Portal>
                    <Popover.Content
                      className="rounded z-50 p-5 w-screen max-w-max bg-white ring-1 ring-gray-900/5 shadow-lg"
                      sideOffset={7}
                    >
                      <div className="w-screen max-w-sm flex-auto rounded-3xl text-sm leading-6">
                        <Accordion.Root type="single" collapsible>
                          {menuItem.items.map((subItem) =>
                            subItem.items.length > 0 ? (
                              <Accordion.Item key={subItem.title} value={subItem.title}>
                                <Accordion.Header
                                  className="flex"
                                >
                                  <Accordion.Trigger
                                    className="group flex justify-between items-center flex-1 text-sm rounded-lg p-4 font-semibold hover:bg-gray-50 text-slate-900"
                                  >
                                    {subItem.title}
                                    <ChevronDownIcon
                                      className="ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
                                      aria-hidden
                                    />
                                  </Accordion.Trigger>
                                </Accordion.Header>

                                <Accordion.Content>
                                  <ul
                                    className="px-4 rounded-lg"
                                  >
                                    {subItem.items.map((item) =>
                                      <li key={item.title} className="p-4">
                                        <a className=" text-slate-700" href={item.href}>
                                          {item.title}
                                        </a>
                                      </li>
                                    )}
                                  </ul>
                                </Accordion.Content>
                              </Accordion.Item>
                            ) : (
                              <div key={subItem.title} className="relative rounded-lg p-4 hover:bg-gray-50">
                                <a href={subItem.href} className="font-semibold text-gray-900">
                                  {subItem.title}
                                  <span className="absolute inset-0" />
                                </a>
                              </div>
                            )

                          )}
                        </Accordion.Root>
                      </div>
                      <Popover.Arrow className="fill-gray-200" />
                    </Popover.Content>
                  </Popover.Portal>
                </Popover.Root>
              </li>
            ) : (
              <li key={menuItem.title}>
                <a className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-slate-900" href={menuItem.href}>
                  {menuItem.title}
                </a>
              </li>
            )
          ))}
        </motion.ul>

        
        <Toogle.Root
          className="rounded-full min-w-[40px] sm:hidden"
          aria-label="Toggle navigation"
          onClick={() => {
            setHidden(false);
            setShowNav((prevState) => !prevState)
          }}
        >
          {showNav ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </Toogle.Root>
      </motion.nav>
    </header >
  )
}