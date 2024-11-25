"use client";
import { useState } from "react";
function State() {
  let [start, setStart] = useState(0);
  return (
    <div className="bg-slate-900 flex place-content-center py-8">
      <div className="w-48 md:w-56 lg:w-96 flex bg-slate-900 flex-col items-center rounded-md gap-10 border-2 p-20">
        <p className="font-samibold">{start}</p>
        <div className="text-center">
          <button
            onClick={() => setStart(start + 1)}
            className="border border-black border-x-2 bg-white size-12 rounded-full"
          ></button>
          <div>Count</div>
        </div>
        <div className="text-center">
          <button
            onClick={() => setStart(0)}
            className="border border-black border-x-2 size-6 bg-white rounded-full"
          ></button>
          <div className="text-xs">Reset</div>
        </div>
      </div>
    </div>
  );
}

export default State;
