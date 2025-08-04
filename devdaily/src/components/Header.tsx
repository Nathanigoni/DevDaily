// src/components/Header.tsx
export default function Header() {
  return (
    <header className="bg-white shadow p-4 mb-4">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">🧠 DevDaily</h1>
        {/* You can add nav or settings later here */}
      </div>
    </header>
  );
}
