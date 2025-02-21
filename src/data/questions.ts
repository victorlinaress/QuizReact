export type Question = {
    question: string; // A pergunta em si
    options: string[]; // As opções de resposta
    answer: number; // A resposta correta
  };
  
  export const questions: Question[] = [
    {
      question: 'Qual país foi derrotado na Segunda Guerra Mundial?',
      options: ['Brasil', 'Canadá', 'Alemanha', 'Austrália'],
      answer: 2
    },
    {
      question: 'Qual é a capital da França?',
      options: ['Londres', 'Paris', 'Berlim', 'Roma'],
      answer: 1
    }
  ];
  