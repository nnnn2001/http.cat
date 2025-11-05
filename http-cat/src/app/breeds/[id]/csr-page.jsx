"use client";

import PageContainer from "@/components/common/PageContainer";
import BreedDetailHeader from "@/app/breeds/[id]/_components/BreedDetailHeader";
import CatDetail from "@/components/ui/CatDetail";
import { getCatById } from "@/lib/services/catApi";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Loading from "@/components/ui/Loading";
import ErrorDisplay from "@/components/ui/ErrorDisplay";

export default function CatBreedPage({ params }) {
  console.log("SSR-CatBreedPage");
  const { id } = useParams;
  const [cat, setCat] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    async function loadCat() {
      try {
        const cats = await fetch(`/api/cat-img-list`).then((res) => res.json());
        const cat = cats[0];
        setCat(cat);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    loadCat();
  }, [id]);

  if (loading) return <Loading />;
  if (error) return <ErrorDisplay message={error.message} />;
  if (!cat) return <ErrorDisplay message="고양이 정보를 찾을 수 없습니다" />;
  return (
    <PageContainer title={cat.breeds[0].name}>
      <BreedDetailHeader breed={cat.breeds[0]} />
      <CatDetail cat={cat} />
    </PageContainer>
  );
}
