import { Router } from "express";
import threadController from "../controllers/thread-controller";
import { authentication } from "../middlewares/authentication";
import { upload } from "../middlewares/upload-file";

const threadRouter = Router();

threadRouter.get("/threads", authentication, threadController.findAll);
threadRouter.get("/threads/:id", authentication, threadController.findOne);
threadRouter.get(
  "/user/threads/:id",
  authentication,
  threadController.findByUser
);
threadRouter.post(
  "/threads",
  authentication,
  upload.single("image"),
  threadController.create
);
threadRouter.delete("/threads/:id", authentication, threadController.delete);

export default threadRouter;
