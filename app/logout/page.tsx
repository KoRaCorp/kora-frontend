"use client";

import { axiosInstance } from "@/src/shared/api";
import { useEffect, useState } from "react";

export default function LogoutPage() {
  // const response = await fetch("http://localhost:3000/api/common");
  // const data = await response.json();
  // console.log(data);

  const [data, setData] = useState();
  const fetchData = async () => {
    const response = await fetch("http://localhost:3000/api/common");
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>로그아웃 하러가자</h1>
    </div>
  );
}
