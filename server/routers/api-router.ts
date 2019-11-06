import { Router } from "express";
import faker from "faker";
import { User, Question, Feedback } from "../../shared/types";

export const apiRouter = Router();

const feedbackQuestions: Question[] = [
  {
    type: "scale",
    questionDetails: `
      Answer to this question should be based on the performance of the team member based of the project length.
      Now I will continue to write words so I can fill some space in the question details for this question to look more realistic.
    `,
    text: "How do yuo think I am doing?",
  },
  {
    type: "select",
    text: "How would you describe me?",
    options: [
      "You need to improve \n I think the person needs to improve their social and techinical skills",
      "You are good \n I think the person is doing decent but needs just a little boost in some skill",
      "You are great \n I think the person is doing great and sets an example for everybody in the team",
    ],
  },
  {
    type: "text",
    text: "Do you have any other comments about this person's improvement",
  },
];

const users: User[] = Array(8)
  .fill(0)
  .map((_, i) => {
    const firstName = faker.name.firstName();
    const lastName = faker.name.firstName();
    const imgId = Math.floor(Math.random() * 70);

    return {
      fullName: `${firstName} ${lastName}`,
      email: `user${i + 1}@mail.com`,
      avatar: `https://i.pravatar.cc/100?img=${imgId}`,
      feedback: [],
    };
  });

users.forEach(user => {
  user.feedback = users
    .filter(usr => user.email !== usr.email)
    .map(usr => ({
      user: {
        fullName: usr.fullName,
        email: usr.email,
        avatar: usr.avatar,
      },
      questions: feedbackQuestions,
    }));
});

apiRouter.post("/api/login", (req, res) => {
  const { email } = req.body;

  const user = users.find(_ => _.email.toLowerCase() === email.toLowerCase());

  if (!user) {
    return res.status(400).json({ message: "No such user" });
  }

  req.session.email = user.email;

  res.json(user);
});

apiRouter.post("/api/logout", (req, res) => {
  delete req.session.email;

  res.json("OK!");
});

apiRouter.get("/api/me", (req, res) => {
  const user = users.find(_ => _.email === req.session.email);

  const feedbackForMe: Feedback[] = users
    .flatMap(user =>
      user.feedback.map(feedback => {
        return {
          feedback,
          from: {
            fullName: user.fullName,
            email: user.email,
            avatar: user.avatar,
          },
        };
      }),
    )
    .filter(({ feedback }) => feedback.user.email === req.session.email && !!feedback.answers)
    .map(({ feedback, from }) => {
      return {
        ...feedback,
        from,
      };
    });

  res.json({ ...user, feedbackForMe });
});

apiRouter.post("/api/submit-feedback", (req, res) => {
  const feedback: Feedback = req.body;
  const { email } = req.session;

  const user = users.find(user => user.email === email);
  const oldFeedbackIndex = user.feedback.findIndex(fb => fb.user.email === feedback.user.email);

  user.feedback.splice(oldFeedbackIndex, 1, feedback);

  res.json(feedback);
});
