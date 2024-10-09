import { Router } from "express";
import userController from "../controllers/user-controller";
import { authentication } from "../middlewares/authentication";
import { upload } from "../middlewares/upload-file";

const userRouter = Router();

userRouter.get("/users", authentication, userController.findAll);
userRouter.get("/users/:id", authentication, userController.findOne);
userRouter.patch(
  "/users",
  authentication,
  upload.single("profilePhoto"),
  userController.update
);

export default userRouter;
