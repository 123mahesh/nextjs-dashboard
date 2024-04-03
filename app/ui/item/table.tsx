
import Image from 'next/image';
import { UpdateInvoice, DeleteInvoice, UpdateItem } from '@/app/ui/invoices/buttons';
import InvoiceStatus from '@/app/ui/invoices/status';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { fetchFilteredInvoices, fetchItems } from '@/app/lib/data';
import Link from 'next/link'

export default async function ItemTable() {
  const items = await fetchItems();

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
    <table className="hidden min-w-full text-gray-900 md:table">
        <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Item
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Item Name
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Item Link
                </th>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Brand
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Category
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Sub Category
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Gender
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Age group
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Unit
                </th>
              </tr>
        </thead>  
        <tbody className="bg-white">
        {items?.map((item) => (
            <tr
            key={item.item}
            className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
            >
                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                <div className="flex items-center gap-3">                      
                      <p>{item.item}</p>
                      <Image
                        src={item.item_thumbnail_path}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${item.item}'s profile picture`}
                      />
                    </div>
                </td>  
                <td className="whitespace-nowrap px-3 py-3">
                    {item.item_name}
                </td>  
                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <Link className='blue' href={item.item_link} prefetch={true}> Item Pic</Link>
                </td>  
                <td className="whitespace-nowrap px-3 py-3">
                    {item.brand}
                </td> 
                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    {item.category}
                </td>  
                <td className="whitespace-nowrap px-3 py-3">
                    {item.sub_category}
                </td> 
                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    {item.gender}
                </td>  
                <td className="whitespace-nowrap px-3 py-3">
                    {item.age_group}
                </td> 
                <td className="whitespace-nowrap px-3 py-3">
                    {item.unit}
                </td> 
                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                    <UpdateItem item={item.item} />
                    </div>
                  </td>
            </tr>
                
        ))}
        </tbody>      
    </table>
    </div>
    </div>
    </div>
  );
}
