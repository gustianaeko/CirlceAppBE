import { Router } from "express";
import { authentication } from "../middlewares/authentication";
import followController from "../controllers/follow-controller";

const followRouter = Router();

followRouter.post("/follow", authentication, followController.follow);
followRouter.delete("/unfollow/:id", authentication, followController.unfollow);
followRouter.get("/follows", authentication, followController.followList);

export default followRouter;
