import express from "express";

//configure env
dotenv.config();


//rest object
const app = express();


app.use(express.json());


//PORT....
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(
      `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
        .white
    )