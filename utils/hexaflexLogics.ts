
export interface HexaflexScores {
  acceptance: number;
  defusion: number;
  presence: number;
  self: number;
  values: number;
  action: number;
}

export function determineDominantPole(scores: HexaflexScores): string {
  const entries = Object.entries(scores);
  entries.sort((a, b) => b[1] - a[1]);

  const [topPole, topScore] = entries[0];

  // Soglie e suggerimenti possono essere personalizzate qui
  return topPole;
}

export function getPoleExplanation(pole: string): string {
  const explanations: Record<string, string> = {
    acceptance: "Stai facendo i conti con emozioni difficili. Possiamo esplorare insieme come accoglierle con gentilezza.",
    defusion: "La tua mente tende a trattenerti con pensieri insistenti. Possiamo notare insieme le trappole della mente?",
    presence: "Hai bisogno di radicarti nel momento presente. Ti va di provare un esercizio di consapevolezza?",
    self: "Hai bisogno di contattare uno spazio più ampio dentro di te. Possiamo provare a osservare i pensieri da un'altra prospettiva.",
    values: "Sei pronto a riscoprire ciò che per te è davvero importante. Vuoi esplorare insieme i tuoi valori?",
    action: "È il momento di fare piccoli passi impegnati. Possiamo scegliere una direzione insieme?",
  };

  return explanations[pole] || "Possiamo esplorare insieme ciò che conta per te in questo momento.";
}
