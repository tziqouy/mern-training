import express from "express";
import cors from "cors";
import { loginRouter } from "./Routes/LoginRoute.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

app.use(express.json());

app.use("/auth", loginRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
