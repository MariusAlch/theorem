import { createContainer } from "unstated-next";
import { useState } from "react";
import axios from "axios";
import Router from "next/router";
import { User, Feedback, Answer, Author } from "../shared/types";

export const StateContainer = createContainer(() => {
  const [user, setUser] = useState<User & { feedbackForMe: ({ from: Author } & Feedback)[] }>(null);

  const [answers, setAnswers] = useState<Answer[]>([]);
  const [value, setValue] = useState<string>("");
  const [feedback, setFeedback] = useState<Feedback>(undefined);
  const [questionIndex, setQuestionIndex] = useState<number>(0);

  async function nextQuestion(skip: boolean) {
    const answer: Answer = {
      question: feedback.questions[questionIndex],
      value: skip ? "skip" : value,
    };

    //handle non last step
    if (questionIndex < feedback.questions.length - 1) {
      const newAnswers = [...answers];
      newAnswers[questionIndex] = answer;

      setAnswers(newAnswers);
      setValue("");
      setQuestionIndex(questionIndex + 1);
      return;
    }

    await axios.post("/api/submit-feedback", {
      ...feedback,
      answers: [...answers, answer],
    });
    Router.replace("/my-feedback");
  }

  function previousQuestion() {
    const value = answers[questionIndex - 1].value;
    setValue(value === "skip" ? "" : value);
    setQuestionIndex(questionIndex - 1);
  }

  function resetQuestions() {
    setAnswers([]);
    setValue("");
    setFeedback(undefined);
    setQuestionIndex(0);
  }

  function init() {
    axios
      .get("/api/me")
      .then(resp => setUser(resp.data))
      .catch(() => {
        Router.replace("/");
      });
  }

  return {
    questionIndex,
    setQuestionIndex,
    feedback,
    setFeedback,
    value,
    setValue,
    answers,
    setAnswers,
    init,
    user,
    previousQuestion,
    nextQuestion,
    resetQuestions,
  };
});
