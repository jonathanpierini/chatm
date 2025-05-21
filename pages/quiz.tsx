
// pages/quiz.tsx
import { useState } from 'react';
import { useRouter } from 'next/router';

const questions = [
  { id: 'acceptance', text: 'Quanto riesci ad accogliere le emozioni difficili senza combatterle?' },
  { id: 'defusion', text: 'Quanto riesci a osservare i tuoi pensieri senza crederci automaticamente?' },
  { id: 'values', text: 'Quanto ti è chiaro ciò che conta per te davvero nella vita?' },
  // ... altre domande Hexaflex
];

export default function Quiz() {
  const [answers, setAnswers] = useState({});
  const [step, setStep] = useState(0);
  const router = useRouter();

  const handleAnswer = (value: number) => {
    const currentQuestion = questions[step];
    setAnswers({ ...answers, [currentQuestion.id]: value });
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      localStorage.setItem('hexaflex', JSON.stringify(answers));
      router.push('/chat');
    }
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h2 className="text-lg font-semibold mb-4">{questions[step].text}</h2>
      <div className="flex flex-col gap-2">
        {[1, 2, 3, 4, 5].map((value) => (
          <button
            key={value}
            onClick={() => handleAnswer(value)}
            className="bg-blue-100 hover:bg-blue-200 p-3 rounded text-left"
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
}
