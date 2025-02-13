import Form from "./components/Form";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen p-8">
      <main className="w-full">
        <Form />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
