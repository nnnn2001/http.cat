" use client ";

export default function Loading({ message = "로딩 중..." }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      {message}
    </div>
  );
}
