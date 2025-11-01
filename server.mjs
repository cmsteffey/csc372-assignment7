import express from "express";
import categoryRoutes from "./routes/categoryRoutes.mjs";
import jokeRoutes from "./routes/jokeRoutes.mjs";
import multer from "multer";
const app = express();
app.use("/", express.static("public"));
app.use(multer().none());
app.use(express.json())
app.use("/jokebook", categoryRoutes);
app.use("/jokebook", jokeRoutes);
app.listen(3000);

//C:\Users\Sasha\source\repos\csc372-assignment7\routes\categoryRoutes.mjs
