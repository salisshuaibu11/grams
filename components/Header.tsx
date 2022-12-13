import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { useRouter } from "next/router";
import { Popover, Transition } from "@headlessui/react";
import { Container } from "./Container";

import { Fragment } from "react";

function CloseIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronDownIcon(props: any) {
  return (
    <svg viewBox="0 0 8 6" aria-hidden="true" {...props}>
      <path
        d="M1.75 1.75 4 4.25l2.25-2.5"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MobileNavItem({href, children}: any) {
  return (
    <li>
      <Popover.Button as={Link} href={href} className="block py-2">
        {children}
      </Popover.Button>
    </li>
  )
}

function MobileNavigation(props: any) {
  return (
    <Popover {...props}>
      <Popover.Button className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:hover:ring-white/20">
        Menu
        <ChevronDownIcon className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400" />
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800"
          >
            <div className="flex flex-row-reverse items-center justify-between">
              <Popover.Button aria-label="Close menu" className="-m-1 p-1">
                <CloseIcon className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
              </Popover.Button>
              <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                Navigation
              </h2>
            </div>
            <nav className="mt-6">
              <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                <MobileNavItem href="/services">Services</MobileNavItem>
                <MobileNavItem href="/about">About Us</MobileNavItem>
                <MobileNavItem href="/blog">Blog</MobileNavItem>
              </ul>
            </nav>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}


function NavItem({ href, children }: any) {
  let isActive = useRouter().pathname === href

  return (
    <li>
      <Link
        href={href}
        className={clsx(
          'relative block px-3 py-2 font-bold transition uppercase',
          isActive
            ? 'text-green-500'
            : 'hover:text-green-500'
        )}
      >
        {children}
        {isActive && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0" />
        )}
      </Link>
    </li>
  )
}

function DesktopNavigation() {
  const Router = useRouter();
  return (
    <nav className="pointer-events-auto hidden md:w-[50rem] md:flex items-center justify-between rounded-full bg-primary px-6 py-5 text-sm font-medium text-white shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur">
      <Image src="/logo.svg" alt="Grams Logo" width={100} height={100}/>
      <ul className="flex">
        <NavItem href="/services">Services</NavItem>
        <NavItem href="/about">About Us</NavItem>
        <NavItem href="/blog">Blog</NavItem>
      </ul>
      <button onClick={() => Router.push("/login")} type="button" className="transition-all delay-100 inline-flex items-center rounded-md border border-transparent bg-white px-4 py-2 text-base font-medium text-black shadow-sm hover:bg-green-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">Login</button>
    </nav>
  )
}

export function Header() {
  return (
    <header className="pointer-events-none relative z-50 flex flex-col">
      <div
        className="top-0 z-10 h-16 pt-2"
      >
        <Container
          className="top-[var(--header-top,theme(spacing.6))] w-full"
          style={{ position: 'var(--header-inner-position)' }}
        >
          <div className="relative flex gap-4">
            <div className="flex flex-1 justify-between md:justify-center bg-primary lg:bg-transparent p-2 lg:p-0 lg:rounded-none rounded-full">
              <Image className="lg:hidden block" src="/logo.svg" alt="Grams Logo" width={100} height={100}/>
              <MobileNavigation className="pointer-events-auto md:hidden" />
              <DesktopNavigation />
            </div>
          </div>
        </Container>
      </div>
    </header>
  )
}