"use client";

export default function ErrorDisplay({ message }) {
  return (
    <div className="min-h-screen flex items-center justify-center text-red-500">
      {message}
    </div>
  );
}
