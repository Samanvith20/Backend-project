  const AsyncHandler=(requestHandler)=>{
       return(req,res,next)=>{
        Promise.resolve( requestHandler(req,res,next)).catch(next)
  }
} 
export {AsyncHandler}
// Async Handler:

//Role: Handles asynchronous operations and simplifies error handling for async functions.
 
/*const AsyncHandler=(requestHandler)=>{
    return async(req,res,next)=>{
        try{
            await requestHandler(req,res,next);
        }catch(err){
            next(err);
        }
    }
}*/