import Image from "next/image";
import { useRouter } from "next/router";

const navigation = {
  company: [
    { name: 'About Us', href: '#' },
    { name: 'Solution', href: '#' },
  ],
  legal: [
    { name: 'hello@grams.africa', href: '#' },
    { name: '+234 81 444 550 25', href: '#' },
  ],
  social: [
    {
      name: 'Twitter',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: (props: any) => (
        <svg viewBox="0 0 20 20" fill="none" {...props}>
          <path d="M19.4568 19.9999V19.999H19.4614V12.664C19.4614 9.07569 18.738 6.31152 14.8092 6.31152C12.9205 6.31152 11.6531 7.41819 11.1357 8.46736H11.081V6.64652H7.35596V19.999H11.2348V13.3874C11.2348 11.6465 11.5438 9.96319 13.5628 9.96319C15.5522 9.96319 15.5819 11.9499 15.5819 13.499V19.9999H19.4568Z" fill="currentColor"/>
          <path d="M1.03992 6.64795H4.92342V20.0004H1.03992V6.64795Z" fill="currentColor"/>
          <path d="M2.97996 0C1.73827 0 0.730713 1.07583 0.730713 2.40167C0.730713 3.7275 1.73827 4.82583 2.97996 4.82583C4.22165 4.82583 5.2292 3.7275 5.2292 2.40167C5.22842 1.07583 4.22087 0 2.97996 0V0Z" fill="currentColor"/>
        </svg>
      ),
    }
  ],
}

export function Footer() {
  const Router = useRouter();
  return (
    <footer className="bg-primary" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="pb-8 xl:grid xl:grid-cols-5 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-10">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-2xl font-medium text-white">Company</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name} className="flex space-x-2 justify-start">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>

                      <a href={item.href} className="text-base text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div className="md:mt-0 text-white col-start-1 xl:col-start-2 xl:text-right">
                <h3 className="text-2xl font-medium">Contact Us</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>

        <div className="lg:flex lg:items-center lg:justify-between mt-10">
          <div>
            <Image src="/logo.svg" alt="logo" width={100} height={100}/>
          </div>
          <form className="mt-4 sm:flex sm:max-w-md lg:mt-0">
            <div className="rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button onClick={() => Router.push("/login")} type="button" className="transition-all delay-100 inline-flex items-center rounded-md border border-transparent bg-white px-4 py-2 text-base font-medium text-black shadow-sm hover:bg-green-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">Dashboard Login</button>
            </div>
          </form>
        </div>

        <div className="mt-2 border-t border-gray-700 pt-3 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-last">
            {navigation.social.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-300 hover:text-gray-400">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <div className="text-gray-400">
            <span>Terms and Condition</span>
            <span>.</span>
            <span>Privacy Policy</span>
          </div>
          <p className="text-base text-gray-400 md:order-first">
            &copy; 2022 Grams by TARKIN Co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
