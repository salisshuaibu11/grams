import Image from "next/image"

export function Financial() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-6 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">We are unlocking financial inclusion for the African Farmer</h2>
            <p className="text-md text-gray-500">
              We provide tailored financial services to smallholder farmers in Africa, Allowing them access to banking and credit services without the need for a physical bank branch. With GRAMS, we take banking to the rural farmland.
            </p>
          </div>
          <ul
            role="list"
            className="grid justify-items-center grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8"
          >
            <li className="relative group bg-green-500 hover:bg-[#07352E] transition-all rounded-md w-[9.5rem] justify-center items-center flex-col">
              <div className="absolute group-hover:z-10 transision-all delay-100 -z-10 bg-[#07352E] rounded-md w-full h-full flex justify-center items-center">
                <p className="text-white text-sm px-4">
                  Access a secure and reliable banking network, take control of your finances and focus on what matters most, your FARM.
                </p>
              </div>
              <div className="block w-full h-full">
                <div className="bg-[#07352E] flex justify-center p-6 rounded-md w-full">
                  <img alt="/banking Logo" src="/banking.svg" width={100} height={100} className="h-[6rem]"/>
                </div>
                <div className="text-white w-full py-5 uppercase font-semibold">
                  <span className="">Rural Banking</span>
                </div>
              </div>
            </li>

            <li className="relative group bg-green-500 hover:bg-[#07352E] transition-all rounded-md w-[9.5rem] justify-center items-center flex-col">
              <div className="absolute group-hover:z-10 transision-all delay-100 -z-10 bg-[#07352E] rounded-md w-full h-full flex justify-center items-center">
                <p className="text-white text-sm px-4">
                  Unlock the Potential of your business with GRAMS specialized lending services for agricultural purposes
                </p>
              </div>
              <div className="block w-full h-full">
                <div className="bg-[#07352E] flex justify-center py-6 rounded-md w-full">
                  <img alt="/banking Logo" src="/credit.svg" width={100} height={100} className="h-[6rem]"/>
                </div>
                <div className="text-white w-full py-5 uppercase font-semibold">
                  <span className="">credit</span>
                </div>
              </div>
            </li>

            <li className="relative group bg-green-500 hover:bg-[#07352E] transition-all rounded-md w-[9.5rem] justify-center items-center flex-col">
              <div className="absolute group-hover:z-10 transision-all delay-100 -z-10 bg-[#07352E] rounded-md w-full h-full flex justify-center items-center">
                <p className="text-white text-sm px-4">
                  Get the most out of your harvest with GRAMS. Recieve payment quickly and securely for the sale of your commodities
                </p>
              </div>
              <div className="block w-full h-full">
                <div className="bg-[#07352E] flex justify-center py-6 rounded-md w-full">
                  <img alt="/banking Logo" src="/payment.svg" width={100} height={100} className="h-[6rem]"/>
                </div>
                <div className="text-white w-full py-5 uppercase font-semibold">
                  <span className="">payment</span>
                </div>
              </div>
            </li>
          </ul>

          <div className="pt-10 space-y-6 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-xl">
            <h2 className="text-3xl font-normal tracking-tight sm:text-4xl">
              We are not going for frills, we are here for the essentials.
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}