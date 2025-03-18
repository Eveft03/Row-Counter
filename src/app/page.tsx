import Counter from "@/components/counter";
import { Steps } from "@/components/patternSteps";
import Timer from "@/components/timer";

export default function Home() {
  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
        <Steps />
        <Counter />
        <Timer/>
      </div>
    </div>
  );
}