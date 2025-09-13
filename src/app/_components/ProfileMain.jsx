const { PrismaClient } = require('../../generated/prisma')

const prisma = new PrismaClient();

export default function ProfileMain({ user }) {
    return (
        <div className="h-full w-full flex flex-col gap-8 rounded-2xl items-center rounded-xl border border-black shadow-lg border-solid p-3 m-5 ">

            <h2 className="text-2xl">Profile for {user}</h2>
            <div className="w-full text-left">

            </div>
        </div>
    );
}
