import CatCard from "./CatCard";

export default function CatCardList({
  items,
  getImageUrl = (item) => item.url,
  getName = (item) => item.breeds[0]?.name || "고양이",
  gridClassName = "grid-cols-1 sm:grid-cols-2 md:gird-cols-4 gap-4",
  linkable = true,
}) {
  return (
    <div className={`grid ${gridClassName}`}>
      {items.map((item) => (
        <CatCard
          key={item.id}
          id={item.id}
          imageUrl={getImageUrl(item)}
          name={getName(item)}
          linkable={linkable}
        />
      ))}
    </div>
  );
}
