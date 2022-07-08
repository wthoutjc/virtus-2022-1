import NextAuth from "next-auth";

// Providers
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import { dbUsers } from "../../../database";

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    Credentials({
      name: "Custom Login",
      credentials: {
        email: {
          label: "E-mail",
          type: "email",
          placeholder: "Type your e-mail...",
          autoComplete: true,
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Type your password...",
          autoComplete: true,
        },
      },
      async authorize(credentials) {
        return await dbUsers.checkUserEmailPassword(
          credentials!.email,
          credentials!.password
        );
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
    newUser: "/auth/signup",
  },
  session: {
    strategy: "jwt",
    maxAge: 86400,
    updateAge: 17280,
  },
  callbacks: {
    async jwt({ token, account, user }) {
      // Verify credentials
      if (account) {
        token.accessToken = account.access_token;

        switch (account.type) {
          case "oauth":
            token.user = await dbUsers.OAuthToDbUser(
              user?.email || "",
              user?.name || ""
            );
            break;
          case "credentials":
            token.user = user;
            break;
        }
      }
      return token;
    },
    async session({ session, token, user }) {
      session.accessToken = token.accessToken;
      session.user = token.user as any;

      return session;
    },
  },
  secret: process.env.NEXT_PUBLIC_SECRET!,
});
