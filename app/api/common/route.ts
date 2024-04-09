import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request: Request) {
  const KYSIKKOFUCK = "ZZang2";

  cookies().set("kyusikko2", KYSIKKOFUCK, {});

  return NextResponse.json({ KYSIKKOFUCK });
}
