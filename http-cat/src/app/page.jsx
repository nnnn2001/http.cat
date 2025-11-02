import PageContainer from "@/components/common/PageContainer";
import CatCardList from "@/components/ui/CatCardList";
import Image from "next/image";
import { getCats } from "@/lib/services/catApi";
import { getPlaiceholder } from "plaiceholder";

export const revalidate = 5;

export default async function Home() {
  console.log("Home");
  const cats = await getCats();

  const imageUrl =
    "https://res.cloudinary.com/daljqe0zr/image/upload/img_uhn1py.jpg";

  const response = await fetch(imageUrl, { next: { revalidate: 5 } });
  const buffer = await response.arrayBuffer();

  const { base64 } = await getPlaiceholder(Buffer.from(buffer));

  return (
    <PageContainer title="The Cat API">
      <div className="relative mx-auto w-[300px] h-[300px] flex justify-center items-center mb-4">
        <Image
          src={imageUrl}
          alt="The Cat API"
          fill
          sizes="300px"
          placeholder="blur"
          className="object-cover"
          blurDataURL={base64}
        />
      </div>
      <CatCardList items={cats} linkable={false} />
    </PageContainer>
  );
}
