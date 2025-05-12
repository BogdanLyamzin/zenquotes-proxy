import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();

app.use(cors());

app.get("/api/random", async(req, res)=> {
    try {
        const {data} = await axios.get("https://zenquotes.io/api/random");
        res.json(data[0]);
    }
    catch(error) {
        res.status(400).json({
            message: error?.message,
        })
    }
});

const {PORT} = process.env;
const port = Number(PORT) || 3000;

app.listen(3000, ()=> console.log(`Server running on ${port} port`))