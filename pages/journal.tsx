
// pages/journal.tsx
import { useState } from 'react';

export default function Journal() {
  const [entry, setEntry] = useState('');
  const [log, setLog] = useState<string[]>([]);

  const saveEntry = () => {
    if (entry.trim()) {
      const updated = [...log, entry];
      setLog(updated);
      localStorage.setItem('journal', JSON.stringify(updated));
      setEntry('');
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Il tuo diario personale</h2>
      <textarea
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        className="w-full h-40 p-3 border rounded mb-4"
        placeholder="Scrivi i tuoi pensieri, sensazioni, o un ricordo della giornata..."
      />
      <button onClick={saveEntry} className="bg-yellow-400 text-white px-4 py-2 rounded">
        Salva
      </button>
      <div className="mt-6 space-y-2">
        {log.map((item, idx) => (
          <div key={idx} className="bg-white border p-3 rounded shadow">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
