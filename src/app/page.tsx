import Counter from "@/components/counter";
import { Menu } from "@/components/menu";
import { Steps } from "@/components/patternSteps";

export default function Home() {
  return (
    <main className="min-h-screen bg-mycolor-light-bg p-8 m-0 flex items-center justify-center">
      
      <div className="p-0 m-0 grid grid-cols-2 gap-4">
        
        <Counter />
        <Steps/>
      </div>
    </main>
  );

}