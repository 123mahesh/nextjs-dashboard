import Form from '@/app/ui/item/create-form';
import Breadcrumbs from '@/app/ui/item/breadcrumbs';
import { fetchCustomers, fetchItems } from '@/app/lib/data';
 
export default async function Page() {
  const items = await fetchItems();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Items', href: '/dashboard/item' },
          {
            label: 'Create Item',
            href: '/dashboard/item/create',
            active: true,
          },
        ]}
      />
      <Form item={items} />
    </main>
  );
}