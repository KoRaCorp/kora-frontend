import axios from "axios";
import { cookies } from "next/headers";

import { NextResponse } from "next/server";

export async function GET(request: Request) {
  //   const cookieStore = cookies();

  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  try {
    const response = await axios(
      `${process.env.KORA_BACKEND_ENDPOINT}/api/auth/kakao/login?code=${code}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );

    const accessToken = response.data.data.accessToken;
    const refreshToken = response.data.data.refreshToken;

    // 브라우저에 쿠키를 심어주는 것
    cookies().set("accessToken", accessToken, { httpOnly: true });
    cookies().set("refreshToken", refreshToken, { httpOnly: true });

    return NextResponse.json({ accessToken, refreshToken });
  } catch (error) {
    console.log(error);
  }
}
