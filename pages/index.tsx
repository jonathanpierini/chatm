
// pages/index.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <div className="p-8 max-w-2xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">Benvenuto su Mental Wealth</h1>
      <p className="mb-6 text-gray-700">
        Scopri cosa conta per te, affronta i pensieri difficili e coltiva flessibilità psicologica con l’aiuto del tuo coach AI.
      </p>
      <Link href="/quiz">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-3 rounded text-lg">
          Inizia ora
        </button>
      </Link>
    </div>
  );
}
