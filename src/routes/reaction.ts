import { Router } from "express";
import { authentication } from "../middlewares/authentication";
import reactionController from "../controllers/reaction-controller";

const reactionRouter = Router();

reactionRouter.post(
  "/threads/:id/reply",
  authentication,
  reactionController.reply
);
reactionRouter.delete(
  "/threads/reply/:id",
  authentication,
  reactionController.deleteReply
);
reactionRouter.post("/threads/like", authentication, reactionController.like);
reactionRouter.post(
  "/threads/islike",
  authentication,
  reactionController.isLike
);
reactionRouter.delete(
  "/threads/like/:id",
  authentication,
  reactionController.unlike
);

export default reactionRouter;
