import { NextResponse } from "next/server";
import { hash } from "crypto";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

export async function POST(request) {
  const prisma = new PrismaClient();
  try {
    const { email, password, name, username } = await request.json();

    const hashedPassword = await hash(password, 10);

    const newUser = await prisma.users.create({
      username: username,
      password: hashedPassword,
      email: email,
      name: name,
    });
  } catch (e) {
    console.log(e);
  }
}
