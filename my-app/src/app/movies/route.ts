import { NextResponse } from "next/server";

export const GET = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return NextResponse.json(data);
};

export const POST = async (req: Request) => {
  try {
    // Get the request body
    const newData = await req.json();

    // (Simulated) Fetch existing users
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const existingUsers = await response.json();

    // Push new data to the copy of existing users (just for simulation)
    const updatedUsers = [...existingUsers, newData];

    // Return the new user as response
    return NextResponse.json(newData); // don't stringify here
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
};
