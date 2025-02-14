import CVForm from "./components/CVForm";
import LoginForm from "./components/LoginForm";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen p-8">
      <main className="w-full">
        {/* <CVForm /> */}
        <LoginForm />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
