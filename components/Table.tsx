import { useMemo } from "react";
import MaterialTable from "material-table";
import tableIcons from "./MaterialTableIcons";

const data = [
  {
    no: '1',
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    description: 'Loading Request',
    type: 'Amount',
    amount: '250,000',
    status: 'Success',
    date: 'Jan 30,22 - 05:30pm',
  }
]

export default function Table(props: any) {
  const columns = useMemo(() => [
    {
      title: "S/N",
      field: 'no'
    },
    {
      title: "Name",
      field: 'name'
    },
    {
      title: "Title",
      field: 'title'
    },
    {
      title: "description",
      field: 'description'
    },
    {
      title: "Type",
      field: 'type'
    },
    {
      title: "Amount",
      field: 'amount'
    },
    {
      title: "Status",
      field: "status"
    },
    {
      title: 'Date',
      field: 'date'
    }
  ], []);
  return (
    <MaterialTable 
      title="Recent Transactions"
      data={data}
      options={{
        exportButton: true,
      }}
      columns={columns}
      icons={tableIcons}
    />
  )
}