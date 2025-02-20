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
      onAnswer(key);
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
            className={`
              p-2 cursor-pointer hover:bg-gray-200 border rounded-md bg-blue-100 hover:opacity-60
              ${selectedAnswer !== null ? 'cursor-auto' : 'cursor-pointer hover:opacity-60'}
              ${selectedAnswer !== null ? 
                (selectedAnswer === question.answer && selectedAnswer === index ? 
                  'bg-green-100 border-blue-300' : 
                  'bg-green-100 border-green-300') : 
                ''}
              ${selectedAnswer !== null ? 
                (selectedAnswer === question.answer && selectedAnswer !== index ? 
                  'bg-green-100 border-blue-300' : 
                  'bg-red-100 border-red-300') : 
                ''}
            `}
            onClick={() => checkQuestion(index)} // Chama a função checkQuestion quando o usuário clicar
          >
            {option} {/* Renderiza cada opção individualmente */}
          </li>
        ))}
      </ul>
    </div>
  );
};
