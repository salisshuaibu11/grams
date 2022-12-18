import Pagination from "./Paginations"

const people = [
  {
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    description: 'Loading Request',
    type: 'Amount',
    amount: '250,000',
    status: 'Success',
    date: 'Jan 30,22 - 05:30pm',
  }
]

export default function Table() {
  return (
    <div className="mt-10">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Recent Transactions</h1>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <a
            className="underline"
          >
            View all
          </a>
        </div>
      </div>
      <div className="mt-2 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-normal text-primary sm:pl-6">
                      S/N
                    </th>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-normal text-primary sm:pl-6">
                      Name
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-normal text-primary">
                      Description
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-normal text-primary">
                      Type
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-normal text-primary">
                      Amount
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-normal text-primary">
                      Status
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-normal text-primary">
                      Date/Time
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {people.map((person) => (
                    <tr key={person.title}>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="text-gray-500">1</div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="text-gray-500">{person.name}</div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="text-gray-500">{person.description}</div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="text-gray-500">{person.type}</div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="text-gray-500">{person.amount}</div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                          {person.status}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="text-gray-500">{person.date}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Pagination />
    </div>
  )
}
