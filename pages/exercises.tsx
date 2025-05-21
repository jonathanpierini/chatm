
// pages/exercises.tsx
const exercises = [
  { id: 'defusion', title: 'Foglia sul fiume', desc: 'Osserva i tuoi pensieri passare come foglie su un fiume.' },
  { id: 'presence', title: 'Osserva il respiro', desc: 'Porta attenzione al respiro per 2 minuti.' },
  { id: 'values', title: 'Scrivi i tuoi valori', desc: 'Annota cosa conta davvero per te in questo momento.' },
];

export default function Exercises() {
  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Esercizi suggeriti</h2>
      <div className="space-y-4">
        {exercises.map((ex) => (
          <div key={ex.id} className="bg-blue-100 p-4 rounded shadow">
            <h3 className="font-bold">{ex.title}</h3>
            <p>{ex.desc}</p>
            <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded">Inizia</button>
          </div>
        ))}
      </div>
    </div>
  );
}
