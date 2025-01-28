import { ZodError } from "zod"
import { formatZodError } from "../helpers.js"

export const errorMiddleware = (error, req, res, next)=>{
    if(error instanceof ZodError){
        const errors = formatZodError(error)
        return res.status(422).json({success:false, errors})
    }
    return res.status(error.status || 500).json({
        message:error.message || 'something went wrong!',
        status:error.status,
        stack:error.stack,
    })
}