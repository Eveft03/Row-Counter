import Counter from "@/components/counter";
import { Menu } from "@/components/menu";
import { Steps } from "@/components/patternSteps";

export default function Home() {
  return (
    <main className="min-h-screen bg-mycolor-light-bg p-8 m-0 justify-center">
      <h1 className="text-4xl font-bold text-center mb-8 text-white bg-mycolor-light-display-bg flex align-center justify-center p-4 rounded-xl shadow-lg w-full">
          Row Counter
        </h1>
      <div className="p-0 m-0 grid grid-cols-3 gap-4">
        
        <Counter />
        <Steps/>
      </div>
    </main>
  );

}