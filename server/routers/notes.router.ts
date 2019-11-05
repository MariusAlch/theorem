import { Router } from "express";

export const notesRouter = Router();

/**
 * notes saved in memory for demo purpose
 */
let notes = [];

/**
 * skipping validation since this si only demo
 */
notesRouter.get("/", (req, res) => {
  res.json(notes);
});
notesRouter.post("/", (req, res) => {
  notes = req.body;
  res.json(notes);
});
