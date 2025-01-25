import Counter from './components/Counter';

export default function Home() {
  return (
    <main className="min-h-screen bg-mycolor-light-bg p-8 m-0 flex justify-center">
      <div className="p-0 m-0">
        <h1 className="text-4xl font-bold text-center mb-8 text-white bg-mycolor-light-display-bg flex align-center justify-center p-4 rounded-xl shadow-lg w-full">
          Row Counter
        </h1>
        <Counter />
      </div>
    </main>
  );
}