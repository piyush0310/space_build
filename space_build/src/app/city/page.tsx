import Link from "next/link";
import { cities } from "@/data/cities";

const ITEMS_PER_PAGE = 15;

interface CityListingPageProps {
  searchParams: Promise<{
    page?: string;
  }>;
}

export default async function CityListingPage({ searchParams }: CityListingPageProps) {
  // Await the searchParams promise
  const resolvedSearchParams = await searchParams;
  
  // Current page number (default = 1)
  const currentPage = Number(resolvedSearchParams?.page ?? 1);

  // Pagination math
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedCities = cities.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const totalPages = Math.ceil(cities.length / ITEMS_PER_PAGE);

  return (
    <main className="min-h-screen bg-[#FFF8F3] p-8">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16 mt-10">
          <h1 className="text-3xl md:text-5xl font-serif font-light text-black tracking-widest">
            Services by City
          </h1>
          <p className="mt-6 text-gray-700 max-w-2xl mx-auto">
            Discover our curated list of professional services across top
            destinations in India. Select a city to explore our comprehensive
            service offerings and expertise.
          </p>
        </div>

        {/* City cards */}
        {paginatedCities.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedCities.map((city) => (
              <Link
                key={city.slug}
                href={`/city/${city.slug}`}
                className="group relative bg-white block rounded-2xl text-black overflow-hidden shadow-lg hover:shadow-2xl transition"
              >
                <div className="p-5 bg-white">
                  <h4 className="text-1xl text-left font-semibold group-hover:text-[#d4a574] transition">
                    {city.name}
                  </h4>
                  <p className="mt-2 text-gray-600">{city.description}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="rounded-xl bg-white shadow p-8 text-center">
            <p className="text-gray-600 text-lg">
              No services available at the moment. Stay tuned!
            </p>
          </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-12">
            {currentPage > 1 && (
              <Link
                href={`/city?page=${currentPage - 1}`}
                className="px-4 py-2 rounded-lg bg-gray-200 text-black hover:bg-gray-300 text-sm"
              >
                ← Prev
              </Link>
            )}

            <span className="text-sm text-gray-700">
              Page {currentPage} of {totalPages}
            </span>

            {currentPage < totalPages && (
              <Link
                href={`/city?page=${currentPage + 1}`}
                className="px-4 py-2 rounded-lg bg-gray-200 text-black hover:bg-gray-300 text-sm"
              >
                Next →
              </Link>
            )}
          </div>
        )}
      </div>
    </main>
  );
}