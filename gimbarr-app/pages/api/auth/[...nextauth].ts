
import { NextApiHandler } from "next";
import NextAuth from "next-auth"

import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"
import EmailProvider from "next-auth/providers/email";
import CredentialsProvider from "next-auth/providers/credentials"

import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from '../../../lib/prisma'
import { PrismaClient } from "@prisma/client"

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
export default authHandler;

const options = {
    
    providers: [
        EmailProvider({
            server: {
              host: process.env.EMAIL_SERVER_HOST,
              port: process.env.EMAIL_SERVER_PORT,
              auth: {
                user: process.env.EMAIL_SERVER_USER,
                pass: process.env.EMAIL_SERVER_PASSWORD
              }
            },
            from: process.env.EMAIL_FROM
          }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
      ],

      adapter: PrismaAdapter(prisma),

      pages:{
        signIn: "/auth/login"
      }
}