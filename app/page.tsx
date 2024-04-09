import { cookies } from "next/headers";

import HomeContainer from "./(components)/HomeContainer";
import Link from "next/link";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="font-chivo text-4xl font-extralight">Button</h1>
      <h1 className="font-chivo text-4xl font-medium">Button</h1>
      <h1 className="font-chivo text-4xl font-bold">Button</h1>

      <h1 className="font-work_sans text-4xl font-extralight">Button</h1>
      <h1 className="font-work_sans text-4xl font-medium">Button</h1>
      <h1 className="font-work_sans text-4xl font-extrabold">Button</h1>
      <HomeContainer />
      <Link href={"/login"}>로그인 페이지로 갑니다.</Link>
    </main>
  );
}
