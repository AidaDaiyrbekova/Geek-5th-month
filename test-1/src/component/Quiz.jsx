import { useState } from "react"
import styles from "./Quiz.module.scss"

export const Quiz = () => {
  const questions = [
    {
      question: "Сколько месяцев в году имеют 28 дней?",
      options: ["1", "2", "12", "6"],
      correctIndex: 2,
    },
    {
      question: "Столица Франции?",
      options: ["Лондон", "Париж", "Берлин", "Мадрид"],
      correctIndex: 1,
    },
    {
      question: "Сколько цветов в радуге?",
      options: ["5", "6", "7", "8"],
      correctIndex: 2,
    },
    {
      question: "Какой планете ближе всего к Солнцу?",
      options: ["Земля", "Венера", "Меркурий", "Марс"],
      correctIndex: 2,
    },
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [show, setShow] = useState(false);

  const handleClick = (index) => {
    setShow(index === questions[currentQuestion].correctIndex);
  }

  const nextQuestion = () => {
    setShow(false);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  }

  return (
    <div className={styles.quiz}>
      <h2>{questions[currentQuestion].question}</h2>
      <div>
        {questions[currentQuestion].options.map((option, index) => (
          <button key={index} onClick={() => handleClick(index)}>
            {option}
          </button>
        ))}
      </div>
      {show && <p>ПРАВИЛЬНО!</p>}
      {currentQuestion < questions.length - 1 && (
        <button onClick={nextQuestion}>Следующий вопрос</button>
      )}
    </div>
  )
}
