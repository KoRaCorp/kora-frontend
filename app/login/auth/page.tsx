"use client";

import { axiosInstance } from "@/src/shared/api";
import { redirect, useSearchParams } from "next/navigation";

import { getCookie, setCookie } from "cookies-next";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const fetchData = async (code: string, callBack: any) => {
  try {
    const response = await fetch(`http://localhost:3000/api/auth?code=${code}`);
    const data = response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  } finally {
    callBack();
  }
};

export default function AuthPage() {
  const router = useRouter();
  const params = useSearchParams();
  const code = params.get("code");

  useEffect(() => {
    fetchData(code || "", () => {
      router.replace("/");
    });
  }, []);

  return <div>어스 페이지</div>;
}
