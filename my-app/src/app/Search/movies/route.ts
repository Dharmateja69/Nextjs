import { NextRequest, NextResponse } from "next/server";
import { movies } from "../dt";

//for search we will use request:NextRequest,and for no object we will use _req, for obj we will use req
export const GET = async (req: NextRequest) => {
  const searchquery = await req.nextUrl.searchParams;
  const query = searchquery.get("name");
  const filtered = movies.filter((i) =>
    i.name.toLowerCase().includes(query ?? "")
  );

  return NextResponse.json(filtered);
};
