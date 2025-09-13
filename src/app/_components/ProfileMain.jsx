"use client"
const { PrismaClient } = require('../../generated/prisma')

const prisma = new PrismaClient();

function processClickFriend() {
    //get email of person initiating request
    //check if given name is real person
    //if so, then create relationship between both people
}

export default function ProfileMain({ user }) {
    return (
        <div className="h-full w-full flex flex-col gap-8 rounded-2xl items-center border border-black shadow-lg border-solid p-3 m-5 ">
            <h2 className="text-2xl">Profile for {user}</h2>
            <div className="w-full text-left"></div>
            <p></p>
            <labeL><input type='email' placeholder='Friend email' className='border rounded-sm bg-gray-50 hover:bg-gray-150 p-1'></input><button className='bg-green-300 border transition hover:bg-green-400 pr-3 pl-3 pb-1 pt-1 m-3 rounded-xl' onClick={processClickFriend}>Add friend</button></labeL>
        </div>
    );
}
