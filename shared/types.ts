export interface Question {
  type: "scale" | "select" | "text";
  questionText: string;
  options?: string[]; // in order from bad to good
}

export interface Answer {
  question: Question;
  value: string;
}

export type FeedbackSurvey = Question[];

export interface SubmittedFeedback {
  userEmail: string;
  answers: Answer[];
}

export interface User {
  fullName: string;
  avatar: string;
  email: string;
  submittedFeedback: SubmittedFeedback[];
}
