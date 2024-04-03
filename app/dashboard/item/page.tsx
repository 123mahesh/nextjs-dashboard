import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { fetchItems } from '@/app/lib/data';
import ItemTable from '@/app/ui/item/table';
import Search from '@/app/ui/search';
import { CreateItem } from '@/app/ui/item/buttons';
 
export default async function Page() {
  const items = await fetchItems();
  return(
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Items</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search items..." />
        <CreateItem />
      </div>
    <ItemTable/>
    </div>
  );
}