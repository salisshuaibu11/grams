const features = [
  {
    id: 1,
    description:
      'Grams offers personalized credit to smallholder farmers, based on their unique credit history and needs. This credit helps farmers to grow their businesses and improve their lives.',
  },
  {
    id: 2,
    description:
      'Grams is digital. We have a network of rural agency banking locations that provide access to our services in a convenient and affordable way.',
  },
  {
    id: 3,
    description:
      "Smallholder farmers need a way to make payments and access their money quickly and easily. That's why Grams offers payments accounts and ATM cards. These allow farmers to make payments and access their money anytime, anywhere.",
  },
];

export function Features() {
  return (
    <div className="overflow-hidden pb-16 lg:pb-24">
      <div className="relative mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8">
        <div className="relative lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
          
          <div className="relative transition-all delay-75 bg-black/50 hover:bg-black/5 w-full h-full hover:rounded-xl rounded-md -mx-4 mt-10 lg:mt-0" aria-hidden="true">
            <img
              className="absolute mx-auto opacity-0.7 -z-10 h-full "
              src="/feature.png"
              alt=""
            />
          </div>
          
          <div className="relative">
            <dl className="mt-10 space-y-10">
              {features.map((item) => (
                <div key={item.id} className="flex items-center">
                  <dt>
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white" />
                  </dt>
                  <dd className="ml-6 text-base text-black/90">{item.description}</dd>
                </div>
              ))}
            </dl>
          </div>

        </div>
      </div>
    </div>
  )
}
