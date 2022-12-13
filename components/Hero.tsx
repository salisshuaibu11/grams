import Image from "next/image"

import { Container } from "./Container"

export default function Hero() {
  return (
    <div className="relative pt-10 pb-20 sm:py-24">
      <div className="absolute inset-x-0 -top-48 -bottom-14 overflow-hidden bg-indigo-50">
        {/* <Image
          className="absolute top-0 left-0 translate-y-[-10%] translate-x-[-55%] -scale-x-100 sm:left-1/2 sm:translate-y-[-6%] sm:translate-x-[-98%] lg:translate-x-[-106%] xl:translate-x-[-122%]"
          src="/pattern.jpeg"
          alt=""
          width={100}
          height={1495}
          priority
          unoptimized
        /> */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-green-50" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12 text-center">
          <h1 className="text-5xl tracking-tighter text-black/80 sm:text-7xl">
            Banking made simple for <span className="text-green-500">Africa’s</span> smallholder Farmers
          </h1>
          <div className="mt-6 text-xl tracking-tight text-black/90 font-light">
            <p>
              Use Grams to access banking and financial services tailored to your agricultural needs and manage your finances easier.
            </p>
          </div>
          <button type="button" className="mt-8 transition-all delay-100 inline-flex items-center rounded-md border border-transparent bg-green-500 px-4 py-2 text-base font-medium text-black shadow-sm hover:bg-green-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">Learn more</button>
        </div>
      </Container>
    </div>
  )
}