import Layout from "../components/layout";
import Table from "../components/Table";
import { CustomerIcon } from "../components/svgs";
import Card from "../components/Card";

const transactions = [
  {
    name: 'Total Credit Disbursed',
    total: '1,000',
  },
  {
    name: 'Total Repayments',
    total: '1,000',
  },
  {
    name: 'Total Inputs Purchased',
    total: '1,000',
  },
  {
    name: 'Total Balance',
    total: '1,000',
  },
]

export default function Transactions() {
  return (
    <>
      <Layout title="">
        <header className="w-full mb-5 flex justify-between items-center">
          <h2 className="text-primary text-2xl font-bold">All Transactions</h2>
        </header>
        <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-4">
          {transactions.map((transaction) => (
            <Card key={transaction.name} data={transaction}/>
          ))}
        </ul>
        <div>
          <Table />
        </div>
      </Layout>
    </>
  )
}