import { Router } from "express";
import faker from "faker";
import { User } from "../../shared/types";

export const apiRouter = Router();

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
      submittedFeedback: [],
    };
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

  res.json(user);
});
