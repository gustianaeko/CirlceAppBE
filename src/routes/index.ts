import { Router } from "express";
import userRouter from "./user";
import authRouter from "./auth";
import threadRouter from "./thread";
import reactionRouter from "./reaction";
import followRouter from "./follow";

const router = Router();

router.use("/", userRouter);
router.use("/", authRouter);
router.use("/", threadRouter);
router.use("/", reactionRouter);
router.use("/", followRouter);

export default router;
