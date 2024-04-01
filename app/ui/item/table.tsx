
import Image from 'next/image';
import { UpdateInvoice, DeleteInvoice } from '@/app/ui/invoices/buttons';
import InvoiceStatus from '@/app/ui/invoices/status';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { fetchFilteredInvoices, fetchItems } from '@/app/lib/data';

export default async function ItemTable() {
  const items = await fetchItems();

  return (
    <table className="hidden min-w-full text-gray-900 md:table">
        <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Item
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Item Name
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
                    {item.item}
                </td>  
                <td className="whitespace-nowrap px-3 py-3">
                    {item.item_name}
                </td>  
            </tr>
                
        ))}
        </tbody>      
    </table>
  );
}
