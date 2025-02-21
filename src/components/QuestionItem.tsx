import { Question } from "@/types/Question";
import { useState } from "react";

type Props = {
  question: Question;
  count: number;
  onAnswer: (answer: number) => void;
};

export const QuestionItem = ({ question, count, onAnswer }: Props) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const checkQuestion = (key: number) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(key);

      setTimeout(() => {
        onAnswer(key);
        setSelectedAnswer(null);
      }, 1000);
    }
  };

  return (
    <div>
      <div className="text-3xl font-bold mb-5">
        {count}. {question.question}
      </div>
      <ul>
        {question.options.map((option, index) => (
          <li
            key={index}
            onClick={() => checkQuestion(index)}
            className={`
              p-2 border rounded-md 
              ${
                selectedAnswer === null
                  ? "cursor-pointer hover:bg-gray-200 bg-blue-100 hover:opacity-60"
                  : "cursor-auto"
              }
              
              ${
                selectedAnswer !== null && index === question.answer
                  ? "bg-green-100 border-green-300" // Resposta correta (verde)
                  : ""
              }

              ${
                selectedAnswer !== null &&
                index === selectedAnswer &&
                selectedAnswer !== question.answer
                  ? "bg-red-100 border-red-300" // Resposta errada (vermelho)
                  : ""
              }

              ${
                selectedAnswer !== null &&
                index !== selectedAnswer &&
                index !== question.answer
                  ? "bg-gray-100 border-gray-300" // Outras opções (cinza claro)
                  : ""
              }
            `}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};
