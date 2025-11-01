export default function BreedDetailHeader({ breed }) {
  return (
    <div className="mb-6 p-4 bg-lime-200 rounded-lg">
      <h1 className="text-2xl font-bold">{breed.name}</h1>
      <div className="flex flex-wrap items-center mt-2 gap-3">
        <span>원산지: {breed.origin}</span>
        <span>수명: {breed.life_span}</span>
        <span>성격: {breed.temperament}</span>
        <span>체중: {breed.weight?.metric}</span>
        <span>친화력: {breed.affection_level}</span>
      </div>
    </div>
  );
}
