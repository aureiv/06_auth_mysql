import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";

export async function GET(request) {
  const user = await verifyToken(request.cookies.get("token")?.value);

  if (!user) {
    return NextResponse.json(
      { status: "error", message: "Unauthorized" },
      { status: 401 }
    );
  }

  return NextResponse.json({ id: user.id, email: user.email, fullname: user.fullname });
}