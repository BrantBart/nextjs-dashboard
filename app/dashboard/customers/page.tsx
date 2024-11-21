import Search from '@/app/ui/search';
import CustomersTable from '@/app/ui/customers/table'; // Import CustomersTable
import { lusitana } from '@/app/ui/fonts';
import { fetchFilteredCustomers } from '@/app/lib/data'; // Import fetchFilteredCustomers

export default async function Page(props: { searchParams?: Promise<{ query?: string }> }) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';

  // Fetch filtered customers with the query string
  const customers = await fetchFilteredCustomers(query);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Customers</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search Customers..." />
      </div>
      {/* Pass the fetched customers to CustomersTable */}
      <CustomersTable customers={customers} />
    </div>
  );
}
