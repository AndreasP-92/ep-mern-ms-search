import express from "express";
import router from "./controller/routes.js";
import cors from 'cors'

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(router)

app.listen(PORT, () => console.log("Server is running at port " + PORT));

