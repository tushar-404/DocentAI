import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google,
  ],
  pages: {
    signIn: "/login", 
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname === "/";
      const isOnLoginPage = nextUrl.pathname === "/login";

      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; 
      } else if (isOnLoginPage && isLoggedIn) {
        return Response.redirect(new URL("/", nextUrl)); 
      }
      return true;
    },
  },
})