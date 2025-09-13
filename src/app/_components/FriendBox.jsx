"use client"
import Image from 'next/image'

function processClick() {

}

function FriendBox({ children, user, date }) {
    return (<div className="rounded-xl border border-black shadow-lg border-solid p-3 m-5 bg-green-500/25">
        <h2 className="text-xl">
            {/* <Image alt="profile picture" width="25" height="25" class="inline" src=""></Image> */}
            {user}<button onClick={processClick} className="text-red-500 float-right hover:text-red-700 transition hover:scale-130"> X </button>
        </h2>
        <div className="rounded-xl border-gray-500 border shadow-lg border-solid p-1 m-2 ">Friend since: {date}</div>
    </div>);
}


export default FriendBox;
