
import { PrismaClient } from '@prisma/client'

async function addFriends(email) {
    const prisma = new PrismaClient();
    let ids = await prisma.users.findMany();
    let idDict = {};
    for (let i = 0; i < ids.length; i++) {
        idDict[ids[i].id] = ids[i].email

    }
    let friends = await prisma.relationships.findMany({ where: { first_id_joined: idDict[email] } });
    // console.log(idDict[friends[0].second_id_joined]);

    friends = friends.map(function (e) { return { "name": idDict[e.second_id_joined], "date": e.created_at } });

    // await fetch("/api/friends", {
    //     method: "POST",
    //     body: JSON.stringify({
    //         email: userData.email
    //     }),
    // });

    // const response = await fetch("/api/friends", {
    //     method: "GET"
    // });
    // let friends = await (response.json()).friends;
    friends = friends.map((e) => ({ "user": e.name, "date": e.date }));

    console.log(friends);
    // friends = friends.map((e) => { (<FriendContainer userData={{ "user": e.name, "date": e.date }}></FriendContainer >) });
    // console.log(friends);
    return (<FriendContainer userData={friends[0]}></FriendContainer >);
    // return <div>Hello</div>;//.map((e) => (e) => { <FriendBox userData={{ user: e.name, date: e.date }}></FriendBox> })
}
function FriendContainer({ children, userData }) {
    return (<div>
        {(addFriends(userData.email))}
    </div>);
}

export default FriendContainer;
