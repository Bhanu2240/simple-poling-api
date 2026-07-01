import express from "express";
import { createPoll,getAllPolls } from "../controllers/poll.controller.js";

const router = express.Router();

router.post("/", createPoll);
router.get("/",getAllPolls);

export default router;