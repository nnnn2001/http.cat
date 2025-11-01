"use client";

import Link from "next/link";
import Card from "./Card";

export default function CatCard({
  id,
  imageUrl,
  name,
  linkable = true,
  children,
}) {
  if (linkable) {
    return (
      <Link href={`/breeds/${id}`}>
        <Card imageUrl={imageUrl} name={name}>
          {children}
        </Card>
      </Link>
    );
  }

  return (
    <Card imageUrl={imageUrl} name={name}>
      {children}
    </Card>
  );
}
