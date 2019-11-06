export interface Question {
  type: "scale" | "select" | "text";
  text: string;
  questionDetails?: string;
  options?: string[]; // in order from bad to good
}

export interface Answer {
  question: Question;
  value: string;
}

export interface Feedback {
  user: {
    email: string;
    fullName: string;
    avatar: string;
  };
  questions: Question[];
  answers?: Answer[];
}

export interface User {
  fullName: string;
  avatar: string;
  email: string;
  feedback: Feedback[];
}

export interface Author {
  email: string;
  avatar: string;
  fullName: string;
}
