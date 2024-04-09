"use client";
import { axiosInstance } from "@/src/shared/api";

export default function LoginPage() {
  const handleClick = async () => {
    const response = await axiosInstance(
      `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.AUTH_KAKAO_CLIENT_ID}&redirect_uri=${process.env.KAKAO_REDIRECT_URI}&response_type=code`,
      { method: "GET", withCredentials: true }
    );

    console.log(response);
  };

  return (
    <>
      <button className="border-2 p-2" onClick={handleClick}>
        카카오 로그인
      </button>
      <a
        href={`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.AUTH_KAKAO_CLIENT_ID}&redirect_uri=${process.env.KAKAO_REDIRECT_URI}&response_type=code`}
      >
        캐캐오 로그인
      </a>
    </>
  );
}
