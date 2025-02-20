"use client"; 

import { useState } from "react";
import { questions } from "@/data/questions";

const Page = () => {
  const title = "Quiz de Culinária";
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswered = (answer: number) => {
    // Aqui você pode adicionar lógica para lidar com a resposta
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-blue-600">
      <div className="w-full max-w-xl rounded-md bg-white text-black shadow shadow-black">
        {/* Título */}
        <div className="p-5 font-bold text-2xl border-b border-gray-300">
          {title}
        </div>

        {/* Corpo do Quiz */}
        <div className="p-5">
          {/* Renderizando a pergunta e alternativas */}
          <div className="mb-5">
            <div className="text-lg font-semibold">
              {currentQuestion + 1}. {questions[currentQuestion].question}
            </div>
            <ul className="mt-3">
              {questions[currentQuestion].options.map((option, index) => (
                <li
                  key={index}
                  className="p-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => handleAnswered(index)} // Passando o índice da opção
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Rodapé do Quiz */}
        <div className="p-5 text-center border-t border-gray-300">
          {currentQuestion + 1} de {questions.length} pergunta
          {questions.length === 1 ? "" : "s"}
        </div>
      </div>
    </div>
  );
};

export default Page;