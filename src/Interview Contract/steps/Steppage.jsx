import React from "react";

export default function Stepspage() {
  return (
    <>
    <div className="mb-6">

<div className="flex items-center gap-2 text-gray-300">
<button className="text-lg">←</button>
<h2 className="text-lg font-semibold">
Check Availability
</h2>
</div>

<p className="text-sm text-gray-400 mt-2">
Step {step} of 3
</p>

<div className="w-full bg-slate-700 h-2 rounded mt-1">

<div
className="bg-blue-500 h-2 rounded"
style={{ width: `${step * 33}%` }}
></div>

</div>

</div>
    </>
  );
}