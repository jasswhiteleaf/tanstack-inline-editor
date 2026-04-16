import { Pattern } from "@/components/examples/c-data-grid-15";

import { PatternEdit1 } from "@/components/examples/c-data-grid-30";
import { PatternEdit2 } from "@/components/examples/c-data-grid-31";
export default function Page() {
  return (
    <main className="flex min-h-svh items-center justify-center gap-10 p-10">
      <div className="flex flex-col gap-6">
        <PatternEdit1 />
        <PatternEdit2 />
      </div>
    </main>
  );
}
