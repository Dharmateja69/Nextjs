import { NextResponse } from "next/server";
import { movies } from "../db";

export const PATCH = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  const { id } = await params;
  const movie = movies.find((index: any) => index.id === +id);
  if (!movie) {
    return new Response(JSON.stringify({ error: "Movie not found" }), {
      status: 404,
    });
  }
  try {
    const updatemovie = await req.json();
    const movieindex = movies.findIndex((m) => m.id === +id);
    movies[movieindex] = { ...movie, ...updatemovie };
    return NextResponse.json(movies[movieindex]);
  } catch (error) {
    return NextResponse.json("Not updated", { status: 404 });
  }
};

export const DELETE = async (
  _req: Request,
  { params }: { params: { id: string } }
) => {
  const { id } = await params;
  const index = movies.findIndex((i: any) => i.id === +id);
  if (index == -1) {
    return NextResponse.json("Not found", { status: 404 });
  }
  movies.splice(index, 1);
  return NextResponse.json("deleted successfuly", { status: 200 });
};
