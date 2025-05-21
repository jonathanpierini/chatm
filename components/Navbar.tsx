
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">Mental Wealth</h1>
        <div className="space-x-4">
          <Link href="/"><span className="hover:underline text-gray-700">Home</span></Link>
          <Link href="/quiz"><span className="hover:underline text-gray-700">Quiz</span></Link>
          <Link href="/chat"><span className="hover:underline text-gray-700">Chat</span></Link>
          <Link href="/journal"><span className="hover:underline text-gray-700">Diario</span></Link>
          <Link href="/exercises"><span className="hover:underline text-gray-700">Esercizi</span></Link>
        </div>
      </div>
    </nav>
  );
}
