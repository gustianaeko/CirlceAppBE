import { Request, Response } from "express";
import authService from "../services/auth-service";
import { loginSchema, registerSchema } from "../utils/schemas/auth-schema";
import userService from "../services/user-service";

class AuthController {
  async register(req: Request, res: Response) {
    // #swagger.tags = ['Auth']
    /*  #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/registerSchema"
                    }  
                }
            }
        } 
    */
    try {
      const value = await registerSchema.validateAsync(req.body);

      const user = await authService.register(value);
      res.json({
        status: "success",
        message: "User Created",
        data: {
          user: user.data?.user,
        },
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async login(req: Request, res: Response) {
    // #swagger.tags = ['Auth']
    /*  #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/loginSchema"
                    }  
                }
            }
        } 
    */
    try {
      const value = await loginSchema.validateAsync(req.body);
      const user = await authService.login(value);
      res.json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getUserLogged(req: Request, res: Response) {
    // #swagger.tags = ['Auth']
    try {
      const userId = (req as any).user.id;
      const user = await userService.getUserById(userId);
      res.json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new AuthController();
