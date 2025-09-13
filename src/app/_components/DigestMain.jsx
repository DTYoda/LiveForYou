"use client";

import NumberInput from "./NumberIn";
import { useState } from "react";

export default function DigestMain({ user }) {
  async function handleSubmit() {
    const payload = {
      steps: stepsqty || null,
      water: waterqty || null,
      stretch: stretchqty || null,
      exercise: exqty || null,
      rating: rateqty || null,
      comment: comments || "",
      user_email: user.email || null,
    };
    await fetch("/api/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  }

  const [waterqty, setWQty] = useState(0);
  const [stepsqty, setSQty] = useState(0);
  const [stretchqty, setSTQty] = useState(0);
  const [exqty, setEQty] = useState(0);
  const [rateqty, setRQty] = useState(0);
  const [comments, setComments] = useState("");
  const [title, setTitle] = useState("");
  return (
    <div className="h-full w-full flex flex-col gap-8 text-2xl border rounded-2xl items-center">
      <div>Complete Your Daily Digest!</div>
      <div className="flex flex-col w-full items-center">
        <label htmlFor="myInput">Title:</label>
        <input
          className="text-sm w-1/2 h-8"
          type="text"
          id="comments"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Type here..."
        />
      </div>
      <div className="p-0">
        <NumberInput
          label="Cups of Water"
          value={waterqty}
          onChange={setWQty}
          min={0}
          max={1000000}
          step={1}
          helperText=""
          prefix={<span className="text-sm">#</span>}
        />
      </div>
      <div className="p-0">
        <NumberInput
          label="Steps"
          value={stepsqty}
          onChange={setSQty}
          min={0}
          max={1000000}
          step={100}
          helperText=""
          prefix={<span className="text-sm">#</span>}
        />
      </div>
      <div className="p-0">
        <NumberInput
          label="Mins of Stretching"
          value={stretchqty}
          onChange={setSTQty}
          min={0}
          max={1000000}
          step={10}
          helperText=""
          prefix={<span className="text-sm">#</span>}
        />
      </div>
      <div className="p-0">
        <NumberInput
          label="Mins of Exercise"
          value={exqty}
          onChange={setEQty}
          min={0}
          max={10000000}
          step={10}
          helperText=""
          prefix={<span className="text-sm">#</span>}
        />
      </div>
      <div className="p-0">
        <NumberInput
          label="Rate Your Day!"
          value={rateqty}
          onChange={setRQty}
          min={0}
          max={5}
          step={1}
          helperText="Rating out of 5"
          prefix={<span className="text-sm">#</span>}
        />
      </div>
      <div className="flex flex-col w-full items-center">
        <label htmlFor="myInput">Comments:</label>
        <textarea
          className="text-sm w-1/2 h-64"
          type="text"
          id="comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          placeholder="Type here..."
        />
      </div>
      <button onClick={handleSubmit} className="border rounded-2xl w-32">
        Post
      </button>
    </div>
  );
}
