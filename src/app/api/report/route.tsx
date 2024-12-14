import { NextResponse } from "next/server";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function GET(req: Request) {
  const token = req.headers.get("authorization")?.split("Bearer ")[1];

  if (!token) {
    return NextResponse.json({ message: "Authorization token missing" }, { status: 401 });
  }

  try {
    const response = await fetch(`${BASE_URL}/report/summary/`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch report");
    }

    const data = await response.json();
    return NextResponse.json(data.data);
  } catch (err: unknown) {
  
    if (err instanceof Error) {
      return NextResponse.json({ message: err.message || "Failed to fetch report" }, { status: 500 });
    }

    
    return NextResponse.json({ message: "An unexpected error occurred" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const token = req.headers.get("authorization")?.split("Bearer ")[1];

  if (!token) {
    return NextResponse.json({ message: "Authorization token missing" }, { status: 401 });
  }

  try {
    const response = await fetch(`${BASE_URL}/logout`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Logout failed");
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (err: unknown) {
  
    if (err instanceof Error) {
      return NextResponse.json({ message: err.message || "Logout failed" }, { status: 500 });
    }

  
    return NextResponse.json({ message: "An unexpected error occurred" }, { status: 500 });
  }
}
