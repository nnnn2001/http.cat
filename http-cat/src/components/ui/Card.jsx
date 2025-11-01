import Image from "next/image";

export default function Card({ children, className = "", imageUrl, name }) {
  return (
    <div
      className={`flex flex-col overflow-hidden rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow ${className}`}
    >
      <figure className="relative h-64 bg-lime-600">
        <Image
          src={imageUrl || "/placeholder-cat.jpg"}
          alt={name}
          className="object-cover"
          fill
          sizes="570px"
        />
      </figure>
      <div className="p-4">
        <h2 className="text-lg font-semibold">{name}</h2>
        {children}
      </div>
    </div>
  );
}
