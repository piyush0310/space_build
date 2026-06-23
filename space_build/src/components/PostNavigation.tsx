"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cities } from "@/data/cities";

type Props = {
  slug: string;
};

export default function PostNavigation({ slug }: Props) {
  const [randomCities, setRandomCities] = useState<typeof cities>([]);

  useEffect(() => {
    const availableCities = cities.filter((c) => c.slug !== slug);
    const shuffled = [...availableCities].sort(() => 0.5 - Math.random());
    setRandomCities(shuffled.slice(0, 3));
  }, [slug]);

  if (randomCities.length === 0) return null; // wait for client

  return (
    <div className="flex justify-center gap-6 py-6 border-t border-gray-300 mt-8">
      {randomCities.map((city) => (
        <Link
          key={city.slug}
          href={`/city/${city.slug}`}
          className="text-black hover:underline"
        >
          {city.name}
        </Link>
      ))}
    </div>
  );
}
