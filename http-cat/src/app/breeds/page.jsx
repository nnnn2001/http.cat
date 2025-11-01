import { getCatBreeds } from "@/lib/services/catApi";
import Link from "next/link";
import Image from "next/image";

export default async function CatBreeds() {
  const breeds = await getCatBreeds();

  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 ">
      <h1 className="font-bold text-3xl mb-4">고양이 품종 리스트</h1>

      <main className="w-full max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {breeds.map((breed) => (
            <Link href={`/breeds/${breed.id}`} key={breed.id}>
              <div
                key={breed.id}
                className="flex flex-col overflow-hidden rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative h-64 bg-lime-400">
                  <Image
                    src={breed.image?.url || "/placeholder-cat.jpg"}
                    alt={breed.name}
                    className="object-cover"
                    fill
                    sizes="570px"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-semibold">{breed.name}</h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
