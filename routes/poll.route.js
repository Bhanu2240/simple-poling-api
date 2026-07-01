import express from "express";
import { createPoll,getAllPolls,votePoll, getPollById} from "../controllers/poll.controller.js";

const router = express.Router();

router.post("/", createPoll);
router.get("/",getAllPolls);
router.get("/:id", getPollById);
router.post("/:id/vote",votePoll);
export default router;