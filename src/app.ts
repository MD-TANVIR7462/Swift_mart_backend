import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { UserRouter } from "./routes/User.routes";
import { ProductRouter } from "./routes/Product.routes";
import { UserRoleRouter } from "./routes/UserRole.routes";
const app = express();

//*parsers
app.use(express.json());
app.use(cors());



//*Routes.......
app.use("/api/user",UserRouter)
app.use("/api/product",ProductRouter)
app.use("/api/role",UserRoleRouter)











app.get("/", (req: Request, res: Response) => {
  res.json("Hello Swift  ! ");
});


//*global error handler..
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  let message: any;
  let finalMessage: any;

  //  Cast error handelar//
  if (err?.name === "CastError") {
    (message = "Cast Error"), (finalMessage = `${err.value}is not a valid ID!`);
  }
  //Duplocate errror
  else if (err?.code === 11000) {
    (message = "Duplicate Entry"),
      (finalMessage = `${err.keyValue.title}  is already exists`);
  }
  //  Validation error
  else if (err?.name === "ValidationError") {
    (message = "Validation Error"), (finalMessage = `${err.message}`);
  }
  res.status(500).json({
    success: false,
    ErrorType: message,
    errorMessage: finalMessage,
    errorDetails: err,
    stack: err.stack,
  });
});


export default app;