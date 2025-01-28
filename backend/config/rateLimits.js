import rateLimit from "express-rate-limit";

export const todoLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, //60 minutes
    limit: 50,
    standardHeaders:"draft-7",
    legacyHeaders:false,
})

export const authLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, //60 minutes
    limit: 30,
    standardHeaders:"draft-7",
    legacyHeaders:false,
})