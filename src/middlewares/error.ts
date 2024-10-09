import { NextFunction, Request, Response } from "express";
import { CustomError } from "../types/error";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //Handled Errors
  if (err instanceof CustomError) {
    const { statusCode, errors, logging } = err;
    if (logging) {
      console.error(
        JSON.stringify({
          code: err.statusCode,
          errors: err.errors,
          stack: err.stack,
        }),
        null,
        2
      );
    }

    return res.status(statusCode).json({ errors });
  }

  //Unhandled Errors
  console.error(JSON.stringify(err, null, 2));
  return res
    .status(500)
    .send({ errors: [{ message: "Internal Server Error" }] });
};
