import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(request) {
    const prisma = new PrismaClient();
    const { email1, email2, date } = await request.json();

    try {
        //check if given name is real person
        let data = await prisma.users.findMany({ where: { email: email1 } });
        console.log(data);
        if (!data || data.length == 0)
            return NextResponse.json({ message: "not valid user" });
        let data2 = await prisma.users.findMany({ where: { email: email2 } });
        let exists = await prisma.relationships.findMany({ where: { first_id_joined: data[0].id } });
        for (let i = 0; i < exists.length; i++) {
            if (exists[i].second_id_joined === data2[0].id)
                return NextResponse.json({ message: "already friends" });
        }

        //if so, then create relationship between both people
        await prisma.relationships.create({
            data: {
                created_at: date,
                first_id_joined: data[0].id,
                second_id_joined: data2[0].id
            },
        });

    } catch (e) {
        console.log(e);
    }
    return NextResponse.json({ message: "success" });
}



