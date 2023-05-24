import Counter from "./components/Counter";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="px-6">
        <section className="pb-20 pt-10">
          <Counter />
        </section>
        <section className="pb-6">
          <UserList />
        </section>
      </main>
    </div>
  );
}

export default App;
