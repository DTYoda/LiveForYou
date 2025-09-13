import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(request) {
    const prisma = new PrismaClient();
    const { email } = await request.json();

    try {
        let ids = await prisma.users.findMany();
        let idDict = {};
        ids.array.forEach(element => {
            idDict[e.email] = e.id
        });
        console.log(ids);

        let data = await prisma.users.findMany({ where: { email: email } });
        let friends = await prisma.relationships.findMany({ where: { first_id_joined: data[1].id } });
        friends = friends.map((e) => [e.date])



        //, ...await prisma.relationships.findMany({ where: { second_id_joined: data[0].id } })]
    } catch (e) {
        console.log(e);
    }
    return NextResponse.json({ message: "success", friends: friends });
}



