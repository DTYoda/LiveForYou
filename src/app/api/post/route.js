import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client"; // singleton
export const runtime = "nodejs";

export async function POST(req) {
  const prisma = new PrismaClient();

  const {
    title,
    steps,
    water,
    stretch,
    exercise,
    rating,
    comment,
    user_email,
  } = await req.json();

  const user = await prisma.users.findUnique({ where: { email: user_email } });
  console.log(user);
  if (user != null) {
    const newData = await prisma.healthdata.create({
      data: {
        steps: steps,
        water: water,
        stretch: stretch,
        exercise: exercise,
        rating: rating,
        comment: comment,
        user_id: user.id,
      },
    });
    const newPost = await prisma.posts.create({
      data: {
        user_id: user.id,
        health_id: newData.id,
        post_title: title,
      },
    });
  }

  return NextResponse.json({ status: 201 });
}
