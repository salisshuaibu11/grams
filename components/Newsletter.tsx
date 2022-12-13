export function Newsletter() {
  return (
    <div className="bg-secondary lg:mx-10 mx-5 rounded-md mb-10">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:py-16 lg:px-8">
        <div className="lg:w-0 lg:flex-1">
          <h2 className="text-lg tracking-tight text-black/80 sm:text-2xl" id="newsletter-headline">
            Stay updated with out newsletter
          </h2>
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-8">
          <form className="sm:flex">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email-address"
              type="email"
              autoComplete="email"
              required
              className="w-full rounded-md border border-transparent px-5 py-3 placeholder-gray-500 focus:border-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 sm:max-w-xs"
              placeholder="your@mail.com"
            />
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-primary px-5 py-3 text-base font-medium text-white focus:outline-none focus:ring-2 hover:bg-green-900 focus:ring-green-900 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
