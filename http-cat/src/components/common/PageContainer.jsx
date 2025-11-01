"use client";

export default function PageContainer({ title, children }) {
  return(
  <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-20">
    <h1 className="text-3xl font-bold mb-4">{title}</h1>
    <main className="w-full max-w-6xl">{children}</main>
  </div>
  );
}
