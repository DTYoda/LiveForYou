"use client";

import NumberInput from "./NumberIn";
import { useState } from "react";

export default function DigestMain() {
  const [waterqty, setWQty] = useState<number | "">("");
  const [stepsqty, setSQty] = useState<number | "">("");
  const [stretchqty, setSTQty] = useState<number | "">("");
  const [exqty, setEQty] = useState<number | "">("");
  const [rateqty, setRQty] = useState<number | "">("");
  return (
    <div className="h-full w-full flex flex-col gap-8 text-2xl border rounded-2xl items-center">
      <div>Complete Your Daily Digest!</div>
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
          step={1}
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
      <div>Comments: </div>
      <button className="border rounded-2xl w-32">Post</button>
    </div>
  );
}
