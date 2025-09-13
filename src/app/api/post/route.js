import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client"; // singleton
export const runtime = "nodejs";

export async function POST(req) {
  const prisma = new PrismaClient();

  const { steps, water, stretch, exercise, rating, comment, user_id } =
    await req.json();

  const record = await prisma.healthdata.create({
    data: {
      steps: steps,
      water: water,
      stretch: stretch,
      exercise: exercise,
      rating: rating,
      comment: comment,
      user_id: user_id,
    },
  });

  return NextResponse.json(record, { status: 201 });
}
