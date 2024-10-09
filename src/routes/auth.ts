import { Router } from "express";
import authController from "../controllers/auth-controller";
import { authentication } from "../middlewares/authentication";

const authRouter = Router();

authRouter.post("/auth/login", authController.login);
authRouter.post("/auth/register", authController.register);
authRouter.get("/auth/check", authentication, authController.getUserLogged);

export default authRouter;
