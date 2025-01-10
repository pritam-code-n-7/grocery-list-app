export const errorMiddleware = (error, req, res, next)=>{
    res.status(error.status || 500).json({
        message:error.message || 'something went wrong!',
        status:error.status,
        stack:error.stack,
    })
}