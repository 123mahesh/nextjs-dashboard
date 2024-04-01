import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { fetchItems } from '@/app/lib/data';
import ItemTable from '@/app/ui/item/table';
 
export default async function Page() {
  const items = await fetchItems();
  return(
    <ItemTable/>
  );
}