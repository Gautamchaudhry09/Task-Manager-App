import express from "express";
import { Connection } from "./database/db.js";
import bodyParser from "body-parser";
import router from "./routes/todoRoutes.js";
import cors from 'cors';
const app = express();

const PORT = 8000;
app.use(cors());
app.use(bodyParser.json());
Connection();
app.listen(PORT, () => console.log(`Your server is running successfully on port ${PORT}`));

app.use('/tasks',router);


