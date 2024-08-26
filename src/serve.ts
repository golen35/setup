import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import { routes } from "./router";



const app = express();

app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);


dotenv.config({ path: ".env" });

// Middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());


routes(app);

export const port = process.env.PORT || 8000;
export const JWT_SECRET = process.env.JWT_SECRET!

// Conection MongoDB
const MONGOURL = process.env.MONGO_URL;
// Mongose
mongoose.connect(MONGOURL).then(()=>{
    console.log("Database conected successful.")
    app.listen(port, ()=>{
        console.log(`Server is ruuning on port ${port}`)
    })
}).catch((error) =>console.log(error))
