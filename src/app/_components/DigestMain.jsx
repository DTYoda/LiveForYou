import NumberIn from "./NumberIn";

export default function DigestMain() {
  return (
    <div className="h-full w-full flex flex-col gap-8 text-2xl border rounded-2xl items-center">
      <div>
        Cups of Water: <NumberIn></NumberIn>
      </div>
      <div>Steps: </div>
      <div>Stretching: </div>
      <div>Exercise: </div>
      <div>Rating: </div>
      <div>Comments: </div>
      <button className="border rounded-2xl w-32">Post</button>
    </div>
  );
}
