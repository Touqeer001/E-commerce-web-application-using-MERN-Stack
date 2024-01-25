import express from "express";
import Connection from "./database/db.js";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import categoryRoutes from "./routes/CategoryRoutes.mjs";

//configure env
dotenv.config();

//rest object
const app = express();

//routes

app.use("/api/v1/category", categoryRoutes);

app.use(express.json());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

//PORT....
const PORT = process.env.PORT || 8080;
Connection();

app.listen(PORT, () =>
  console.log("Server is Running successfully on 8000 Port....")
);
