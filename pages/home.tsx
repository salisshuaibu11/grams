import Layout from "../components/layout";
import Table from "../components/Table";
import { CustomerIcon } from "../components/svgs";

const transactions = [
  {
    name: 'Customers',
    total: '1,000',
  },
  {
    name: 'Disbursments',
    total: '1,000',
  },
  {
    name: 'Vendor Payments',
    total: '1,000',
  },
  {
    name: 'Repayments',
    total: '1,000',
  },
]

export default function Home() {
  return (
    <>
      <Layout title="">
        <header className="w-full mb-5 flex justify-between items-center">
          <h2 className="text-primary text-2xl font-bold">Quick Overview</h2>
          <a href="" className="underline">filter by date</a>
        </header>
        <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-4">
          {transactions.map((transaction) => (
            <li
              key={transaction.name}
              className="col-span-1 border border-black p-2 text-primary rounded-lg bg-white shadow"
            >
              
              <div className="bg-gray-300 tracking-wider p-4 rounded-full w-fit">
                <CustomerIcon className="h-5 w-5 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-xl mt-1">Total {transaction.name}</h3>
              <h3 className="text-lg">{transaction.total}</h3>
            </li>
          ))}
        </ul>
        <div>
          <Table />
        </div>
      </Layout>
    </>
  )
}