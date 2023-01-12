import Layout from "../components/layout";
import Card from "../components/Card";

const requests = [
  {
    name: 'Approved Loans',
    total: '20',
  },
  {
    name: 'Pending Loans',
    total: '15',
  }
]

const repayments = [
  {
    name: 'Amount Repayed',
    total: '1,000',
  },
  {
    name: 'Amount Due',
    total: '1,000',
  },
  {
    name: 'Amount Pending',
    total: '1,000',
  }
]

export default function Home() {
  return (
    <>
      <Layout title="">
        <div className="mb-10">
          <h2 className="text-2xl my-4">Requests</h2>
          <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {requests.map((request) => (
              <Card key={request.name} data={request}/>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl my-4">Repayments</h2>
          <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {repayments.map((repayment) => (
              <Card key={repayment.name} data={repayment}/>
            ))}
          </ul>
        </div>
      </Layout>
    </>
  )
}