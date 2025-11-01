"use client";

export default function CatDetail({ cat }) {
  if (!cat) {
    return <div>고양이 정보를 찾을 수 없습니다</div>;
  }

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="relative w-full md:w-1/2 h-[400px] bg-lime-500 rounded-lg overflow-hidden">
        <img
          src={cat.url}
          alt={cat.breeds[0].name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full md:w-1/2 space-y-6">
        <h2 className="text-2xl font-bold mb-2">기원</h2>
        <p className="text-gray-700">{cat.breeds[0].origin}</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-2">설명</h2>
        <p className="text-gray-700">{cat.breeds[0].description}</p>
      </div>
    </div>
  );
}
