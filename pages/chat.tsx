
// pages/chat.tsx
import { useEffect, useState } from 'react';

export default function Chat() {
  const [messages, setMessages] = useState([{ sender: 'ai', text: 'Cosa conta per te oggi?' }]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    const newMessage = { sender: 'user', text: input };
    setMessages((prev) => [...prev, newMessage]);
    setInput('');

    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();
    setMessages((prev) => [...prev, { sender: 'ai', text: data.reply }]);
  };

  return (
    <div className="p-6 max-w-xl mx-auto space-y-4">
      <div className="h-96 overflow-y-auto border p-4 bg-white rounded shadow">
        {messages.map((m, i) => (
          <div key={i} className={m.sender === 'ai' ? 'text-blue-800' : 'text-black'}>
            <p><strong>{m.sender === 'ai' ? 'Mental Wealth' : 'Tu'}:</strong> {m.text}</p>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          className="flex-1 border p-2 rounded"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Scrivi qui..."
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={sendMessage}>
          Invia
        </button>
      </div>
    </div>
  );
}
