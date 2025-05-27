import { NextResponse } from "next/server";

export const GET = async (
  _req: Request,
  { params }: { params: { id: string } }
) => {
  const { id } = await params;
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  const single = data.find((i: any) => i.id === +id);
  return single
    ? NextResponse.json(single)
    : NextResponse.json("not found", { status: 404 });
};
