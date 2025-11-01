import { getCatById } from "@/lib/services/catApi";

export async function GET(request, { params }) {
  const { id } = await params;

  try {
    const catData = await getCatById(id);
    return Response.json();
  } catch (error) {
    return Response.json(
      { error: "고양이 데이터를 가져오는 것에 실패했습니다" },
      { status: 500 }
    );
  }
}
