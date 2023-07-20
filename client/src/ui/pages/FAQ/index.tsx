import { QuestionCard } from "@/ui/components/QuestionCard";
import { FC } from "react";
import styles from "./styles.module.css";

const faqData: { question: string; answer: string }[] = [
  {
    question: "Что такое Билетопоиск?",
    answer:
      "Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов.",
  },
  {
    question: "Какой компании принадлежит Билетопоиск?",
    answer: "Секрет.",
  },
  {
    question: "Как купить билет на Билетопоиск?",
    answer: "Взять и купить.",
  },
  {
    question: "Как оставить отзыв на Билетопоиск?",
    answer: "Отрицательный - никак.",
  },
];

export const FAQ: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.text}>Вопросы-ответы</p>
        </div>
        <div>
          {faqData.map((item) => (
            <QuestionCard
              key={item.question}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
