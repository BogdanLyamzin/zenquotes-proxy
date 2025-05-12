import express from "express";
import cors from "cors";
import quotesy from "quotesy";

const app = express();

app.use(cors());

app.get("/api/random", async(_, res)=> {
    try {
        const {text: q, author: a} = quotesy.random();
        res.json({
            q,
            a,
            h: `<blockquote>&ldquo;${q}&rdquo; &mdash; <footer>${a}</footer></blockquote>`
        });
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