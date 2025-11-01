"use strict";
import express from "express";
import * as jokeController from "../controllers/jokeController.mjs";
const router = express.Router();
router.post("/add", jokeController.addJoke);
router.get("/random", jokeController.getRandomJoke);
export default router;