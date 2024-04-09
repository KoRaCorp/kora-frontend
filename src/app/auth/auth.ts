import NextAuth from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";
import { cookies } from "next/headers";

import { getCookie, setCookie } from "cookies-next";

// 41xLkT1xfS2vmOMxyKSaDK_ZlLeoZvphkuSeNoHBoiff3HSQblbYE9LK_AQKPXWbAAABjrvkSccFVMIyByjmyg

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  pages: {
    signIn: "/login",
  },
  providers: [
    KakaoProvider({
      clientId: process.env.AUTH_KAKAO_CLIENT_ID!,
      clientSecret: process.env.AUTH_KAKAO_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.AUTH_SECRET,
  callbacks: {
    async signIn(params) {
      console.log("유저", params);
      return true;
    },
  },
});
