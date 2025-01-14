import express from "express";
import cors from "cors";
import helmet from "helmet";

import dbConnect from "../config/db.conn.js";
import groceriesRoute from "../routes/grocery.route.js";
import { errorMiddleware } from "../middlewares/error.middleware.js";

// express instance
const app = express();

// db connection
dbConnect();

// middlewares
app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


// routes
app.use("/api/v1/grocery", groceriesRoute);

// middlewares
app.use(errorMiddleware);


// server running on this port
// const PORT = process.env.PORT || 5000;
// const HOST = process.env.HOST

// app.listen(PORT,HOST, (error) => {
//   if (error) {
//     throw error;
//   }
//   console.log(`server running on http://${HOST}:${PORT}`);
// });
