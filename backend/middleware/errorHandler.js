export function notFound(req,res,next){
    const error=new Error(`Not Found - ${req.originalUrl}`)
    res.status(404)
    next(error)
}

export function errorHandler(err,req,res,next){
    const statusCode=res.statusCode||500
    res.status(statusCode).json({
        message:err.message,
        stack:process.env.NODE_ENV==='production'?null:err.stack
    })
}