const {customError}=require('../errors/custom-error')

const errorHandler=(err, req, res, next)=>{
    if(err instanceof customError){
     return res.status(err.statusCode).json({msg:err.message})
    }
    console.log('my error',err)
    return res.status(500).json({msg:'something went wrong, please try again'})
}

module.exports=errorHandler