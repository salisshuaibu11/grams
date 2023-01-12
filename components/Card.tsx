import { CustomerIcon } from "./svgs";

export default function Card(props: any) {
  const { name, total } = props.data;
  return (
    <li
      key={name}
      className="col-span-1 border border-black p-2 text-primary rounded-lg bg-white shadow"
    >
      
      <div className="bg-gray-300 tracking-wider p-4 rounded-full w-fit">
        <CustomerIcon className="h-5 w-5 text-white" aria-hidden="true" />
      </div>
      <h3 className="text-lg mt-1">{name}</h3>
      <h3 className="text-lg">{total}</h3>
    </li>
  )
}