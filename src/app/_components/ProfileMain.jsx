"use client"


export default function ProfileMain({ userData }) {
    async function processClickFriend(e) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        let d = new Date();
        d = d.toISOString();
        const response = await fetch("/api/profile", {
            method: "POST",
            body: JSON.stringify({
                email1: userData.email,
                email2: formData.get("email"),
                date: d
            }),
        });

    }

    return (
        <div className="h-full w-full flex flex-col gap-8 rounded-2xl items-center border border-black shadow-lg border-solid p-3 m-5 ">
            <h2 className="text-2xl">Profile for {userData.name + ` (${userData.email})`}</h2>
            <div className="w-full text-left"></div>
            <p><label className="cursor-not-allowed">Email: {userData.email}</label></p>
            <form onSubmit={processClickFriend}><label><input type='email' id="friend-email" placeholder='Friend email' className='border rounded-sm bg-gray-50 hover:bg-gray-150 p-1' name="email"></input><button className='bg-green-300 border transition hover:bg-green-400 pr-3 pl-3 pb-1 pt-1 m-3 rounded-xl' type="submit">Add friend</button></label></form>
        </div>
    );
}
