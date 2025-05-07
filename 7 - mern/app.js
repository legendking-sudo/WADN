import express from 'express';

export const app = express()

app.use(express.json())

// import { router as userRouter } from "./routes/userRoutes.js";

const userRouter = (async(req,res) => {
    res.status(201).json({
        status:'work',
        data:"hello world"
    })
})

app.use("/api/users",userRouter);

app.all("*", (req, res, next) => {
    res.status(201).json({
        status:'succesfull',
        data:"hello world"
    })
});