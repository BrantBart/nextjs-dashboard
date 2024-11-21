import Search from '@/app/ui/search';
import CustomersTable from '@/app/ui/customers/table'; // Import CustomersTable
import { lusitana } from '@/app/ui/fonts';
import { fetchFilteredCustomers } from '@/app/lib/data'; // Import fetchFilteredCustomers
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers',
};
export default async function Page(props: { searchParams?: Promise<{ query?: string }> }) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';

  // Fetch filtered customers with the query string
  const customers = await fetchFilteredCustomers(query);

  return (
    <div className="w-full">
      {/* Pass the fetched customers to CustomersTable */}
      <CustomersTable customers={customers} />
    </div>
  );
}
