import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import { PrismaClient } from "@prisma/client";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) return null;
        const prisma = new PrismaClient();
        const user = await prisma.users.findUnique({
          where: {
            email: credentials.email,
          },
        });
        if (!user || !user.password) return null;

        const passwordCorrect = await compare(
          credentials.password,
          user.password
        );

        if (passwordCorrect) {
          return {
            id: user.id,
            email: user.email,
            username: user.username,
            name: user.name,
          };
        }
        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
