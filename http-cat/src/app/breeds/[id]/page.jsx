import PageContainer from "@/components/common/PageContainer";
import BreedDetailHeader from "@/components/ui/BreedDetailHeader";
import CatDetail from "@/components/ui/CatDetail";
import { getCatById } from "@/lib/services/catApi";

export default function CatBreedPage({ params }) {
  console.log("SSR-CatBreedPage");
  const { id } = params;
  const cats = getCatById(id);
  const cat = cats[0];

  return (
    <PageContainer title={cat.breeds[0].name}>
      <BreedDetailHeader breed={cat.breeds[0]} />
      <CatDetail cat={cat} />
    </PageContainer>
  );
}
