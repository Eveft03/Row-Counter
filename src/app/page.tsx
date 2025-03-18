import Counter from "@/components/counter";
import { Steps } from "@/components/patternSteps";

export default function Home() {
  return (
    <main className=" my-8 w-screen bg-mycolor-light-bg flex items-center justify-center ">
      <div className=" max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <Steps />
        <Counter />
      </div>
    </main>
  );
}
