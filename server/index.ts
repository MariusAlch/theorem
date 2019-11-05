import "core-js";

import bodyParser from "body-parser";
import compression from "compression";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import next from "next";
import { notesRouter } from "./routers/notes.router";

const nextApp = next({ dev: process.env.NODE_ENV !== "production" });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(async () => {
  const app = express();

  app.use(helmet({}));
  app.use(cors({ origin: "*" }));
  app.use(compression());
  app.use(morgan(process.env.NODE_ENV === "production" ? "common" : "dev"));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api/notes", notesRouter);

  app.get("*", (req, res) => {
    return handle(req, res);
  });

  const port = 3000;
  app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
  });
});
