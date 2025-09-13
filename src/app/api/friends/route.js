import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

let friends = [];
export async function POST(request) {
    const prisma = new PrismaClient();
    const { email } = await request.json();

    try {
        let ids = await prisma.users.findMany();
        let idDict = {};
        for (let i = 0; i < ids.length; i++) {
            idDict[ids[i].id] = ids[i].email

        }


        friends = await prisma.relationships.findMany({ where: { first_id_joined: idDict[email] } });
        // console.log(idDict[friends[0].second_id_joined]);

        friends = friends.map(function (e) { return { "name": idDict[e.second_id_joined], "date": e.created_at } });
        // console.log(friends);
        return NextResponse.json(friends); //{ message: "success", friends: friends }



        //, ...await prisma.relationships.findMany({ where: { second_id_joined: data[0].id } })]
    } catch (e) {
        console.log(e);
        // return NextResponse.json({ message: "error" });

    }
    return NextResponse.json({ message: "success", friends: friends });
}
export async function GET() {
    console.log(friends);
    return NextResponse.json({ message: "success", friends: friends });;
}



