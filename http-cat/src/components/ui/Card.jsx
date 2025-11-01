export default function Card({ children, className = "", imageUrl, name }) {
  return (
    <div
      className={`flex flex-col overflow-hidden rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow ${className}`}
    >
      <div className="relative h-64 bg-lime-600">
        <img
          src={imageUrl || "/placeholder-cat.jpg"}
          alt={name}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold">{name}</h2>
        {children}
      </div>
    </div>
  );
}
